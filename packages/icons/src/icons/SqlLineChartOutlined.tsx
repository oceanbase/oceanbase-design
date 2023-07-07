// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlLineChartOutlinedSvg from '../asn/SqlLineChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlLineChartOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlLineChartOutlinedSvg} />;

SqlLineChartOutlined.displayName = 'SqlLineChartOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlLineChartOutlined);