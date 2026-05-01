// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DangerFilledSvg from '../asn/DangerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DangerFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DangerFilledSvg} />;

DangerFilled.displayName = 'DangerFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DangerFilled);