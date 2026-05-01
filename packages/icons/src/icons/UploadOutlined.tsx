// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UploadOutlinedSvg from '../asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UploadOutlinedSvg} />;

UploadOutlined.displayName = 'UploadOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadOutlined);