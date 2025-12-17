import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('');
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [switchValue, setSwitchValue] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* 普通模式：横向排列 */}
      <div>
        <div style={{ marginBottom: 8 }}>普通模式（横向排列）：</div>
        <Filter.Wrap>
          <Filter.Select
            label="状态"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
            ]}
          />
          <Filter.Checkbox
            label="标签"
            value={checkboxValues}
            onChange={setCheckboxValues}
            options={[
              { value: 'tag1', label: '标签一' },
              { value: 'tag2', label: '标签二' },
            ]}
          />
        </Filter.Wrap>
      </div>

      {/* 折叠模式：合并到一个弹框 */}
      <div>
        <div style={{ marginBottom: 8 }}>折叠模式（合并到弹框）：</div>
        <Filter.Wrap label="高级筛选" collapsed>
          <Filter.Switch label="启用通知" value={switchValue} onChange={setSwitchValue} />
          <Filter.Switch label="暗黑模式" value={darkMode} onChange={setDarkMode} />
        </Filter.Wrap>
      </div>
    </Space>
  );
};

export default App;
