// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IdcOutlinedSvg from '../asn/IdcOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IdcOutlinedSvg} />;

IdcOutlined.displayName = 'IdcOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IdcOutlined);