// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DevelopFilledSvg from '../asn/DevelopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DevelopFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DevelopFilledSvg} />;

DevelopFilled.displayName = 'DevelopFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DevelopFilled);