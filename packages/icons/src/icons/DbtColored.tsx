// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DbtColoredSvg from '../asn/DbtColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DbtColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DbtColoredSvg} />;

DbtColored.displayName = 'DbtColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DbtColored);