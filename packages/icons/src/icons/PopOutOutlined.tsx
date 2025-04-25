// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PopOutOutlinedSvg from '../asn/PopOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PopOutOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PopOutOutlinedSvg} />;

PopOutOutlined.displayName = 'PopOutOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PopOutOutlined);