// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObOracleColoredSvg from '../asn/ObOracleColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObOracleColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObOracleColoredSvg} />;

ObOracleColored.displayName = 'ObOracleColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObOracleColored);