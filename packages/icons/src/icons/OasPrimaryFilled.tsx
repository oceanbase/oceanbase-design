// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OasPrimaryFilledSvg from '../asn/OasPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OasPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OasPrimaryFilledSvg} />;

OasPrimaryFilled.displayName = 'OasPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OasPrimaryFilled);