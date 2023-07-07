// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MagicStickOutlinedSvg from '../asn/MagicStickOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MagicStickOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MagicStickOutlinedSvg} />;

MagicStickOutlined.displayName = 'MagicStickOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MagicStickOutlined);