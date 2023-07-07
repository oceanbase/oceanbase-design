// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RunAllOutlinedSvg from '../asn/RunAllOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RunAllOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RunAllOutlinedSvg} />;

RunAllOutlined.displayName = 'RunAllOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RunAllOutlined);