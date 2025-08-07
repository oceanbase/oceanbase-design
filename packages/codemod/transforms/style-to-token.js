const { upperFirst } = require('lodash');
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

function isFirstUpperCase(str) {
  return upperFirst(str) === str;
}

// ref: https://github.com/facebook/jscodeshift/issues/403#issuecomment-991759561
function shorthandProperty(property) {
  property.shorthand = true;
  return property;
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
          const functionName =
            parentType === 'FunctionDeclaration'
              ? path.parentPath.value?.id?.name
              : parentType === 'ArrowFunctionExpression'
                ? path.parentPath.parentPath?.value?.id?.name
                : undefined;
          const calleeName = path.parentPath.parentPath?.parentPath?.value?.callee?.name;
          if (
            includeJSXElement &&
            functionName &&
            // React function component or React hooks
            (isFirstUpperCase(functionName) || functionName.startsWith('use'))
          ) {
            // avoid duplicate insert when it's existed
            if (!includeUseTokenStatement) {
              const insertString = 'const { token } = theme.useToken()';
              // insert `const { token } = theme.useToken()`
              path.get('body').value.unshift(j.expressionStatement(j.identifier(insertString)));
              // import `theme` from @oceanbase/design
              addSubmoduleImport(j, root, {
                moduleName: '@oceanbase/design',
                importedName: 'theme',
                importKind: 'value',
              });
            }
          }
          // antd-style createStyles
          else if (parentType === 'ArrowFunctionExpression' && calleeName === 'createStyles') {
            const arrowFunc = path.parentPath?.parentPath?.value?.[0];
            if (arrowFunc && arrowFunc.type === 'ArrowFunctionExpression') {
              let hasToken = false;
              if (arrowFunc.params.length > 0) {
                const param = arrowFunc.params[0];
                if (param.type === 'ObjectPattern') {
                  hasToken = param.properties.some(
                    p => p.type === 'ObjectProperty' && p.key && p.key.name === 'token'
                  );
                  // 如果参数对象中没有 token 属性，则插入 token 属性
                  if (!hasToken) {
                    param.properties.push(
                      shorthandProperty(
                        j.property('init', j.identifier('token'), j.identifier('token'))
                      )
                    );
                  }
                } else {
                  // 如果参数不是对象结构，则替换为 { token }
                  arrowFunc.params[0] = j.objectPattern([
                    shorthandProperty(
                      j.property('init', j.identifier('token'), j.identifier('token'))
                    ),
                  ]);
                }
              } else {
                // 如果没有参数，则插入 { token }
                arrowFunc.params = [
                  j.objectPattern([
                    shorthandProperty(
                      j.property('init', j.identifier('token'), j.identifier('token'))
                    ),
                  ]),
                ];
              }
            }
          } else {
            // React class component and static file (not react component)
            // import `token` from @oceanbase/design
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
        // import `token` from @oceanbase/design
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
