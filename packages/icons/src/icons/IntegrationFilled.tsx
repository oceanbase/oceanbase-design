// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IntegrationFilledSvg from '../asn/IntegrationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IntegrationFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IntegrationFilledSvg} />;

IntegrationFilled.displayName = 'IntegrationFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IntegrationFilled);