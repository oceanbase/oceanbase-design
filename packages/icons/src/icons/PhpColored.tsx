// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PhpColoredSvg from '../asn/PhpColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhpColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhpColoredSvg} />;

PhpColored.displayName = 'PhpColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhpColored);