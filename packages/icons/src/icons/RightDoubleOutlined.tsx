// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RightDoubleOutlinedSvg from '../asn/RightDoubleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightDoubleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightDoubleOutlinedSvg} />;

RightDoubleOutlined.displayName = 'RightDoubleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightDoubleOutlined);