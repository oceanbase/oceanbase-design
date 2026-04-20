// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TableOutlinedSvg from '../asn/TableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TableOutlinedSvg} />;

TableOutlined.displayName = 'TableOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TableOutlined);