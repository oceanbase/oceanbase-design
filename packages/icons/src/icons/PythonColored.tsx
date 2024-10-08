// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PythonColoredSvg from '../asn/PythonColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PythonColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PythonColoredSvg} />;

PythonColored.displayName = 'PythonColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PythonColored);