/**
 * transform: true
 * compact: true
 */
import { theme } from '@oceanbase/design';
import { PreviewDemo } from 'antd-token-previewer';

export default () => {
  return (
    <PreviewDemo
      theme={{
        name: 'OceanBase Design',
        key: 'ob',
        config: theme,
      }}
      style={{ overflowY: 'hidden' }}
    />
  );
};
