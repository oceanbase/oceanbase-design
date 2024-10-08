// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OdcFilledSvg from '../asn/OdcFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OdcFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OdcFilledSvg} />;

OdcFilled.displayName = 'OdcFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OdcFilled);