// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalFilledSvg from '../asn/GlobalFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalFilledSvg} />;

GlobalFilled.displayName = 'GlobalFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalFilled);