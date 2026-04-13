// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AzureOutlinedSvg from '../asn/AzureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AzureOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AzureOutlinedSvg} />;

AzureOutlined.displayName = 'AzureOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AzureOutlined);