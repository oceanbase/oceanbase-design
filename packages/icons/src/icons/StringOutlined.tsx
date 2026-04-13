// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StringOutlinedSvg from '../asn/StringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StringOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StringOutlinedSvg} />;

StringOutlined.displayName = 'StringOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StringOutlined);