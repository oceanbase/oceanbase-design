// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BellOutlinedSvg from '../asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellOutlinedSvg} />;

BellOutlined.displayName = 'BellOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellOutlined);