import React from 'react';
import { getTableData } from '@alipay/ob-util';

const Demo = () => {
  const { tableProps, refresh } = getTableData({
    fn: getClusters,
    params: {
      configName,
    },
    refreshDeps: [],
    options: {
      pagePropName: 'pageNo',
      sizePropName: 'pageSize',
      formatResult: (res: any) => {
        const { data, pageNo, pageSize, total } = res || {};
        return {
          list: data || [],
          current: pageNo,
          pageSize,
          total,
        };
      },
    },
  });
  return <div />;
};

export default Demo;
