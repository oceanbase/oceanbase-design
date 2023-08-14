import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="info"
          content="info 提示"
          tooltip={{
            title:
              '登记的服务人天中有服务包归属的百分比，计算公式为 (有服务包归属的服务人天总和)/(已投入人天)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="info"
          content="自定义info 图标颜色"
          tooltip={{
            title:
              '登记的服务人天中有服务包归属的百分比，计算公式为 (有服务包归属的服务人天总和)/(已投入人天)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
          infoColor="#1890FF"
        />
      </div>
    </>
  );
};
