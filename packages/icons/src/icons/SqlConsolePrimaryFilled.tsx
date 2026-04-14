// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlConsolePrimaryFilledSvg from '../asn/SqlConsolePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlConsolePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlConsolePrimaryFilledSvg} />;

SqlConsolePrimaryFilled.displayName = 'SqlConsolePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlConsolePrimaryFilled);