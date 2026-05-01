// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SyncOutlinedSvg from '../asn/SyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SyncOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SyncOutlinedSvg} />;

SyncOutlined.displayName = 'SyncOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SyncOutlined);