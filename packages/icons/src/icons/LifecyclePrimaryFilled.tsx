// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LifecyclePrimaryFilledSvg from '../asn/LifecyclePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LifecyclePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LifecyclePrimaryFilledSvg} />;

LifecyclePrimaryFilled.displayName = 'LifecyclePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LifecyclePrimaryFilled);