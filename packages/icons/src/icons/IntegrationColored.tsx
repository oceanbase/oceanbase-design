// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IntegrationColoredSvg from '../asn/IntegrationColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IntegrationColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IntegrationColoredSvg} />;

IntegrationColored.displayName = 'IntegrationColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IntegrationColored);