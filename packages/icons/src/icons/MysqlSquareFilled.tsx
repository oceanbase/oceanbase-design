// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MysqlSquareFilledSvg from '../asn/MysqlSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MysqlSquareFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MysqlSquareFilledSvg} />;

MysqlSquareFilled.displayName = 'MysqlSquareFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MysqlSquareFilled);