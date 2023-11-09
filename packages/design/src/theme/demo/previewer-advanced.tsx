/**
 * transform: true
 * compact: true
 */
import { ConfigProvider } from '@oceanbase/design';
import { Previewer } from 'antd-token-previewer';

export default () => {
  return (
    <ConfigProvider>
      <Previewer
        theme={{
          name: 'OceanBase Design',
          key: 'ob',
          config: {},
        }}
      />
    </ConfigProvider>
  );
};
