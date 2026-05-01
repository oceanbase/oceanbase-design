// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FilterOutlinedSvg from '../asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilterOutlinedSvg} />;

FilterOutlined.displayName = 'FilterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterOutlined);