// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DragOutlinedSvg from '../asn/DragOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DragOutlinedSvg} />;

DragOutlined.displayName = 'DragOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DragOutlined);