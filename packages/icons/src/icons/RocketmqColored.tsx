// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RocketmqColoredSvg from '../asn/RocketmqColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RocketmqColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RocketmqColoredSvg} />;

RocketmqColored.displayName = 'RocketmqColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RocketmqColored);