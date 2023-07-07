// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TerminateOutlinedSvg from '../asn/TerminateOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminateOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TerminateOutlinedSvg} />;

TerminateOutlined.displayName = 'TerminateOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TerminateOutlined);