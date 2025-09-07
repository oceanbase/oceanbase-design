const { upperFirst } = require('lodash');
const { addSubmoduleImport } = require('./utils');
const { tokenParse, propertyTokenParse } = require('./utils/token');
const { printOptions } = require('./utils/config');

// 判断当前 path 是否为顶层 BlockStatement
function isTopBlockStatement(path) {
  // 判断当前节点类型是否为 BlockStatement
  const isBlockStatement = path.value.type === 'BlockStatement';
  let isTop = isBlockStatement && true;
  path = path.parentPath;
  // 向上遍历父节点，直到遇到 Program 节点
  while (isTop && path.value.type !== 'Program') {
    // 如果父节点也是 BlockStatement，则当前不是顶层 BlockStatement
    if (path.value.type === 'BlockStatement') {
      isTop = false;
      break;
    }
    path = path.parentPath;
  }
  return isTop;
}

// 判断字符串首字母是否为大写
function isFirstUpperCase(str) {
  return upperFirst(str) === str;
}

// ref: https://github.com/facebook/jscodeshift/issues/403#issuecomment-991759561
function shorthandProperty(property) {
  property.shorthand = true;
  return property;
}

// 包装 JSX 属性值
function wrapJSXValue(value, isJSXAttribute) {
  return isJSXAttribute ? `{${value}}` : value;
}

// 检查是否为 React 组件或 Hook
function isReactComponentOrHook(functionName) {
  return functionName && (isFirstUpperCase(functionName) || functionName.startsWith('use'));
}

// 检查 BlockStatement 中是否包含 token 使用
function hasTokenUsage(j, path) {
  return (
    j(path).find(j.Identifier, {
      name: name => name?.includes('token.'),
    }).length > 0
  );
}

// 检查 BlockStatement 中是否包含 useToken 语句
function hasUseTokenStatement(j, path) {
  return (
    j(path).find(j.Identifier, {
      name: name => name.includes('useToken'),
    }).length > 0
  );
}

// 获取函数名称
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

// 创建 token 对象模式
function createTokenObjectPattern(j) {
  return j.objectPattern([
    shorthandProperty(j.property('init', j.identifier('token'), j.identifier('token'))),
  ]);
}

// 检查对象模式中是否包含 token 属性
function hasTokenInObjectPattern(param) {
  return param.properties.some(p => p.type === 'ObjectProperty' && p.key && p.key.name === 'token');
}

function processCreateStylesParams(j, root) {
  const processedCreateStyles = new Set();

  root
    .find(j.CallExpression, {
      callee: { name: 'createStyles' },
    })
    .forEach(path => {
      const arrowFunc = path.value.arguments[0];
      if (arrowFunc && arrowFunc.type === 'ArrowFunctionExpression') {
        processedCreateStyles.add(path);

        if (arrowFunc.params.length > 0) {
          const param = arrowFunc.params[0];
          if (param.type === 'ObjectPattern' && !hasTokenInObjectPattern(param)) {
            // 如果参数对象中没有 token 属性，则插入 token 属性
            param.properties.push(
              shorthandProperty(j.property('init', j.identifier('token'), j.identifier('token')))
            );
          } else if (param.type !== 'ObjectPattern') {
            // 如果参数不是对象结构，则替换为 { token }
            arrowFunc.params[0] = createTokenObjectPattern(j);
          }
        } else {
          // 如果没有参数，则插入 { token }
          arrowFunc.params = [createTokenObjectPattern(j)];
        }
      }
    });

  return processedCreateStyles;
}

// 添加 token 导入到 BlockStatement
function addTokenImportToBlockStatement(j, root, path) {
  const includeJSXElement = j(path).find(j.JSXElement).length > 0;
  const functionName = getFunctionName(path);

  if (includeJSXElement && isReactComponentOrHook(functionName)) {
    const insertString = 'const { token } = theme.useToken()';
    path.get('body').value.unshift(j.expressionStatement(j.identifier(insertString)));
    addSubmoduleImport(j, root, {
      moduleName: '@oceanbase/design',
      importedName: 'theme',
      importKind: 'value',
    });
  }
}

// 为函数组件和类组件添加 token 到现有导入
function addTokenToExistingImport(j, root) {
  // 检查是否已经导入了 useToken 或 theme
  const hasUseTokenImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: 'useToken' },
      }).length > 0;

  const hasThemeImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: 'theme' },
      }).length > 0;

  // 如果已经有 useToken 或 theme 导入，不需要添加 token 导入
  if (hasUseTokenImport || hasThemeImport) {
    return;
  }

  // 查找所有从 @oceanbase/design 的导入
  const importDeclarations = root.find(j.ImportDeclaration, {
    source: { value: '@oceanbase/design' },
  });

  if (importDeclarations.length === 0) {
    return;
  }

  importDeclarations.forEach(importPath => {
    const specifiers = importPath.value.specifiers;

    // 检查是否已经有 token 导入
    const hasTokenImport = specifiers.some(
      spec => spec.type === 'ImportSpecifier' && spec.imported.name === 'token'
    );

    if (!hasTokenImport) {
      // 添加 token 导入
      const tokenSpecifier = j.importSpecifier(j.identifier('token'));
      specifiers.push(tokenSpecifier);
    }
  });
}

// 处理字符串字面量的 token 替换
function processStringLiterals(j, root) {
  let hasChanged = false;

  const stringList = root.find(j.StringLiteral, {
    value: value => {
      const { token } = tokenParse(value);
      return !!token;
    },
  });

  if (stringList.length > 0) {
    stringList.replaceWith(path => {
      hasChanged = true;
      const { key, token, formattedValue } = tokenParse(path.value.value);
      const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';

      console.log(
        'Processing string:',
        path.value.value,
        'isJSXAttribute:',
        isJSXAttribute,
        'formattedValue:',
        formattedValue,
        'key:',
        key
      );

      if (formattedValue === key) {
        // 完全匹配的情况，直接返回 token.xxx
        const memberExpression = j.memberExpression(j.identifier('token'), j.identifier(token));
        return isJSXAttribute ? j.jsxExpressionContainer(memberExpression) : memberExpression;
      } else {
        // 部分匹配的情况，返回模板字符串
        const beforeToken = formattedValue.replace(key, '');
        const templateString = j.templateLiteral(
          [
            j.templateElement({ raw: beforeToken, cooked: beforeToken }, false),
            j.templateElement({ raw: '', cooked: '' }, true),
          ],
          [j.memberExpression(j.identifier('token'), j.identifier(token))]
        );
        return isJSXAttribute ? j.jsxExpressionContainer(templateString) : templateString;
      }
    });

    // 为包含 token 使用的顶级 BlockStatement 添加导入
    root
      .find(j.BlockStatement)
      .filter(path => isTopBlockStatement(path))
      .forEach(path => {
        if (hasTokenUsage(j, path) && !hasUseTokenStatement(j, path)) {
          addTokenImportToBlockStatement(j, root, path);
        }
      });
  }

  return hasChanged;
}

function importComponent(j, root, options) {
  let hasChanged = false;

  // 处理字符串字面量
  hasChanged = processStringLiterals(j, root) || hasChanged;

  // 处理对象属性值（如 fontSize: 14）
  const objectPropertyChanged = processObjectProperties(j, root);
  hasChanged = objectPropertyChanged || hasChanged;

  return hasChanged;
}

// 处理对象属性
function processObjectProperties(j, root) {
  let hasChanged = false;

  const objectPropertyList = root.find(j.ObjectProperty, {
    key: { type: 'Identifier' },
    value: { type: 'NumericLiteral' },
  });

  if (objectPropertyList.length > 0) {
    objectPropertyList.replaceWith(path => {
      const propertyName = path.value.key.name;
      const propertyValue = path.value.value.value;

      const tokenResult = propertyTokenParse(propertyName, propertyValue);
      if (tokenResult) {
        hasChanged = true;
        const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';
        const stringValue = wrapJSXValue(`token.${tokenResult.token}`, isJSXAttribute);
        return j.objectProperty(j.identifier(propertyName), j.identifier(stringValue));
      }
      return path.value;
    });

    // 如果发生了替换，需要添加 token 导入
    if (hasChanged) {
      addTokenImportsForObjectProperties(j, root);
    }
  }

  return hasChanged;
}

// 为对象属性添加 token 导入
function addTokenImportsForObjectProperties(j, root) {
  root
    .find(j.BlockStatement)
    .filter(path => isTopBlockStatement(path))
    .forEach(path => {
      if (hasTokenUsage(j, path) && !hasUseTokenStatement(j, path)) {
        const calleeName = path.parentPath.parentPath?.parentPath?.value?.callee?.name;
        // 跳过 createStyles 的情况，因为已经在上面处理了
        if (calleeName !== 'createStyles') {
          addTokenImportToBlockStatement(j, root, path);
        }
      }
    });
}

// 检查是否应该添加顶层 token 导入
function shouldAddTopLevelTokenImport(j, root) {
  // 检查是否有 createStyles 调用
  const hasCreateStyles =
    root.find(j.CallExpression, {
      callee: { name: 'createStyles' },
    }).length > 0;

  // 检查是否使用了 theme.useToken()
  const hasThemeUseToken =
    root.find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: 'theme' },
        property: { name: 'useToken' },
      },
    }).length > 0;

  // 检查是否导入了 theme
  const hasThemeImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: 'theme' },
      }).length > 0;

  // 检查是否已经导入了 token
  const hasTokenImport =
    root
      .find(j.ImportDeclaration, {
        source: { value: '@oceanbase/design' },
      })
      .find(j.ImportSpecifier, {
        imported: { name: 'token' },
      }).length > 0;

  // 检查是否有 token.xxx 的使用
  const hasTokenUsage =
    root.find(j.MemberExpression, {
      object: { name: 'token' },
    }).length > 0;

  // 如果已经有 token 导入，不需要添加
  if (hasTokenImport) {
    return false;
  }

  // 如果有 createStyles 或 theme.useToken() 或 theme 导入，不需要添加顶层 token 导入
  if (hasCreateStyles || hasThemeUseToken || hasThemeImport) {
    return false;
  }

  // 如果有 token.xxx 的使用，需要添加导入
  return hasTokenUsage;
}

// 添加顶层 token 导入
function addTopLevelTokenImport(j, root) {
  addSubmoduleImport(j, root, {
    moduleName: '@oceanbase/design',
    importedName: 'token',
    importKind: 'value',
  });
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  let hasChanged = false;
  hasChanged = importComponent(j, root, options) || hasChanged;

  // 处理 createStyles 函数的参数
  if (hasChanged) {
    processCreateStylesParams(j, root);
  }

  // 如果有变化，检查是否需要添加 token 导入
  if (hasChanged) {
    // 检查是否有 token 使用
    const hasTokenUsage =
      root.find(j.MemberExpression, {
        object: { name: 'token' },
      }).length > 0;

    if (hasTokenUsage) {
      // 使用 shouldAddTopLevelTokenImport 函数来判断是否需要添加 token 导入
      if (shouldAddTopLevelTokenImport(j, root)) {
        // 检查是否有 @oceanbase/design 的导入
        const hasOceanbaseImport =
          root.find(j.ImportDeclaration, {
            source: { value: '@oceanbase/design' },
          }).length > 0;

        if (hasOceanbaseImport) {
          // 如果有 @oceanbase/design 导入，添加到现有导入
          addTokenToExistingImport(j, root);
        } else {
          // 如果没有 @oceanbase/design 导入，添加顶层 token 导入
          addTopLevelTokenImport(j, root);
        }
      }
    }
  }

  return hasChanged ? root.toSource(options.printOptions || printOptions) : null;
};
