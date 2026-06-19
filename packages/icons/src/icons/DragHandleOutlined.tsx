// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DragHandleOutlinedSvg from '../asn/DragHandleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragHandleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DragHandleOutlinedSvg} />;

DragHandleOutlined.displayName = 'DragHandleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DragHandleOutlined);