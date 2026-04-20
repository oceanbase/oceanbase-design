// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ErrorFilledSvg from '../asn/ErrorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorFilledSvg} />;

ErrorFilled.displayName = 'ErrorFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorFilled);