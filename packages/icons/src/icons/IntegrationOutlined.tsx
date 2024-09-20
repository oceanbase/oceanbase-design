// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IntegrationOutlinedSvg from '../asn/IntegrationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IntegrationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IntegrationOutlinedSvg} />;

IntegrationOutlined.displayName = 'IntegrationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IntegrationOutlined);