// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MinusSquareOutlinedSvg from '../asn/MinusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusSquareOutlinedSvg} />;

MinusSquareOutlined.displayName = 'MinusSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusSquareOutlined);