// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FilesOutlinedSvg from '../asn/FilesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilesOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilesOutlinedSvg} />;

FilesOutlined.displayName = 'FilesOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilesOutlined);