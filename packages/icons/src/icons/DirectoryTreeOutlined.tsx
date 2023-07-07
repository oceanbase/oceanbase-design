// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DirectoryTreeOutlinedSvg from '../asn/DirectoryTreeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectoryTreeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DirectoryTreeOutlinedSvg} />;

DirectoryTreeOutlined.displayName = 'DirectoryTreeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DirectoryTreeOutlined);