// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ListOutlinedSvg from '../asn/ListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ListOutlinedSvg} />;

ListOutlined.displayName = 'ListOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ListOutlined);