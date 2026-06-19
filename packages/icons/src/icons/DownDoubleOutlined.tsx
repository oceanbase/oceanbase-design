// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DownDoubleOutlinedSvg from '../asn/DownDoubleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownDoubleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownDoubleOutlinedSvg} />;

DownDoubleOutlined.displayName = 'DownDoubleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownDoubleOutlined);