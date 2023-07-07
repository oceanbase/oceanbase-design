// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UndoEllipseOutlinedSvg from '../asn/UndoEllipseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UndoEllipseOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UndoEllipseOutlinedSvg} />;

UndoEllipseOutlined.displayName = 'UndoEllipseOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UndoEllipseOutlined);