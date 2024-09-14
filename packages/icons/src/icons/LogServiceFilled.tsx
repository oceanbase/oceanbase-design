// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogServiceFilledSvg from '../asn/LogServiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogServiceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogServiceFilledSvg} />;

LogServiceFilled.displayName = 'LogServiceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogServiceFilled);