import { Filter, Space } from '@oceanbase/design';
import dayjs from 'dayjs';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Filter.Range label="Date range filter" />
      <Filter.Range
        label="Custom date range filter"
        options={[
          { label: 'Last 1 Week', value: [dayjs().subtract(1, 'week'), dayjs()] },
          { label: 'Last 1 Month', value: [dayjs().subtract(1, 'month'), dayjs()] },
          { label: 'Last 1 Year', value: [dayjs().subtract(1, 'year'), dayjs()] },
        ]}
      />
    </Space>
  );
};

export default App;
