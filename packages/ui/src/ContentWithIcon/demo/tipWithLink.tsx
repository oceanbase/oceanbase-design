import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ContentWithIcon
        iconType="question"
        content="付费服务占比"
        popOver={{
          content: (
            <div>
              <span style={{ marginRight: '4px' }}>这是一段文案描述带有超链接</span>
              <a>查看帮助文档</a>
            </div>
          ),
          overlayStyle: { maxWidth: '180px' },
        }}
        color="default"
        tooltipWithLink={true}
      />
    </>
  );
};