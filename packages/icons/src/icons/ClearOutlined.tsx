// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ClearOutlinedSvg from '../asn/ClearOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClearOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClearOutlinedSvg} />;

ClearOutlined.displayName = 'ClearOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClearOutlined);