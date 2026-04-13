// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileOutlinedSvg from '../asn/FileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileOutlinedSvg} />;

FileOutlined.displayName = 'FileOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileOutlined);