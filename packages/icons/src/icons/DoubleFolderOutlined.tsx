// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleFolderOutlinedSvg from '../asn/DoubleFolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleFolderOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleFolderOutlinedSvg} />;

DoubleFolderOutlined.displayName = 'DoubleFolderOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleFolderOutlined);