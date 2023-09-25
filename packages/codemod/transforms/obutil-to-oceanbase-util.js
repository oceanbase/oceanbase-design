const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/ob-util',
    toPkgList: [
      {
        name: '@oceanbase/util',
      },
    ],
  });
};
