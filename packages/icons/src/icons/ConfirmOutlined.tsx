// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ConfirmOutlinedSvg from '../asn/ConfirmOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ConfirmOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ConfirmOutlinedSvg} />;

ConfirmOutlined.displayName = 'ConfirmOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ConfirmOutlined);