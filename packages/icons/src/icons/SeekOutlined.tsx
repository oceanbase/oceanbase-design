// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SeekOutlinedSvg from '../asn/SeekOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SeekOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SeekOutlinedSvg} />;

SeekOutlined.displayName = 'SeekOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SeekOutlined);