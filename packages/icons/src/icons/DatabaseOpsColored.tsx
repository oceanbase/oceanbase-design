// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseOpsColoredSvg from '../asn/DatabaseOpsColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOpsColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOpsColoredSvg} />;

DatabaseOpsColored.displayName = 'DatabaseOpsColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOpsColored);