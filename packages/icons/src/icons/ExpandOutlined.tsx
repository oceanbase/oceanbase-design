// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ExpandOutlinedSvg from '../asn/ExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExpandOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExpandOutlinedSvg} />;

ExpandOutlined.displayName = 'ExpandOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExpandOutlined);