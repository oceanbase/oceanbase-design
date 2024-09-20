// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OmaColoredSvg from '../asn/OmaColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OmaColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OmaColoredSvg} />;

OmaColored.displayName = 'OmaColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OmaColored);