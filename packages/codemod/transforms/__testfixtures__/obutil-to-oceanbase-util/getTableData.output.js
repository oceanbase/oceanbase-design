import React from 'react';
import { useTableData } from '@oceanbase/util';

const Demo = () => {
  const { tableProps, refresh } = useTableData({
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
