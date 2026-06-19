// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DevelopOutlinedSvg from '../asn/DevelopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DevelopOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DevelopOutlinedSvg} />;

DevelopOutlined.displayName = 'DevelopOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DevelopOutlined);