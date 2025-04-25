// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OmsFilledSvg from '../asn/OmsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OmsFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OmsFilledSvg} />;

OmsFilled.displayName = 'OmsFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OmsFilled);