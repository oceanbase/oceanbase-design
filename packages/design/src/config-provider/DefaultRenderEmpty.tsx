import React, { useContext } from 'react';
import type { ConfigConsumerProps } from '.';
import { ConfigContext } from '.';
import Empty from '../empty';

interface EmptyProps {
  componentName?: string;
}

/* refer to: https://github.com/ant-design/ant-design/blob/master/components/config-provider/defaultRenderEmpty.tsx */
const DefaultRenderEmpty: React.FC<EmptyProps> = props => {
  const { componentName } = props;
  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext);
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className={`${prefix}-small`} />;
    default:
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }
};

export type RenderEmptyHandler = (componentName?: string) => React.ReactNode;

export default DefaultRenderEmpty;
