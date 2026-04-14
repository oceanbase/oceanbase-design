// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UnitPrimaryFilledSvg from '../asn/UnitPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnitPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnitPrimaryFilledSvg} />;

UnitPrimaryFilled.displayName = 'UnitPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnitPrimaryFilled);