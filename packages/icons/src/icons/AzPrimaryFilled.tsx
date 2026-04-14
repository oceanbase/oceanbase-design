// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AzPrimaryFilledSvg from '../asn/AzPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AzPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AzPrimaryFilledSvg} />;

AzPrimaryFilled.displayName = 'AzPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AzPrimaryFilled);