// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OpsFilledSvg from '../asn/OpsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpsFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpsFilledSvg} />;

OpsFilled.displayName = 'OpsFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OpsFilled);