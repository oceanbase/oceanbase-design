// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NumOutlinedSvg from '../asn/NumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NumOutlinedSvg} />;

NumOutlined.displayName = 'NumOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NumOutlined);