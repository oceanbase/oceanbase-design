// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CopyOutlinedSvg from '../asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyOutlinedSvg} />;

CopyOutlined.displayName = 'CopyOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyOutlined);