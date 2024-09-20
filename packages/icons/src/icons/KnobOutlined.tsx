// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import KnobOutlinedSvg from '../asn/KnobOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KnobOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KnobOutlinedSvg} />;

KnobOutlined.displayName = 'KnobOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KnobOutlined);