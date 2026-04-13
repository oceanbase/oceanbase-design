// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SortOutlinedSvg from '../asn/SortOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortOutlinedSvg} />;

SortOutlined.displayName = 'SortOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortOutlined);