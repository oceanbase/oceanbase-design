// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AzFilledSvg from '../asn/AzFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AzFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AzFilledSvg} />;

AzFilled.displayName = 'AzFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AzFilled);