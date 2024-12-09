// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OverviewOutlinedSvg from '../asn/OverviewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OverviewOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OverviewOutlinedSvg} />;

OverviewOutlined.displayName = 'OverviewOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OverviewOutlined);