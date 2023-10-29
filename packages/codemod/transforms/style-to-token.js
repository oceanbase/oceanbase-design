const { addSubmoduleImport } = require('./utils');
const { tokenParse } = require('./utils/token');
const { printOptions } = require('./utils/config');

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

    root.find(j.BlockStatement).forEach(path => {
      const includeToken =
        j(path).find(j.Identifier, {
          name: name => name?.includes('token.'),
        }).length > 0;
      if (includeToken) {
        const includeJsxElementList = j(path).find(j.JSXElement).length > 0;
        const parentType = path.parentPath.value?.type;
        // React function component
        if (includeJsxElementList && parentType !== 'ClassMethod') {
          const importString = `const { token } = theme.useToken()`;
          path.get('body').value.unshift(j.expressionStatement(j.identifier(importString)));
          // import theme from @oceanbase/design
          addSubmoduleImport(j, root, {
            moduleName: '@oceanbase/design',
            importedName: 'theme',
            importKind: 'value',
          });
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
