// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FoldOutlinedSvg from '../asn/FoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FoldOutlinedSvg} />;

FoldOutlined.displayName = 'FoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FoldOutlined);