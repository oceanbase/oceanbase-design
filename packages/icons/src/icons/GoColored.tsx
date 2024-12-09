// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GoColoredSvg from '../asn/GoColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoColoredSvg} />;

GoColored.displayName = 'GoColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoColored);