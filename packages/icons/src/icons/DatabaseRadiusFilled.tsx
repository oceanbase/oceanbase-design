// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseRadiusFilledSvg from '../asn/DatabaseRadiusFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseRadiusFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseRadiusFilledSvg} />;

DatabaseRadiusFilled.displayName = 'DatabaseRadiusFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseRadiusFilled);