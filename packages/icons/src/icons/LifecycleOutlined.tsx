// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LifecycleOutlinedSvg from '../asn/LifecycleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LifecycleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LifecycleOutlinedSvg} />;

LifecycleOutlined.displayName = 'LifecycleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LifecycleOutlined);