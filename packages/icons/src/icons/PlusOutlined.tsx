// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlusOutlinedSvg from '../asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusOutlinedSvg} />;

PlusOutlined.displayName = 'PlusOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusOutlined);