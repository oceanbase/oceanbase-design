// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileSearchOutlinedSvg from '../asn/FileSearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSearchOutlinedSvg} />;

FileSearchOutlined.displayName = 'FileSearchOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSearchOutlined);