// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CloseOutlinedSvg from '../asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseOutlinedSvg} />;

CloseOutlined.displayName = 'CloseOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseOutlined);