// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WaitingFilledSvg from '../asn/WaitingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WaitingFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WaitingFilledSvg} />;

WaitingFilled.displayName = 'WaitingFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WaitingFilled);