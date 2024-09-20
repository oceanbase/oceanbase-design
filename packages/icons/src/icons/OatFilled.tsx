// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OatFilledSvg from '../asn/OatFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OatFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OatFilledSvg} />;

OatFilled.displayName = 'OatFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OatFilled);