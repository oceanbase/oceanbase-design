// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TriggerOutlinedSvg from '../asn/TriggerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TriggerOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TriggerOutlinedSvg} />;

TriggerOutlined.displayName = 'TriggerOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TriggerOutlined);