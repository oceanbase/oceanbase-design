// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatadogColoredSvg from '../asn/DatadogColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatadogColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatadogColoredSvg} />;

DatadogColored.displayName = 'DatadogColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatadogColored);