import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';
import { StepForwardOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="question"
          content="付费服务占比"
          tooltip={{
            title:
              '登记的服务人天中有服务包归属的百分比，计算公式为 (有服务包归属的服务人天总和)/(已投入人天)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="question"
          content="自定义字体与 icon 大小与颜色"
          tooltip={{
            title: '自定义字体与 icon 大小与颜色',
          }}
          color="#8592AD"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          content="自定义图标"
          tooltip={{
            title: '自定义图标',
          }}
          color="default"
          suffixIcon={<StepForwardOutlined />}
        />
      </div>
    </>
  );
};
