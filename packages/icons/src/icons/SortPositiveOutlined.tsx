// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SortPositiveOutlinedSvg from '../asn/SortPositiveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortPositiveOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortPositiveOutlinedSvg} />;

SortPositiveOutlined.displayName = 'SortPositiveOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortPositiveOutlined);