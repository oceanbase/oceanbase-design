const importComponent = require('./utils/import-component');

// from: import { isNullValue, sortByNumber } from '@alipay/ob-util';
// to: import { isNullValue, sortByNumber } from '@oceanbase/util';
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
