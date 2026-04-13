// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ToOutlinedSvg from '../asn/ToOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToOutlinedSvg} />;

ToOutlined.displayName = 'ToOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ToOutlined);