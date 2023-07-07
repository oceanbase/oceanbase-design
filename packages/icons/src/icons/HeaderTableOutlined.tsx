// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HeaderTableOutlinedSvg from '../asn/HeaderTableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeaderTableOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeaderTableOutlinedSvg} />;

HeaderTableOutlined.displayName = 'HeaderTableOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeaderTableOutlined);