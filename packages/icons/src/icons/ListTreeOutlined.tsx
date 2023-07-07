// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ListTreeOutlinedSvg from '../asn/ListTreeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListTreeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ListTreeOutlinedSvg} />;

ListTreeOutlined.displayName = 'ListTreeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ListTreeOutlined);