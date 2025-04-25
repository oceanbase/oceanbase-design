// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogServiceOutlinedSvg from '../asn/LogServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogServiceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogServiceOutlinedSvg} />;

LogServiceOutlined.displayName = 'LogServiceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogServiceOutlined);