const importComponent = require('./utils/import-component');
const { proComponents } = require('./utils/config');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/tech-ui,@ant-design/pro-components',
    toPkgList: [
      {
        name: '@oceanbase/ui',
        paths: ['/locale/', '/locale/'],
        ...proComponents,
      },
    ],
  });
};
