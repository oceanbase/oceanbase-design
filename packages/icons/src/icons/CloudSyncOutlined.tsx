// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CloudSyncOutlinedSvg from '../asn/CloudSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudSyncOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudSyncOutlinedSvg} />;

CloudSyncOutlined.displayName = 'CloudSyncOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudSyncOutlined);