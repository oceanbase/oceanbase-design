// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ErrorPrimaryOutlinedSvg from '../asn/ErrorPrimaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorPrimaryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorPrimaryOutlinedSvg} />;

ErrorPrimaryOutlined.displayName = 'ErrorPrimaryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorPrimaryOutlined);