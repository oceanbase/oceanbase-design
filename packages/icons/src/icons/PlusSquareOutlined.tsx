// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlusSquareOutlinedSvg from '../asn/PlusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusSquareOutlinedSvg} />;

PlusSquareOutlined.displayName = 'PlusSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusSquareOutlined);