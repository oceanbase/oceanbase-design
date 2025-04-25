// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TableauColoredSvg from '../asn/TableauColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableauColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TableauColoredSvg} />;

TableauColored.displayName = 'TableauColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TableauColored);