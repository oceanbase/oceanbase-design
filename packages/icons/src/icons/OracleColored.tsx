// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OracleColoredSvg from '../asn/OracleColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OracleColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OracleColoredSvg} />;

OracleColored.displayName = 'OracleColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OracleColored);