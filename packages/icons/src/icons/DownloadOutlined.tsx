// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DownloadOutlinedSvg from '../asn/DownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownloadOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownloadOutlinedSvg} />;

DownloadOutlined.displayName = 'DownloadOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownloadOutlined);