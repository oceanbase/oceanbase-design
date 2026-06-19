// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogFilledSvg from '../asn/LogFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogFilledSvg} />;

LogFilled.displayName = 'LogFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogFilled);