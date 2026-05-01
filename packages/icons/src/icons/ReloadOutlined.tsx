// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ReloadOutlinedSvg from '../asn/ReloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReloadOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReloadOutlinedSvg} />;

ReloadOutlined.displayName = 'ReloadOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReloadOutlined);