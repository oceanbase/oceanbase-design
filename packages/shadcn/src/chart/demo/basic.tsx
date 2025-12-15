import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ width: 400, height: 200 }}>
      <ChartContainer config={{}}>
        <div style={{ padding: 20, textAlign: 'center' }}>
          <p>图表组件示例</p>
          <p style={{ fontSize: 12, color: '#666' }}>请使用 ChartContainer 包装图表内容</p>
        </div>
      </ChartContainer>
    </div>
  );
};
