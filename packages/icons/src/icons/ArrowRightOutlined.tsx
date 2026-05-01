// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ArrowRightOutlinedSvg from '../asn/ArrowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowRightOutlinedSvg} />;

ArrowRightOutlined.displayName = 'ArrowRightOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowRightOutlined);