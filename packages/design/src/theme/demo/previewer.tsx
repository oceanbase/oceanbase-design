/**
 * transform: true
 * compact: true
 */
import React from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { Previewer } from 'antd-token-previewer';
import './previewer.less';

export default () => {
  return (
    <ConfigProvider prefixCls="previewer">
      <Previewer showTheme={false} />
    </ConfigProvider>
  );
};
