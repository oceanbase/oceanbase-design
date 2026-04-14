// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DevelopPrimaryFilledSvg from '../asn/DevelopPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DevelopPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DevelopPrimaryFilledSvg} />;

DevelopPrimaryFilled.displayName = 'DevelopPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DevelopPrimaryFilled);