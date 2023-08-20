import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="自定义字体与 icon 大小"
          tooltip={{
            title: '自定义字体与 icon 大小',
          }}
          color="#default"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="自定义icon 颜色"
          tooltip={{
            title: '自定义 icon 颜色',
          }}
          color="#8592AD"
          exclamationColor="#f5222d"
        />
      </div>
    </>
  );
};