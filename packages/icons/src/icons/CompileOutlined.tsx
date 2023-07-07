// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompileOutlinedSvg from '../asn/CompileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompileOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompileOutlinedSvg} />;

CompileOutlined.displayName = 'CompileOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompileOutlined);