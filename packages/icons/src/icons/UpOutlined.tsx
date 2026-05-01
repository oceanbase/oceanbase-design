// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UpOutlinedSvg from '../asn/UpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpOutlinedSvg} />;

UpOutlined.displayName = 'UpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpOutlined);