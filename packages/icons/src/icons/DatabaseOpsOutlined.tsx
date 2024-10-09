// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseOpsOutlinedSvg from '../asn/DatabaseOpsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOpsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOpsOutlinedSvg} />;

DatabaseOpsOutlined.displayName = 'DatabaseOpsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOpsOutlined);