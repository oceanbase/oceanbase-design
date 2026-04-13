// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LinkOutlinedSvg from '../asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkOutlinedSvg} />;

LinkOutlined.displayName = 'LinkOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkOutlined);