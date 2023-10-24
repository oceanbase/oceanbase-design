const { toLower } = require('lodash');
const { addSubmoduleImport } = require('./utils');
const { printOptions } = require('./utils/config');

const TOKEN_MAP = {
  // antd fixed style => antd v5 token
  '#f0f2f5': 'colorBgLayout',
  '#fafafa': 'colorBgLayout',
  '#fff': 'colorBgContainer',
  '#ffffff': 'colorBgContainer',
  '#1890ff': 'colorInfo',
  '#52c41a': 'colorSuccess',
  '#73d13d': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#ff4d4f': 'colorError',
  '#F5222D': 'colorError',
  '#F8636B': 'colorError',
  '#d9d9d9': 'colorBorder',
  '#bfbfbf': 'colorBorder',
  'rgba(0,0,0,0.85)': 'colorText',
  'rgba(0,0,0,0.65)': 'colorTextSecondary',
  'rgba(0,0,0,0.45)': 'colorTextTertiary',
  'rgba(0,0,0,0.25)': 'colorTextQuaternary',
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  'rgba(0,0,0,0.04)': 'colorBgLayout',
};

function trimAll(str) {
  return str?.replace(/(\s)*/g, '');
}

function formatValue(value) {
  return trimAll(toLower(value));
}

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

      // const name = path.value.declarations[0].id.name;
      // if (/^[A-Z]/.test(name)) {
      //   const init = path.value.declarations[0].init;
      //   const initCode = generate(path.value).code;
      //   if (
      //     init &&
      //     initCode.includes('token.') &&
      //     // avoid duplicate statement
      //     !initCode.includes('useToken()') &&
      //     init.type === 'ArrowFunctionExpression'
      //   ) {
      //     const codeBody = init.body;
      //     const importStyleString = `const { token } = theme.useToken();`;
      //     codeBody.body.unshift(j.blockStatement(importStyleString).program.body[0]);
      //   }
      // }
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
