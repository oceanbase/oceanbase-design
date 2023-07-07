import React from 'react';
import {
  PlOutlined,
  DatabaseRadiusOutlined,
  DrilldownOutlined,
  SqlLineChartOutlined,
  HourglassHalfOutlined,
  OceanBaseFilled,
  DouyinFilled,
  InternetTwoTone,
} from '@oceanbase/icons';
import { Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <PlOutlined />
    <DatabaseRadiusOutlined />
    <DrilldownOutlined />
    <SqlLineChartOutlined rotate={180} />
    <HourglassHalfOutlined spin />
    <OceanBaseFilled style={{ color: '#E5E5E5' }} />
    <DouyinFilled style={{ color: 'hotpink' }} />
    <InternetTwoTone twoToneColor={['rgb(115,209,61)', 'rgba(115,209,61,0.450)']} />
  </Space>
);

export default App;
