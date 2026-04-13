// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SearchOutlinedSvg from '../asn/SearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SearchOutlinedSvg} />;

SearchOutlined.displayName = 'SearchOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SearchOutlined);