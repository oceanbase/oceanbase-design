// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DangerPrimaryFilledSvg from '../asn/DangerPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DangerPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DangerPrimaryFilledSvg} />;

DangerPrimaryFilled.displayName = 'DangerPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DangerPrimaryFilled);