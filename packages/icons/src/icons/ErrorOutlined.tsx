// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ErrorOutlinedSvg from '../asn/ErrorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorOutlinedSvg} />;

ErrorOutlined.displayName = 'ErrorOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorOutlined);