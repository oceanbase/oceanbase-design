// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LoadingSpinnerOutlinedSvg from '../asn/LoadingSpinnerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingSpinnerOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoadingSpinnerOutlinedSvg} />;

LoadingSpinnerOutlined.displayName = 'LoadingSpinnerOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoadingSpinnerOutlined);