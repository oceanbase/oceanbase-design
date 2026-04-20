// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SortNegativeOutlinedSvg from '../asn/SortNegativeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortNegativeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortNegativeOutlinedSvg} />;

SortNegativeOutlined.displayName = 'SortNegativeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortNegativeOutlined);