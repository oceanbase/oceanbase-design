// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WifiFilledSvg from '../asn/WifiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WifiFilledSvg} />;

WifiFilled.displayName = 'WifiFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WifiFilled);