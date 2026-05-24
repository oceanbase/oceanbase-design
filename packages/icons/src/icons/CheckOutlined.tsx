// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CheckOutlinedSvg from '../asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckOutlinedSvg} />;

CheckOutlined.displayName = 'CheckOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckOutlined);