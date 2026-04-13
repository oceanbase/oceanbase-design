// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillOutlinedSvg from '../asn/BillOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillOutlinedSvg} />;

BillOutlined.displayName = 'BillOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillOutlined);