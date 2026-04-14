// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SupportPrimaryFilledSvg from '../asn/SupportPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SupportPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SupportPrimaryFilledSvg} />;

SupportPrimaryFilled.displayName = 'SupportPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SupportPrimaryFilled);