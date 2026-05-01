// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LoadingFilledSvg from '../asn/LoadingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoadingFilledSvg} />;

LoadingFilled.displayName = 'LoadingFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoadingFilled);