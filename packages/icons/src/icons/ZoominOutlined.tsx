// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZoominOutlinedSvg from '../asn/ZoominOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoominOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoominOutlinedSvg} />;

ZoominOutlined.displayName = 'ZoominOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoominOutlined);