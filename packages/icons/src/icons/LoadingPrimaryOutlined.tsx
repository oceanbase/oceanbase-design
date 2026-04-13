// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LoadingPrimaryOutlinedSvg from '../asn/LoadingPrimaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingPrimaryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoadingPrimaryOutlinedSvg} />;

LoadingPrimaryOutlined.displayName = 'LoadingPrimaryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoadingPrimaryOutlined);