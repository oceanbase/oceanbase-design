// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BellFilledSvg from '../asn/BellFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellFilledSvg} />;

BellFilled.displayName = 'BellFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellFilled);