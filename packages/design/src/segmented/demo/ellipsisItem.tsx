import React from 'react';
import { Segmented } from '@oceanbase/design';

export default () => {
  return (
    <Segmented options={['固定宽度', '季度', '月度宽度shenglue']} ellipsis={true} width={'68px'} />
  );
};
