const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/tech-ui,@ant-design/pro-components',
    toPkgList: [
      {
        name: '@oceanbase/ui',
        components: ['PageContainer'],
        types: ['PageContainerProps'],
      },
    ],
  });
};
