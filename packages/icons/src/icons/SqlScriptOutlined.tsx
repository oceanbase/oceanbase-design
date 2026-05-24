// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlScriptOutlinedSvg from '../asn/SqlScriptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlScriptOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlScriptOutlinedSvg} />;

SqlScriptOutlined.displayName = 'SqlScriptOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlScriptOutlined);