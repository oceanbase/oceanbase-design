// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OrgOutlinedSvg from '../asn/OrgOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrgOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OrgOutlinedSvg} />;

OrgOutlined.displayName = 'OrgOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OrgOutlined);