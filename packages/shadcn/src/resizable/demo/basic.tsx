import React from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@oceanbase/shadcn';

export default () => {
  return (
    <div style={{ width: 500, height: 200, border: '1px solid #ddd' }}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div style={{ padding: 20 }}>左侧面板</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div style={{ padding: 20 }}>右侧面板</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
