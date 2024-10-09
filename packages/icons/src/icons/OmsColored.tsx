// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OmsColoredSvg from '../asn/OmsColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OmsColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OmsColoredSvg} />;

OmsColored.displayName = 'OmsColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OmsColored);