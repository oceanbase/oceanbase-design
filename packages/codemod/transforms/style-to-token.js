const { upperFirst } = require('lodash');
const { addSubmoduleImport } = require('./utils');
const { tokenParse, propertyTokenParse } = require('./utils/token');
const { hexToObToken, obPropertyTokenParse } = require('./utils/ob-token-map');
const { printOptions } = require('./utils/config');
const {
  getHookInjectionConfig,
  ensureThemeInAntdAliasImport,
  migrateObTokenDestructuring,
} = require('./utils/ob-token-destructure');

function getStyleTokenConfig(options = {}) {
  const isAntd = options.tokenTarget === 'antd';
  return {
    isAntd,
    identifier: isAntd ? 'token' : 'obToken',
    staticImport: isAntd ? 'token' : 'obToken',
    hookImport: isAntd ? 'theme' : 'useToken',
    hookStatement: isAntd ? 'const { token } = theme.useToken()' : 'const { obToken } = useToken()',
    resolveToken(value, propertyName) {
      if (isAntd) {
        const propertyResult = propertyTokenParse(propertyName, value);
        if (propertyResult) {
          return propertyResult.token;
        }
        return tokenParse(value).token;
      }
      const propertyResult = obPropertyTokenParse(propertyName, value);
      if (propertyResult) {
        return propertyResult.obToken;
      }
      return hexToObToken(value, { propertyName });
    },
  };
}

function isTopBlockStatement(path) {
  const isBlockStatement = path.value.type === 'BlockStatement';
  let isTop = isBlockStatement && true;
  path = path.parentPath;
  while (isTop && path.value.type !== 'Program') {
    if (path.value.type === 'BlockStatement') {
      isTop = false;
      break;
    }
    path = path.parentPath;
  }
  return isTop;
}

function isInsideCreateStyles(path) {
  let current = path.parentPath;
  while (current) {
    if (current.value?.type === 'CallExpression' && current.value.callee?.name === 'createStyles') {
      return true;
    }
    current = current.parentPath;
  }
  return false;
}

function isFirstUpperCase(str) {
  return upperFirst(str) === str;
}

function shorthandProperty(property) {
  property.shorthand = true;
  return property;
}

function isReactComponentOrHook(functionName, path) {
  if (functionName) {
    return isFirstUpperCase(functionName) || functionName.startsWith('use');
  }
  if (path) {
    const parentType = path.parentPath.value?.type;
    if (parentType === 'FunctionDeclaration') {
      return true;
    }
    if (parentType === 'ArrowFunctionExpression') {
      return false;
    }
  }
  return false;
}

function hasTokenUsage(j, path, config) {
  return (
    j(path).find(j.MemberExpression, {
      object: { name: config.identifier },
    }).length > 0
  );
}

function hasUseTokenStatement(j, path) {
  return (
    j(path).find(j.Identifier, {
      name: name => name.includes('useToken'),
    }).length > 0
  );
}

function getFunctionName(path) {
  const parentType = path.parentPath.value?.type;
  if (parentType === 'FunctionDeclaration') {
    return path.parentPath.value?.id?.name;
  }
  if (parentType === 'ArrowFunctionExpression') {
    return path.parentPath.parentPath?.value?.id?.name;
  }
  return undefined;
}

function createTokenObjectPattern(j, config) {
  if (config.isAntd) {
    return j.objectPattern([
      shorthandProperty(j.property('init', j.identifier('token'), j.identifier('token'))),
    ]);
  }
  return j.objectPattern([
    shorthandProperty(j.property('init', j.identifier('token'), j.identifier('token'))),
    shorthandProperty(j.property('init', j.identifier('obToken'), j.identifier('obToken'))),
  ]);
}

function hasTokenInObjectPattern(param, key = 'token') {
  return param.properties.some(p => p.type === 'ObjectProperty' && p.key && p.key.name === key);
}

function processCreateStylesParams(j, root, config) {
  root
    .find(j.CallExpression, {
      callee: { name: 'createStyles' },
    })
    .forEach(path => {
      const arrowFunc = path.value.arguments[0];
      if (arrowFunc && arrowFunc.type === 'ArrowFunctionExpression') {
        if (arrowFunc.params.length > 0) {
          const param = arrowFunc.params[0];
          if (param.type === 'ObjectPattern') {
            if (!hasTokenInObjectPattern(param, 'token')) {
              param.properties.push(
                shorthandProperty(j.property('init', j.identifier('token'), j.identifier('token')))
              );
            }
            if (!config.isAntd && !hasTokenInObjectPattern(param, 'obToken')) {
              param.properties.push(
                shorthandProperty(
                  j.property('init', j.identifier('obToken'), j.identifier('obToken'))
                )
              );
            }
          } else if (param.type !== 'ObjectPattern') {
            arrowFunc.params[0] = createTokenObjectPattern(j, config);
          }
        } else {
          arrowFunc.params = [createTokenObjectPattern(j, config)];
        }
      }
    });
}

function hasObTokenHookStatement(j, path) {
  return (
    hasUseTokenStatement(j, path) ||
    j(path).find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: 'theme' },
        property: { name: 'useToken' },
      },
    }).length > 0
  );
}

function addTokenImportToBlockStatement(j, root, path, config) {
  const includeJSXElement = j(path).find(j.JSXElement).length > 0;
  const functionName = getFunctionName(path);

  if (includeJSXElement && isReactComponentOrHook(functionName, path)) {
    path.get('body').value.unshift(j.expressionStatement(j.identifier(config.hookStatement)));

    if (config.preserveThemeHook) {
      ensureThemeInAntdAliasImport(j, root);
    } else {
      addSubmoduleImport(j, root, {
        moduleName: '@oceanbase/design',
        importedName: config.hookImport,
        importKind: 'value',
      });
    }
  } else if (includeJSXElement) {
    addSubmoduleImport(j, root, {
      moduleName: '@oceanbase/design',
      importedName: config.staticImport,
      importKind: 'value',
    });
  }
}

function addTokenToExistingImport(j, root, config) {
  const hasUseTokenImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: 'useToken' },
      }).length > 0;

  const hasHookImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: config.hookImport },
      }).length > 0;

  if (hasUseTokenImport || hasHookImport) {
    return;
  }

  root
    .find(j.ImportDeclaration, {
      source: { value: '@oceanbase/design' },
    })
    .forEach(importPath => {
      const specifiers = importPath.value.specifiers;
      const hasStaticImport = specifiers.some(
        spec => spec.type === 'ImportSpecifier' && spec.imported.name === config.staticImport
      );
      if (!hasStaticImport) {
        specifiers.push(j.importSpecifier(j.identifier(config.staticImport)));
      }
    });
}

function getPropertyNameFromPath(path) {
  let current = path.parentPath;
  while (current) {
    if (current.value?.type === 'ObjectProperty' && current.value.key?.type === 'Identifier') {
      return current.value.key.name;
    }
    if (current.value?.type === 'JSXAttribute' && current.value.name?.type === 'JSXIdentifier') {
      return current.value.name.name;
    }
    current = current.parentPath;
  }
  return undefined;
}

function createTokenMemberExpression(j, config, tokenKey) {
  return j.memberExpression(j.identifier(config.identifier), j.identifier(tokenKey));
}

function processStringLiterals(j, root, config) {
  let hasChanged = false;

  const stringList = root.find(j.StringLiteral, {
    value: value => {
      return !!value;
    },
  });

  stringList.forEach(path => {
    if (!config.isAntd && isInsideCreateStyles(path)) {
      return;
    }
    const propertyName = getPropertyNameFromPath(path);
    const value = path.value.value;
    const tokenKey = config.resolveToken(value, propertyName);
    if (!tokenKey) {
      return;
    }

    hasChanged = true;
    const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';
    const { key } = config.isAntd ? tokenParse(value) : { key: null };
    const formattedValue = value.toLowerCase().replace(/\s/g, '');

    if (config.isAntd && key && formattedValue === key) {
      const memberExpression = createTokenMemberExpression(j, config, tokenKey);
      j(path).replaceWith(
        isJSXAttribute ? j.jsxExpressionContainer(memberExpression) : memberExpression
      );
      return;
    }

    if (config.isAntd && key && value.includes(key) && formattedValue !== key) {
      const prefix = value.substring(0, value.indexOf(key));
      const suffix = value.substring(value.indexOf(key) + key.length);
      const tpl = j.templateLiteral(
        [
          j.templateElement({ raw: prefix, cooked: prefix }, false),
          j.templateElement({ raw: suffix, cooked: suffix }, true),
        ],
        [createTokenMemberExpression(j, config, tokenKey)]
      );
      j(path).replaceWith(isJSXAttribute ? j.jsxExpressionContainer(tpl) : tpl);
      return;
    }

    if (!config.isAntd && tokenKey) {
      const parsed = tokenParse(value);
      if (parsed.key && value.includes(parsed.key) && value.trim() !== parsed.key) {
        const prefix = value.substring(0, value.indexOf(parsed.key));
        const suffix = value.substring(value.indexOf(parsed.key) + parsed.key.length);
        const tpl = j.templateLiteral(
          [
            j.templateElement({ raw: prefix, cooked: prefix }, false),
            j.templateElement({ raw: suffix, cooked: suffix }, true),
          ],
          [createTokenMemberExpression(j, config, tokenKey)]
        );
        j(path).replaceWith(isJSXAttribute ? j.jsxExpressionContainer(tpl) : tpl);
        return;
      }

      const memberExpression = createTokenMemberExpression(j, config, tokenKey);
      j(path).replaceWith(
        isJSXAttribute ? j.jsxExpressionContainer(memberExpression) : memberExpression
      );
    }
  });

  if (hasChanged) {
    root
      .find(j.BlockStatement)
      .filter(path => isTopBlockStatement(path))
      .forEach(path => {
        if (hasTokenUsage(j, path, config) && !hasObTokenHookStatement(j, path)) {
          addTokenImportToBlockStatement(j, root, path, config);
        }
      });
  }

  return hasChanged;
}

function processTemplateLiterals(j, root, config) {
  let hasChanged = false;

  root.find(j.TemplateLiteral).forEach(path => {
    if (!config.isAntd && isInsideCreateStyles(path)) {
      return;
    }

    const templateLiteral = path.value;
    const quasis = templateLiteral.quasis;
    const expressions = templateLiteral.expressions || [];
    let needsReconstruction = false;
    const newQuasis = [];
    const newExpressions = [];

    for (let i = 0; i < quasis.length; i++) {
      const quasi = quasis[i];
      let value = quasi.value.raw;
      const colorMatch = value.match(
        /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|hsla?\([^)]+\)/g
      );
      if (colorMatch) {
        hasChanged = true;
        needsReconstruction = true;
        const replacements = [];
        colorMatch.forEach(match => {
          const tokenKey = config.resolveToken(match);
          if (tokenKey) {
            replacements.push({ index: value.indexOf(match), match, tokenKey });
          }
        });
        replacements.sort((a, b) => b.index - a.index);

        let processedValue = value;
        replacements.forEach(({ index, match, tokenKey }) => {
          const before = processedValue.substring(0, index);
          const after = processedValue.substring(index + match.length);
          if (before) {
            newQuasis.push(j.templateElement({ raw: before, cooked: before }, false));
          }
          newExpressions.push(createTokenMemberExpression(j, config, tokenKey));
          processedValue = after;
        });

        if (processedValue || newQuasis.length === 0) {
          newQuasis.push(
            j.templateElement({ raw: processedValue || '', cooked: processedValue || '' }, true)
          );
        }
      } else {
        newQuasis.push(quasi);
        if (i < expressions.length) {
          newExpressions.push(expressions[i]);
        }
      }
    }

    if (needsReconstruction) {
      if (newQuasis.length > 0) {
        newQuasis[newQuasis.length - 1].tail = true;
      }
      const allExpressions = [...newExpressions, ...expressions];
      path.replace(j.templateLiteral(newQuasis, allExpressions));
    }
  });

  if (hasChanged) {
    root
      .find(j.BlockStatement)
      .filter(path => isTopBlockStatement(path))
      .forEach(path => {
        if (hasTokenUsage(j, path, config) && !hasObTokenHookStatement(j, path)) {
          addTokenImportToBlockStatement(j, root, path, config);
        }
      });
  }

  return hasChanged;
}

function processObjectProperties(j, root, config) {
  let hasChanged = false;

  const numericPropertyList = root.find(j.ObjectProperty, {
    key: { type: 'Identifier' },
    value: { type: 'NumericLiteral' },
  });

  numericPropertyList.forEach(path => {
    if (!config.isAntd && isInsideCreateStyles(path)) {
      return;
    }
    const propertyName = path.value.key.name;
    const propertyValue = path.value.value.value;
    const tokenKey = config.resolveToken(String(propertyValue), propertyName);
    if (tokenKey) {
      hasChanged = true;
      path.value.value = createTokenMemberExpression(j, config, tokenKey);
    }
  });

  const stringPropertyList = root.find(j.ObjectProperty, {
    key: { type: 'Identifier' },
    value: { type: 'StringLiteral' },
  });

  stringPropertyList.forEach(path => {
    if (!config.isAntd && isInsideCreateStyles(path)) {
      return;
    }
    const propertyName = path.value.key.name;
    const propertyValue = path.value.value.value;
    const tokenKey = config.resolveToken(propertyValue, propertyName);
    if (tokenKey) {
      hasChanged = true;
      path.value.value = createTokenMemberExpression(j, config, tokenKey);
    }
  });

  return hasChanged;
}

function addTokenImportsForObjectProperties(j, root, config) {
  root
    .find(j.BlockStatement)
    .filter(path => isTopBlockStatement(path))
    .forEach(path => {
      if (hasTokenUsage(j, path, config) && !hasObTokenHookStatement(j, path)) {
        const calleeName = path.parentPath.parentPath?.parentPath?.value?.callee?.name;
        if (calleeName !== 'createStyles') {
          addTokenImportToBlockStatement(j, root, path, config);
        }
      }
    });

  const hasTokenUsageInRoot =
    root.find(j.MemberExpression, {
      object: { name: config.identifier },
    }).length > 0;

  if (hasTokenUsageInRoot && shouldAddTopLevelTokenImport(j, root, config)) {
    const hasOceanbaseImport =
      root.find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      }).length > 0;

    if (hasOceanbaseImport) {
      addTokenToExistingImport(j, root, config);
    } else {
      addTopLevelTokenImport(j, root, config);
    }
  }
}

function shouldAddTopLevelTokenImport(j, root, config) {
  const hasCreateStyles =
    root.find(j.CallExpression, {
      callee: { name: 'createStyles' },
    }).length > 0;

  const hasHookUsage =
    root.find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: config.hookImport === 'theme' ? 'theme' : 'useToken' },
        property: { name: config.hookImport === 'theme' ? 'useToken' : undefined },
      },
    }).length > 0 || root.find(j.Identifier, { name: 'useToken' }).length > 0;

  const hasHookImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: config.hookImport },
      }).length > 0;

  const hasStaticImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: config.staticImport },
      }).length > 0;

  if (hasStaticImport) {
    return false;
  }

  if (hasCreateStyles || hasHookUsage || hasHookImport) {
    return false;
  }

  return (
    root.find(j.MemberExpression, {
      object: { name: config.identifier },
    }).length > 0
  );
}

function addTopLevelTokenImport(j, root, config) {
  addSubmoduleImport(j, root, {
    moduleName: '@oceanbase/design',
    importedName: config.staticImport,
    importKind: 'value',
  });
}

function importComponent(j, root, config) {
  let hasChanged = false;
  hasChanged = processStringLiterals(j, root, config) || hasChanged;
  hasChanged = processTemplateLiterals(j, root, config) || hasChanged;
  hasChanged = processObjectProperties(j, root, config) || hasChanged;
  return hasChanged;
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const source = typeof file === 'string' ? file : file.source;
  const root = j(source);
  const config = getStyleTokenConfig(options);
  if (!config.isAntd) {
    Object.assign(config, getHookInjectionConfig(j, root));
  }

  let hasChanged = false;
  hasChanged = importComponent(j, root, config) || hasChanged;
  if (!config.isAntd) {
    hasChanged = migrateObTokenDestructuring(j, root) || hasChanged;
  }

  if (hasChanged) {
    processCreateStylesParams(j, root, config);
  }

  if (hasChanged) {
    const hasOtherTokenLogic =
      root.find(j.CallExpression, {
        callee: { name: 'createStyles' },
      }).length > 0 ||
      root.find(j.Identifier, { name: 'useToken' }).length > 0 ||
      root
        .find(j.ImportDeclaration, {
          source: { value: '@oceanbase/design' },
        })
        .find(j.ImportSpecifier, {
          imported: { name: config.hookImport },
        }).length > 0;

    if (!hasOtherTokenLogic) {
      addTokenImportsForObjectProperties(j, root, config);
    }
  }

  if (hasChanged) {
    const hasUsage =
      root.find(j.MemberExpression, {
        object: { name: config.identifier },
      }).length > 0;

    if (hasUsage && shouldAddTopLevelTokenImport(j, root, config)) {
      const hasOceanbaseImport =
        root.find(j.ImportDeclaration, {
          source: { value: '@oceanbase/design' },
        }).length > 0;

      if (hasOceanbaseImport) {
        addTokenToExistingImport(j, root, config);
      } else {
        addTopLevelTokenImport(j, root, config);
      }
    }
  }

  return hasChanged ? root.toSource(options.printOptions || printOptions) : null;
};

module.exports.getStyleTokenConfig = getStyleTokenConfig;
