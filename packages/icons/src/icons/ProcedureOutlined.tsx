// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProcedureOutlinedSvg from '../asn/ProcedureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProcedureOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProcedureOutlinedSvg} />;

ProcedureOutlined.displayName = 'ProcedureOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProcedureOutlined);