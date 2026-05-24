// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ShareAltOutlinedSvg from '../asn/ShareAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareAltOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShareAltOutlinedSvg} />;

ShareAltOutlined.displayName = 'ShareAltOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShareAltOutlined);