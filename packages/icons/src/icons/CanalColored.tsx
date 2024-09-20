// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CanalColoredSvg from '../asn/CanalColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CanalColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CanalColoredSvg} />;

CanalColored.displayName = 'CanalColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CanalColored);