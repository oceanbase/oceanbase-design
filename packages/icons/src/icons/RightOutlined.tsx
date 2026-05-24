// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RightOutlinedSvg from '../asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightOutlinedSvg} />;

RightOutlined.displayName = 'RightOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightOutlined);