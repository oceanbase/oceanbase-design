// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompileAllOutlinedSvg from '../asn/CompileAllOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompileAllOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompileAllOutlinedSvg} />;

CompileAllOutlined.displayName = 'CompileAllOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompileAllOutlined);