const { addSubmoduleImport } = require('./utils');
const { TOKEN_MAP, formatValue } = require('./utils/token');
const { printOptions } = require('./utils/config');

function importComponent(j, root, options) {
  let hasChanged = false;

  const stringList = root.find(j.StringLiteral, {
    value: value => TOKEN_MAP[formatValue(value)],
  });
  if (stringList.length > 0) {
    // replace inline style to token
    stringList.replaceWith(path => {
      hasChanged = true;
      const stringValue = path.value.value;
      const mapToken = TOKEN_MAP[formatValue(stringValue)];
      return j.identifier(`token.${mapToken}`);
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
