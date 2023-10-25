const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssLess = require('postcss-less');
const isDirectory = require('is-directory');
const { TOKEN_MAP, formatValue } = require('./utils/token');

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
        if (filePath.includes('.umi')) {
          return;
        }
        lessFiles.push(...findAllLessFiles(filePath));
      } else if (file.endsWith('.less')) {
        lessFiles.push(filePath);
      }
    });
  } else {
    lessFiles.push(dir);
  }
  return lessFiles;
};

/**
 * 将 lesscode 转化为 ast
 * @returns ASR
 */
const less2AST = code =>
  postcss([])
    .process(code, {
      parser: postcssLess.parse,
      from: undefined,
    })
    .then(result => result.root);

async function transform(file) {
  const content = fs.readFileSync(file, 'utf-8');
  const ast = await less2AST(content);
  let modified = false;
  let tokenLessImported = false;
  // 遍历 AST
  ast.walk(node => {
    if (node.type === 'decl' && TOKEN_MAP[formatValue(node.value)]) {
      node.value = `@${TOKEN_MAP[formatValue(node.value)]}`;
      modified = true;
    } else if (node.type === 'atrule' && node.name === 'import') {
      if (node.params === "'~@oceanbase/design/es/theme/index.less'") {
        tokenLessImported = true;
      } else if (node.params === "'~@alipay/ob-ui/es/theme/index.less'") {
        node.remove();
      }
    }
  });
  // prepend @import '~@oceanbase/design/es/theme/index.less';
  if (modified && !tokenLessImported) {
    ast.prepend({
      name: 'import',
      params: "'~@oceanbase/design/es/theme/index.less'",
    });
  }
  return ast.toString();
}

async function lessToToken(file) {
  const allLessFiles = findAllLessFiles(file);
  for await (const item of allLessFiles) {
    const content = await transform(item);
    fs.writeFileSync(file, content);
  }
}

module.exports = {
  transform,
  lessToToken,
};
