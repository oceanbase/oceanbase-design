// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CardOutlinedSvg from '../asn/CardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CardOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CardOutlinedSvg} />;

CardOutlined.displayName = 'CardOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CardOutlined);