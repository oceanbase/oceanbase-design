// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NumeralOutlinedSvg from '../asn/NumeralOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumeralOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NumeralOutlinedSvg} />;

NumeralOutlined.displayName = 'NumeralOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NumeralOutlined);