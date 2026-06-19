// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileFolderOutlinedSvg from '../asn/FileFolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFolderOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFolderOutlinedSvg} />;

FileFolderOutlined.displayName = 'FileFolderOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFolderOutlined);