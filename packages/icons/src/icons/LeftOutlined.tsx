// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LeftOutlinedSvg from '../asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftOutlinedSvg} />;

LeftOutlined.displayName = 'LeftOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftOutlined);