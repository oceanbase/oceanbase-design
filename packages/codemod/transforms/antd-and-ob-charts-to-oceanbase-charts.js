const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@ant-design/charts,@alipay/ob-charts',
    toPkgList: [
      {
        name: '@oceanbase/charts',
      },
    ],
  });
};
