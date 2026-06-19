// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DownOutlinedSvg from '../asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownOutlinedSvg} />;

DownOutlined.displayName = 'DownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownOutlined);