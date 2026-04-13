// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UnitOutlinedSvg from '../asn/UnitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnitOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnitOutlinedSvg} />;

UnitOutlined.displayName = 'UnitOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnitOutlined);