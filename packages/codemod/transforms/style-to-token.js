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
function isReactComponentOrHook(functionName, path) {
  // 如果有函数名，检查是否以大写字母开头或以 use 开头
  if (functionName) {
    return isFirstUpperCase(functionName) || functionName.startsWith('use');
  }

  // 对于匿名函数，检查是否是 export default function () {} 的形式
  // 而不是 export default () => {} 的形式
  if (path) {
    const parentType = path.parentPath.value?.type;
    if (parentType === 'FunctionDeclaration') {
      // export default function () {} - 认为是 React 组件
      return true;
    }
    if (parentType === 'ArrowFunctionExpression') {
      // export default () => {} - 不认为是 React 组件
      return false;
    }
  }

  // 其他情况，默认不认为是 React 组件
  return false;
}

// 检查 BlockStatement 中是否包含 token 使用
function hasTokenUsage(j, path) {
  return (
    j(path).find(j.MemberExpression, {
      object: { name: 'token' },
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

  if (includeJSXElement && isReactComponentOrHook(functionName, path)) {
    const insertString = 'const { token } = theme.useToken()';
    path.get('body').value.unshift(j.expressionStatement(j.identifier(insertString)));
    addSubmoduleImport(j, root, {
      moduleName: '@oceanbase/design',
      importedName: 'theme',
      importKind: 'value',
    });
  } else if (includeJSXElement) {
    // 对于非 React 组件的函数，直接导入 token
    addSubmoduleImport(j, root, {
      moduleName: '@oceanbase/design',
      importedName: 'token',
      importKind: 'value',
      after: 'react',
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

// 处理模板字符串中的颜色值
function processTemplateLiterals(j, root) {
  let hasChanged = false;

  const templateList = root.find(j.TemplateLiteral);

  if (templateList.length > 0) {
    templateList.forEach(path => {
      const templateLiteral = path.value;
      const quasis = templateLiteral.quasis;

      // 检查每个模板字符串片段是否包含需要转换的颜色值
      for (let i = 0; i < quasis.length; i++) {
        const quasi = quasis[i];
        let value = quasi.value.raw;
        let newValue = value;
        let valueChanged = false;

        // 查找需要转换的颜色值
        const colorMatch = newValue.match(
          /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|hsla?\([^)]+\)/g
        );
        if (colorMatch) {
          hasChanged = true;
          valueChanged = true;

          colorMatch.forEach(match => {
            const { token } = tokenParse(match);
            if (token) {
              newValue = newValue.replace(match, `\${token.${token}}`);
            }
          });
        }

        // 如果值发生了变化，更新模板字符串片段
        if (valueChanged) {
          quasi.value.raw = newValue;
          quasi.value.cooked = newValue;
        }
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

  // 处理模板字符串中的颜色值
  hasChanged = processTemplateLiterals(j, root) || hasChanged;

  // 处理对象属性值（如 fontSize: 14）
  const objectPropertyChanged = processObjectProperties(j, root);
  hasChanged = objectPropertyChanged || hasChanged;

  return hasChanged;
}

// 处理对象属性
function processObjectProperties(j, root) {
  let hasChanged = false;

  // 处理数字字面量
  const numericPropertyList = root.find(j.ObjectProperty, {
    key: { type: 'Identifier' },
    value: { type: 'NumericLiteral' },
  });

  if (numericPropertyList.length > 0) {
    numericPropertyList.replaceWith(path => {
      const propertyName = path.value.key.name;
      const propertyValue = path.value.value.value;

      const tokenResult = propertyTokenParse(propertyName, propertyValue);
      if (tokenResult) {
        hasChanged = true;
        const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';
        const memberExpression = j.memberExpression(
          j.identifier('token'),
          j.identifier(tokenResult.token)
        );
        return j.objectProperty(j.identifier(propertyName), memberExpression);
      }
      return path.value;
    });
  }

  // 处理字符串字面量（如 fontSize: '14px'）
  const stringPropertyList = root.find(j.ObjectProperty, {
    key: { type: 'Identifier' },
    value: { type: 'StringLiteral' },
  });

  if (stringPropertyList.length > 0) {
    stringPropertyList.replaceWith(path => {
      const propertyName = path.value.key.name;
      const propertyValue = path.value.value.value;

      const tokenResult = propertyTokenParse(propertyName, propertyValue);
      if (tokenResult) {
        hasChanged = true;
        const isJSXAttribute = path.parentPath.value.type === 'JSXAttribute';
        const memberExpression = j.memberExpression(
          j.identifier('token'),
          j.identifier(tokenResult.token)
        );
        return j.objectProperty(j.identifier(propertyName), memberExpression);
      }
      return path.value;
    });
  }

  return hasChanged;
}

// 为对象属性添加 token 导入
function addTokenImportsForObjectProperties(j, root) {
  // 处理 BlockStatement 中的 token 使用
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

  // 处理顶层导出语句中的 token 使用
  const hasTokenUsageInRoot =
    root.find(j.MemberExpression, {
      object: { name: 'token' },
    }).length > 0;

  if (hasTokenUsageInRoot) {
    // 检查是否应该添加顶层 token 导入
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

  // 为对象属性添加 token 导入（只在没有其他 token 导入逻辑时调用）
  if (hasChanged) {
    // 检查是否已经有其他 token 导入逻辑在处理
    const hasOtherTokenLogic =
      root.find(j.CallExpression, {
        callee: { name: 'createStyles' },
      }).length > 0 ||
      root.find(j.CallExpression, {
        callee: {
          type: 'MemberExpression',
          object: { name: 'theme' },
          property: { name: 'useToken' },
        },
      }).length > 0 ||
      root
        .find(j.ImportDeclaration, {
          source: { value: '@oceanbase/design' },
        })
        .find(j.ImportSpecifier, {
          imported: { name: 'theme' },
        }).length > 0;

    if (!hasOtherTokenLogic) {
      addTokenImportsForObjectProperties(j, root);
    }
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
