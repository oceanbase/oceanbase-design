const importComponent = require('./utils/import-component');

// from1: import { Button } from 'antd';
// from2: import { Button } from '@alipay/bigfish/antd';
// to: import { Button } from '@oceanbase/design';
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
