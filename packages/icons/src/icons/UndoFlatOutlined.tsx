// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UndoFlatOutlinedSvg from '../asn/UndoFlatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UndoFlatOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UndoFlatOutlinedSvg} />;

UndoFlatOutlined.displayName = 'UndoFlatOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UndoFlatOutlined);