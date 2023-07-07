// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UnfoldOutlinedSvg from '../asn/UnfoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnfoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnfoldOutlinedSvg} />;

UnfoldOutlined.displayName = 'UnfoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnfoldOutlined);