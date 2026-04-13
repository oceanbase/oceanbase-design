// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CancelOutlinedSvg from '../asn/CancelOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CancelOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CancelOutlinedSvg} />;

CancelOutlined.displayName = 'CancelOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CancelOutlined);