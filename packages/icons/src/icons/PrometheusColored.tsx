// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PrometheusColoredSvg from '../asn/PrometheusColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrometheusColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrometheusColoredSvg} />;

PrometheusColored.displayName = 'PrometheusColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrometheusColored);