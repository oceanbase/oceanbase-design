/**
 * transform: true
 * compact: true
 */
import { ConfigProvider } from '@oceanbase/design';
import { PreviewDemo } from 'antd-token-previewer';

export default () => {
  return (
    <ConfigProvider>
      <PreviewDemo
        theme={{
          name: 'OceanBase Design',
          key: 'ob',
          config: {},
        }}
        style={{ overflowY: 'hidden' }}
      />
    </ConfigProvider>
  );
};
