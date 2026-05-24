// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZoneFilledSvg from '../asn/ZoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoneFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoneFilledSvg} />;

ZoneFilled.displayName = 'ZoneFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoneFilled);