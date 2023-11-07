const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssLess = require('postcss-less');
const isDirectory = require('is-directory');
const { tokenParse } = require('./utils/token');

/**
 * 搜索目录下所有的less文件
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
        if (filePath.includes('.umi') || filePath.includes('.umi-production')) {
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
  });
  let hasToken = false;
  let tokenLessImported = false;
  // 遍历 AST
  ast.walk(node => {
    if (node.type === 'decl') {
      const { key, token, formattedValue } = tokenParse(node.value);
      if (token) {
        node.value = formattedValue.replace(key, `@${token}`);
        hasToken = true;
      } else if (node.value?.includes('@')) {
        hasToken = true;
      }
    } else if (node.type === 'atrule' && node.name === 'import') {
      if (node.params === "'~@oceanbase/design/es/theme/index.less'") {
        tokenLessImported = true;
      } else if (node.params === "'~@alipay/ob-ui/es/theme/index.less'") {
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
