// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LifecycleFilledSvg from '../asn/LifecycleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LifecycleFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LifecycleFilledSvg} />;

LifecycleFilled.displayName = 'LifecycleFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LifecycleFilled);