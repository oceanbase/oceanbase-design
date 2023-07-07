/**
 * transform: true
 * compact: true
 */
import { theme } from '@oceanbase/design';
import { Previewer } from 'antd-token-previewer';

export default () => {
  return (
    <Previewer
      theme={{
        name: 'OceanBase Design',
        key: 'ob',
        config: theme,
      }}
    />
  );
};
