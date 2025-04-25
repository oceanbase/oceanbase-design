// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MaxwellColoredSvg from '../asn/MaxwellColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MaxwellColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MaxwellColoredSvg} />;

MaxwellColored.displayName = 'MaxwellColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MaxwellColored);