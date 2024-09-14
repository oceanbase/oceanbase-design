import React from 'react';
import {
  DatabaseRadiusOutlined,
  HourglassHalfOutlined,
  OceanbaseFilled,
  DouyinFilled,
  OceanbaseColored,
  ObClusterColored,
} from '@oceanbase/icons';
import { Divider, Space } from '@oceanbase/design';

const App: React.FC = () => (
  <Space>
    <DatabaseRadiusOutlined />
    <HourglassHalfOutlined spin />
    <OceanbaseFilled />
    <DouyinFilled style={{ color: 'hotpink' }} />
    <OceanbaseColored style={{ fontSize: 24 }} />
    <ObClusterColored />
  </Space>
);

export default App;
