// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlConsoleFilledSvg from '../asn/SqlConsoleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlConsoleFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlConsoleFilledSvg} />;

SqlConsoleFilled.displayName = 'SqlConsoleFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlConsoleFilled);