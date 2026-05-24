// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OrgFilledSvg from '../asn/OrgFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrgFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OrgFilledSvg} />;

OrgFilled.displayName = 'OrgFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OrgFilled);