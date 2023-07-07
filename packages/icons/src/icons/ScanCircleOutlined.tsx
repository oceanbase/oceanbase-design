// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ScanCircleOutlinedSvg from '../asn/ScanCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanCircleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScanCircleOutlinedSvg} />;

ScanCircleOutlined.displayName = 'ScanCircleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ScanCircleOutlined);