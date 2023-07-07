// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BagOutlinedSvg from '../asn/BagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BagOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BagOutlinedSvg} />;

BagOutlined.displayName = 'BagOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BagOutlined);