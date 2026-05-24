// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FolderOutOutlinedSvg from '../asn/FolderOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOutOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOutOutlinedSvg} />;

FolderOutOutlined.displayName = 'FolderOutOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOutOutlined);