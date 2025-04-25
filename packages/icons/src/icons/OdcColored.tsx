// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OdcColoredSvg from '../asn/OdcColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OdcColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OdcColoredSvg} />;

OdcColored.displayName = 'OdcColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OdcColored);