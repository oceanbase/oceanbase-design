// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LinkfileOutlinedSvg from '../asn/LinkfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkfileOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkfileOutlinedSvg} />;

LinkfileOutlined.displayName = 'LinkfileOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkfileOutlined);