// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MindTreeOutlinedSvg from '../asn/MindTreeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MindTreeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MindTreeOutlinedSvg} />;

MindTreeOutlined.displayName = 'MindTreeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MindTreeOutlined);