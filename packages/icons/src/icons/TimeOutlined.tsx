// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimeOutlinedSvg from '../asn/TimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimeOutlinedSvg} />;

TimeOutlined.displayName = 'TimeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimeOutlined);