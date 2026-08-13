const ANTD_ALIAS_PACKAGES = ['antd', '@alipay/bigfish/antd'];

function getAntdAliasImportSource(j, root) {
  return ANTD_ALIAS_PACKAGES.find(
    pkg => root.find(j.ImportDeclaration, { source: { value: pkg } }).length > 0
  );
}

function isThemeImportedFromAntdAlias(j, root) {
  return ANTD_ALIAS_PACKAGES.some(
    pkg =>
      root
        .find(j.ImportDeclaration, { source: { value: pkg } })
        .find(j.ImportSpecifier, { imported: { name: 'theme' } }).length > 0
  );
}

/** style-to-token 注入 hook 时用：antd alias 走 theme，否则走 useToken */
function getHookInjectionConfig(j, root) {
  if (isThemeImportedFromAntdAlias(j, root)) {
    return {
      hookStatement: 'const { obToken } = theme.useToken()',
      preserveThemeHook: true,
    };
  }
  return {
    hookStatement: 'const { obToken } = useToken()',
    preserveThemeHook: false,
  };
}

function ensureThemeInAntdAliasImport(j, root) {
  const aliasSource = getAntdAliasImportSource(j, root);
  if (!aliasSource) {
    return false;
  }

  let hasChanged = false;
  root.find(j.ImportDeclaration, { source: { value: aliasSource } }).forEach(importPath => {
    const specifiers = importPath.value.specifiers;
    const hasTheme = specifiers.some(
      spec => spec.type === 'ImportSpecifier' && spec.imported?.name === 'theme'
    );
    if (!hasTheme) {
      specifiers.push(j.importSpecifier(j.identifier('theme')));
      hasChanged = true;
    }
  });

  return hasChanged;
}

function hasObTokenFromHook(j, root) {
  return (
    root.find(j.CallExpression, { callee: { name: 'useToken' } }).length > 0 ||
    root.find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: 'theme' },
        property: { name: 'useToken' },
      },
    }).length > 0
  );
}

/**
 * 仅改写解构：const { token } = theme.useToken() → const { obToken } = theme.useToken()
 * 不改写调用形态，不碰 import。
 */
function migrateObTokenDestructuring(j, root) {
  let hasChanged = false;

  const migrateDestructuring = path => {
    const parent = path.parentPath?.value;
    if (parent?.type === 'VariableDeclarator' && parent.id?.type === 'ObjectPattern') {
      parent.id.properties.forEach(prop => {
        if (prop.type === 'ObjectProperty' && prop.key?.name === 'token') {
          prop.key = j.identifier('obToken');
          prop.value = j.identifier('obToken');
          prop.shorthand = true;
          hasChanged = true;
        }
      });
    }
  };

  root
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: 'theme' },
        property: { name: 'useToken' },
      },
    })
    .forEach(migrateDestructuring);

  root
    .find(j.CallExpression, {
      callee: { name: 'useToken' },
    })
    .forEach(migrateDestructuring);

  return hasChanged;
}

module.exports = {
  ANTD_ALIAS_PACKAGES,
  getAntdAliasImportSource,
  isThemeImportedFromAntdAlias,
  getHookInjectionConfig,
  ensureThemeInAntdAliasImport,
  migrateObTokenDestructuring,
  hasObTokenFromHook,
};
