import * as React from 'react';
import classNames from 'classnames';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { ConfigContext } from '../config-provider';
import Compact from 'antd/es/space/Compact';
import type { SpaceProps } from 'antd/es/space';
import { Space as AntSpace } from 'antd';
import useStyle from './style';

export * from 'antd/es/space';
export { SpaceContext } from 'antd/es/space/context';

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('space', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const supportFlexGap = useFlexGapSupport();
    const spaceCls = classNames(
      {
        [`${prefixCls}-not-support-gap`]: !supportFlexGap,
        [`${prefixCls}-wrap`]: restProps?.wrap,
      },
      className
    );

    return wrapSSR(<AntSpace ref={ref} className={spaceCls} {...restProps} />);
  }
);

if (process.env.NODE_ENV !== 'production') {
  Space.displayName = 'Space';
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SpaceProps & React.RefAttributes<HTMLDivElement>
> & {
  Compact: typeof Compact;
};

const CompoundedSpace = Space as CompoundedComponent;

CompoundedSpace.Compact = Compact;

export default CompoundedSpace;
