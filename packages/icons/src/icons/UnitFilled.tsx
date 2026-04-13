// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UnitFilledSvg from '../asn/UnitFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnitFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnitFilledSvg} />;

UnitFilled.displayName = 'UnitFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnitFilled);