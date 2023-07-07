// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OracleSquareFilledSvg from '../asn/OracleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OracleSquareFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OracleSquareFilledSvg} />;

OracleSquareFilled.displayName = 'OracleSquareFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OracleSquareFilled);