// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GrafanaColoredSvg from '../asn/GrafanaColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GrafanaColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GrafanaColoredSvg} />;

GrafanaColored.displayName = 'GrafanaColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GrafanaColored);