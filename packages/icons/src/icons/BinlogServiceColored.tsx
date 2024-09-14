// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BinlogServiceColoredSvg from '../asn/BinlogServiceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BinlogServiceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BinlogServiceColoredSvg} />;

BinlogServiceColored.displayName = 'BinlogServiceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BinlogServiceColored);