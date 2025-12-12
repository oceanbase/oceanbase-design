const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssLess = require('postcss-less');
const isDirectory = require('is-directory');
const { tokenParse, propertyTokenParse } = require('./utils/token');
const { shouldExcludePath } = require('./utils/path-utils');

/**
 * Find all less files in the directory
 * @param dir
 * @returns
 */
const findAllLessFiles = dir => {
  const lessFiles = [];
  const isDir = isDirectory.sync(dir);
  if (isDir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (isDirectory.sync(filePath)) {
        if (shouldExcludePath(filePath)) {
          return;
        }
        lessFiles.push(...findAllLessFiles(filePath));
      } else if (file.endsWith('.less')) {
        lessFiles.push(filePath);
      }
    });
  } else if (dir.endsWith('.less')) {
    lessFiles.push(dir);
  }
  return lessFiles;
};

async function transform(file) {
  const content = fs.readFileSync(file, 'utf-8');
  const { root: ast } = await postcss([]).process(content, {
    syntax: postcssLess,
    from: file, // 添加 from 选项以避免警告
  });
  let hasToken = false;
  let tokenLessImported = false;
  // 遍历 AST
  ast.walk(node => {
    if (node.type === 'decl') {
      // 首先尝试基于属性的 token 转换
      // 将 CSS 属性名转换为小驼峰写法（如 font-size -> fontSize）
      const camelCaseProp = node.prop.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
      const propertyResult = propertyTokenParse(camelCaseProp, node.value);
      if (propertyResult) {
        node.value = `@${propertyResult.token}`;
        hasToken = true;
      } else {
        // 然后尝试基于值的 token 转换
        let newValue = node.value;
        let valueHasToken = false;

        // 检查是否为复合值（包含多个值或颜色值）
        const isCompositeValue =
          node.value.includes(',') ||
          /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|hsla?\([^)]+\)/.test(
            node.value
          );

        if (isCompositeValue) {
          // 对于复合值，只替换其中的颜色值
          const colorRegex =
            /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|hsla?\([^)]+\)/g;
          const colorMatches = node.value.match(colorRegex);
          if (colorMatches) {
            colorMatches.forEach(match => {
              const colorResult = tokenParse(match);
              if (colorResult.token) {
                newValue = newValue.replace(match, `@${colorResult.token}`);
                valueHasToken = true;
              }
            });
          }
        } else {
          // 对于简单值，尝试完整的 token 转换
          const { key, token, formattedValue } = tokenParse(node.value);
          if (token) {
            newValue = formattedValue.replace(key, `@${token}`);
            valueHasToken = true;
          }
        }

        if (valueHasToken) {
          node.value = newValue;
          hasToken = true;
        } else if (node.value?.includes('@')) {
          hasToken = true;
        }
      }
    } else if (node.type === 'atrule' && node.name === 'import') {
      if (
        node.params?.includes("'~@oceanbase/design/es/theme/index.less'") ||
        node.params?.includes('"~@oceanbase/design/es/theme/index.less"')
      ) {
        tokenLessImported = true;
      } else if (
        node.params?.includes("'~@alipay/ob-ui/es/theme/index.less'") ||
        node.params?.includes('"~@alipay/ob-ui/es/theme/index.less"')
      ) {
        node.remove();
      }
    }
  });
  // prepend @import '~@oceanbase/design/es/theme/index.less';
  if (hasToken && !tokenLessImported) {
    ast.prepend({
      name: 'import',
      params: "'~@oceanbase/design/es/theme/index.less'",
    });
  }
  return ast.toString(postcssLess.stringify);
}

async function lessToToken(file) {
  const allLessFiles = findAllLessFiles(file);
  for await (const item of allLessFiles) {
    const content = await transform(item);
    fs.writeFileSync(item, content);
  }
}

module.exports = {
  transform,
  lessToToken,
};
