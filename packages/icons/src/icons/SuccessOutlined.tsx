// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SuccessOutlinedSvg from '../asn/SuccessOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuccessOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SuccessOutlinedSvg} />;

SuccessOutlined.displayName = 'SuccessOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SuccessOutlined);