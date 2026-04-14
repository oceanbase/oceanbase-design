// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZonePrimaryFilledSvg from '../asn/ZonePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZonePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZonePrimaryFilledSvg} />;

ZonePrimaryFilled.displayName = 'ZonePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZonePrimaryFilled);