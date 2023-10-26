const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    // order: @alipay/bigfish/antd -> antd
    fromPkgNames: '@alipay/bigfish/antd,antd',
    toPkgList: [
      {
        name: '@oceanbase/design',
      },
    ],
  });
};
