// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AimOutlinedSvg from '../asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimOutlinedSvg} />;

AimOutlined.displayName = 'AimOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AimOutlined);