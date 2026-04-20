// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlusCircleOutlinedSvg from '../asn/PlusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusCircleOutlinedSvg} />;

PlusCircleOutlined.displayName = 'PlusCircleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusCircleOutlined);