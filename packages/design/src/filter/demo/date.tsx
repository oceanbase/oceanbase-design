import { Filter, Space } from '@oceanbase/design';
import dayjs from 'dayjs';

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <p>
          通过 <code>options</code> 属性可以自定义日期预设选项。
        </p>
      </div>

      <Space wrap>
        <Filter.DatePreset label="日期选择" />
        <Filter.DatePreset
          label="自定义日期选择"
          options={[
            { label: 'Last 1 Week', value: [dayjs().subtract(1, 'week'), dayjs()] },
            { label: 'Last 1 Month', value: [dayjs().subtract(1, 'month'), dayjs()] },
            { label: 'Last 1 Year', value: [dayjs().subtract(1, 'year'), dayjs()] },
          ]}
        />
      </Space>
    </Space>
  );
};

export default App;
