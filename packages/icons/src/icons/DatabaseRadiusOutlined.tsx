// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseRadiusOutlinedSvg from '../asn/DatabaseRadiusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseRadiusOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseRadiusOutlinedSvg} />;

DatabaseRadiusOutlined.displayName = 'DatabaseRadiusOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseRadiusOutlined);