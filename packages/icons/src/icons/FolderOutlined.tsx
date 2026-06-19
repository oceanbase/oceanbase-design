// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FolderOutlinedSvg from '../asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOutlinedSvg} />;

FolderOutlined.displayName = 'FolderOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOutlined);