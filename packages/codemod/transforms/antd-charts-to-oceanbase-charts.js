const importComponent = require('./utils/import-component');

// from1: import { Line } from '@ant-design/charts';
// from2: import type { LineConfig } from '@ant-design/charts';
// to1: import { Line } from '@ant-design/charts';
// from2: import type { LineConfig } from '@ant-design/charts';
module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@ant-design/charts',
    toPkgList: [
      {
        name: '@oceanbase/charts',
      },
    ],
  });
};
