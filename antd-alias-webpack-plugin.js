const path = require('path');
const plugin = 'AntdAliasWebpackPlugin';
// 匹配 antd 或 antd/
const antdRegExp = /^antd[\/]*/;
const scopeRegExp = /antd-token-previewer/;

const updateResource = resource => {
  resource.request = resource.request.replace(
    /^antd$/,
    path.join(process.cwd(), 'packages/design/es/index.js')
  );
  resource.request = resource.request.replace(
    /^antd\/es/,
    path.join(process.cwd(), 'packages/design/es')
  );
  resource.request = resource.request.replace(
    /^antd\/lib/,
    path.join(process.cwd(), 'packages/design/lib')
  );
};

/* alias antd to @oceanbase/design for part of packages */
class Plugin {
  constructor(options) {
    this.options = options || {};
  }
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(plugin, factory => {
      factory.hooks.beforeResolve.tap(plugin, result => {
        if (
          antdRegExp.test(result.request) &&
          !result.request.includes('token.json') &&
          !result.request.includes('token-meta.json') &&
          scopeRegExp.test(result.context)
        ) {
          updateResource(result);
        }
      });
      factory.hooks.afterResolve.tap(plugin, result => {
        const createData = result.createData;
        if (
          antdRegExp.test(createData.resource) &&
          !createData.resource.includes('token.json') &&
          !createData.resource.includes('token-meta.json') &&
          scopeRegExp.test(createData.context)
        ) {
          updateResource(result);
        }
      });
    });
  }
}

module.exports = Plugin;
