const { addSubmoduleImport } = require('./utils');
const { tokenParse } = require('./utils/token');
const { printOptions } = require('./utils/config');

function isTopBlockStatement(path) {
  const isBlockStatement = path.value.type === 'BlockStatement';
  let isTop = isBlockStatement && true;
  path = path.parentPath;
  while (isTop && path.value.type !== 'Program') {
    // isTopBlockStatement => not wrapped by BlockStatement
    if (path.value.type === 'BlockStatement') {
      isTop = false;
      break;
    }
    path = path.parentPath;
  }
  return isTop;
}

function isTopIdentifier(path) {
  let isTop = true;
  path = path.parentPath;
  while (isTop && path.value.type !== 'Program') {
    // isTopIdentifier => not wrapped by BlockStatement
    if (path.value.type === 'BlockStatement') {
      isTop = false;
      break;
    }
    path = path.parentPath;
  }
  return isTop;
}

function importComponent(j, root, options) {
  let hasChanged = false;

  const stringList = root.find(j.StringLiteral, {
    value: value => {
      const { token } = tokenParse(value);
      return !!token;
    },
  });
  if (stringList.length > 0) {
    // replace fixed style to token
    stringList.replaceWith(path => {
      hasChanged = true;
      const { key, token, formattedValue } = tokenParse(path.value.value);
      const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';
      let stringValue = `token.${token}`;
      let templateStringValue = `\`${formattedValue.replace(key, `\${token.${token}}`)}\``;
      // add {} wrapper for JSXAttribute
      if (isJSXAttribute) {
        stringValue = `{${stringValue}}`;
        templateStringValue = `{${templateStringValue}}`;
      }
      return formattedValue === key ? j.identifier(stringValue) : j.identifier(templateStringValue);
    });

    root
      .find(j.BlockStatement)
      // avoid duplicate insert for nested block statement
      .filter(path => isTopBlockStatement(path))
      .forEach(path => {
        const includeToken =
          j(path).find(j.Identifier, {
            name: name => name?.includes('token.'),
          }).length > 0;
        if (includeToken) {
          const includeJSXElement = j(path).find(j.JSXElement).length > 0;
          const includeUseTokenStatement =
            j(path).find(j.Identifier, {
              name: name => name.includes('useToken'),
            }).length > 0;
          const parentType = path.parentPath.value?.type;
          // React function component
          if (includeJSXElement && parentType !== 'ClassMethod') {
            // avoid duplicate insert when it's existed
            if (!includeUseTokenStatement) {
              const insertString = 'const { token } = theme.useToken()';
              // insert `const { token } = theme.useToken()`
              path.get('body').value.unshift(j.expressionStatement(j.identifier(insertString)));
              // import theme from @oceanbase/design
              addSubmoduleImport(j, root, {
                moduleName: '@oceanbase/design',
                importedName: 'theme',
                importKind: 'value',
              });
            }
          } else {
            // React class component and static file (not react component)
            // import token from @oceanbase/design
            addSubmoduleImport(j, root, {
              moduleName: '@oceanbase/design',
              importedName: 'token',
              importKind: 'value',
            });
          }
        }
      });

    root
      .find(j.Identifier)
      .filter(path => isTopIdentifier(path) && path.value.name?.includes('token.'))
      .forEach(() => {
        // import token from @oceanbase/design
        addSubmoduleImport(j, root, {
          moduleName: '@oceanbase/design',
          importedName: 'token',
          importKind: 'value',
        });
      });
  }

  return hasChanged;
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  let hasChanged = false;
  hasChanged = importComponent(j, root, options) || hasChanged;

  return hasChanged ? root.toSource(options.printOptions || printOptions) : null;
};
