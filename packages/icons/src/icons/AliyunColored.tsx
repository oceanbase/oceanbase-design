// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AliyunColoredSvg from '../asn/AliyunColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliyunColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AliyunColoredSvg} />;

AliyunColored.displayName = 'AliyunColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AliyunColored);