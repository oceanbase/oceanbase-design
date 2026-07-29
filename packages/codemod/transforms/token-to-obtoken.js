const { addSubmoduleImport } = require('./utils');
const { printOptions } = require('./utils/config');
const { antdTokenToObToken } = require('./utils/ob-token-map');
const { transformStyleValue } = require('./utils/css-value-transform');
const { getLessTokensFromTheme } = require('./less-to-cssvar');
const { migrateObTokenDestructuring, hasObTokenFromHook } = require('./utils/ob-token-destructure');

const LESS_TOKENS = getLessTokensFromTheme();

function transformTokenMember(j, path, config = {}) {
  const propertyName = path.value.property?.name;
  if (!propertyName) {
    return false;
  }
  const obTokenKey = antdTokenToObToken(propertyName, {
    propertyName: config.propertyName,
  });
  if (!obTokenKey) {
    return false;
  }
  path.value.object.name = 'obToken';
  path.value.property.name = obTokenKey;
  return true;
}

function migrateStaticTokenImport(j, root) {
  let hasChanged = false;
  root
    .find(j.ImportSpecifier, {
      imported: { name: 'token' },
    })
    .forEach(path => {
      if (path.parentPath?.value?.source?.value === '@oceanbase/design') {
        path.value.imported.name = 'obToken';
        path.value.local = path.value.local || j.identifier('obToken');
        if (path.value.local.name === 'token') {
          path.value.local.name = 'obToken';
        }
        hasChanged = true;
      }
    });
  return hasChanged;
}

function migrateCreateStylesParams(j, root) {
  let hasChanged = false;
  root.find(j.CallExpression, { callee: { name: 'createStyles' } }).forEach(path => {
    const fn = path.value.arguments[0];
    if (!fn || fn.type !== 'ArrowFunctionExpression' || fn.params.length === 0) {
      return;
    }
    const param = fn.params[0];
    if (param.type === 'ObjectPattern') {
      const hasObToken = param.properties.some(
        p => p.type === 'ObjectProperty' && p.key?.name === 'obToken'
      );
      if (!hasObToken) {
        param.properties.push(j.property('init', j.identifier('obToken'), j.identifier('obToken')));
        param.properties[param.properties.length - 1].shorthand = true;
        hasChanged = true;
      }
    }
  });
  return hasChanged;
}

function transformJsFile(j, root) {
  let hasChanged = false;
  hasChanged = migrateObTokenDestructuring(j, root) || hasChanged;
  hasChanged = migrateStaticTokenImport(j, root) || hasChanged;
  hasChanged = migrateCreateStylesParams(j, root) || hasChanged;

  root.find(j.MemberExpression, { object: { name: 'token' } }).forEach(path => {
    let propertyName;
    const parent = path.parentPath?.value;
    if (parent?.type === 'ObjectProperty' && parent.key?.name) {
      propertyName = parent.key.name;
    }
    if (transformTokenMember(j, path, { propertyName })) {
      hasChanged = true;
    }
  });

  if (
    root.find(j.MemberExpression, { object: { name: 'obToken' } }).length > 0 &&
    !root.find(j.ImportSpecifier, { imported: { name: 'obToken' } }).length &&
    !hasObTokenFromHook(j, root)
  ) {
    addSubmoduleImport(j, root, {
      moduleName: '@oceanbase/design',
      importedName: 'obToken',
      importKind: 'value',
    });
    hasChanged = true;
  }

  return hasChanged;
}

async function transformStyleFile(filePath) {
  const fs = require('fs');
  const postcss = require('postcss');
  const content = fs.readFileSync(filePath, 'utf-8');
  const isLess = filePath.endsWith('.less');
  const syntax = isLess ? require('postcss-less') : require('postcss-scss');
  const { root: ast } = await postcss([]).process(content, {
    syntax,
    from: filePath,
  });

  let hasTransformations = false;
  ast.walk(node => {
    if (node.type === 'decl') {
      const propertyName = node.prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      const { value, changed } = transformStyleValue(node.value, 'ob', propertyName, LESS_TOKENS, {
        useSemanticOb: true,
        varPrefix: isLess ? '@' : '$',
      });
      if (changed) {
        node.value = value;
        hasTransformations = true;
      }
    }
  });

  if (!hasTransformations) {
    return null;
  }
  return ast.toString(syntax.stringify);
}

async function tokenToObtoken(filePath) {
  const fs = require('fs');
  const path = require('path');
  const isDirectory = require('is-directory');
  const { shouldExcludePath } = require('./utils/path-utils');

  const files = [];
  const collect = target => {
    if (isDirectory.sync(target)) {
      fs.readdirSync(target).forEach(name => {
        const full = path.join(target, name);
        if (isDirectory.sync(full)) {
          if (!shouldExcludePath(full)) {
            collect(full);
          }
        } else if (/\.(js|jsx|ts|tsx|less|scss|css)$/.test(name)) {
          files.push(full);
        }
      });
    } else {
      files.push(target);
    }
  };
  collect(filePath);

  for (const file of files) {
    if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      const source = fs.readFileSync(file, 'utf8');
      const jscodeshift = require('jscodeshift');
      const j = jscodeshift.withParser('babylon');
      const root = j(source);
      const hasChanged = transformJsFile(j, root);
      if (hasChanged) {
        fs.writeFileSync(file, root.toSource(printOptions));
      }
    } else if (/\.(less|scss|css)$/.test(file)) {
      const output = await transformStyleFile(file);
      if (output) {
        fs.writeFileSync(file, output);
      }
    }
  }
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const source = typeof file === 'string' ? file : file.source;
  const root = j(source);
  const hasChanged = transformJsFile(j, root);
  return hasChanged ? root.toSource(options.printOptions || printOptions) : null;
};

module.exports.tokenToObtoken = tokenToObtoken;
