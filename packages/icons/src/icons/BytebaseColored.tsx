// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BytebaseColoredSvg from '../asn/BytebaseColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BytebaseColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BytebaseColoredSvg} />;

BytebaseColored.displayName = 'BytebaseColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BytebaseColored);