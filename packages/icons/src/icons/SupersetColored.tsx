// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SupersetColoredSvg from '../asn/SupersetColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SupersetColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SupersetColoredSvg} />;

SupersetColored.displayName = 'SupersetColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SupersetColored);