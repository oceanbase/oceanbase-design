// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ShareOutlinedSvg from '../asn/ShareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShareOutlinedSvg} />;

ShareOutlined.displayName = 'ShareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShareOutlined);