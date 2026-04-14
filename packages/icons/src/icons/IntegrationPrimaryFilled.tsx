// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IntegrationPrimaryFilledSvg from '../asn/IntegrationPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IntegrationPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IntegrationPrimaryFilledSvg} />;

IntegrationPrimaryFilled.displayName = 'IntegrationPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IntegrationPrimaryFilled);