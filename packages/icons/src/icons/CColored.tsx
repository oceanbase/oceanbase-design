// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CColoredSvg from '../asn/CColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CColoredSvg} />;

CColored.displayName = 'CColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CColored);