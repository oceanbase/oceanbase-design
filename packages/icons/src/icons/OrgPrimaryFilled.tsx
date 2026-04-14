// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OrgPrimaryFilledSvg from '../asn/OrgPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrgPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OrgPrimaryFilledSvg} />;

OrgPrimaryFilled.displayName = 'OrgPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OrgPrimaryFilled);