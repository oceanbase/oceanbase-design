// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TypeOutlinedSvg from '../asn/TypeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TypeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TypeOutlinedSvg} />;

TypeOutlined.displayName = 'TypeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TypeOutlined);