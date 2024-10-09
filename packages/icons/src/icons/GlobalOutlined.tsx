// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalOutlinedSvg from '../asn/GlobalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalOutlinedSvg} />;

GlobalOutlined.displayName = 'GlobalOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalOutlined);