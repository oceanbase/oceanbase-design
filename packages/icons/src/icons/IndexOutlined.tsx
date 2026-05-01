// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IndexOutlinedSvg from '../asn/IndexOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IndexOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IndexOutlinedSvg} />;

IndexOutlined.displayName = 'IndexOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IndexOutlined);