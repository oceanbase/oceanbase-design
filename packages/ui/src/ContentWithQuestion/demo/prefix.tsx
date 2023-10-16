import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithQuestion
      content="付费服务占比"
      tooltip={{
        title:
          '登记的服务人天中有服务包归属的百分比，计算公式为 (有服务包归属的服务人天总和)/(已投入人天)',
        overlayStyle: { maxWidth: '330px' },
      }}
      prefixIcon
      suffixIcon={null}
    />
  );
};
