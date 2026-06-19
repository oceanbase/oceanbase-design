// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ArrowLeftOutlinedSvg from '../asn/ArrowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowLeftOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowLeftOutlinedSvg} />;

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowLeftOutlined);