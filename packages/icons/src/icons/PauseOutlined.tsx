// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PauseOutlinedSvg from '../asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseOutlinedSvg} />;

PauseOutlined.displayName = 'PauseOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseOutlined);