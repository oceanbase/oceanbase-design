// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseOutlinedSvg from '../asn/DatabaseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOutlinedSvg} />;

DatabaseOutlined.displayName = 'DatabaseOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOutlined);