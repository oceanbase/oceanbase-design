// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TidbColoredSvg from '../asn/TidbColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TidbColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TidbColoredSvg} />;

TidbColored.displayName = 'TidbColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TidbColored);