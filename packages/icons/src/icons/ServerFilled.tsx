// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServerFilledSvg from '../asn/ServerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServerFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServerFilledSvg} />;

ServerFilled.displayName = 'ServerFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServerFilled);