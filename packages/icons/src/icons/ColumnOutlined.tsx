// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ColumnOutlinedSvg from '../asn/ColumnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ColumnOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ColumnOutlinedSvg} />;

ColumnOutlined.displayName = 'ColumnOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ColumnOutlined);