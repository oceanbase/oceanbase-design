import React, { useState } from 'react';
import type { RadioChangeEvent, TabsProps } from '@oceanbase/design';
import { Radio, Tabs } from '@oceanbase/design';

const App: React.FC = () => {
  const [mode, setMode] = useState<TabsProps['tabPosition']>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 180 }}
        items={Array.from({ length: 30 }, (_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default App;
