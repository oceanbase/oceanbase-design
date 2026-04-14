// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogPrimaryFilledSvg from '../asn/LogPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogPrimaryFilledSvg} />;

LogPrimaryFilled.displayName = 'LogPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogPrimaryFilled);