// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AzOutlinedSvg from '../asn/AzOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AzOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AzOutlinedSvg} />;

AzOutlined.displayName = 'AzOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AzOutlined);