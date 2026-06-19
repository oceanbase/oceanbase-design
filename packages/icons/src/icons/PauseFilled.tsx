// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PauseFilledSvg from '../asn/PauseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseFilledSvg} />;

PauseFilled.displayName = 'PauseFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseFilled);