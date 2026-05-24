// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlConsoleOutlinedSvg from '../asn/SqlConsoleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlConsoleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlConsoleOutlinedSvg} />;

SqlConsoleOutlined.displayName = 'SqlConsoleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlConsoleOutlined);