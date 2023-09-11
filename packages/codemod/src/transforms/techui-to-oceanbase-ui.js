const importComponent = require('./utils/import-component');

// from2: import { PageContainer } from '@alipay/tech-ui';
// from3: import { PageContainer } from '@ant-design/pro-components';
// to: import { PageContainer } from '@oceanbase/ui';
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
