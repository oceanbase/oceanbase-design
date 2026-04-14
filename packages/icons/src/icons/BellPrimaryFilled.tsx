// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BellPrimaryFilledSvg from '../asn/BellPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellPrimaryFilledSvg} />;

BellPrimaryFilled.displayName = 'BellPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellPrimaryFilled);