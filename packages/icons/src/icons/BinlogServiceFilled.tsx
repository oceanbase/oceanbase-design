// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BinlogServiceFilledSvg from '../asn/BinlogServiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BinlogServiceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BinlogServiceFilledSvg} />;

BinlogServiceFilled.displayName = 'BinlogServiceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BinlogServiceFilled);