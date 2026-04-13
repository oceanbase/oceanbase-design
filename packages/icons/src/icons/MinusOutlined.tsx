// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MinusOutlinedSvg from '../asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusOutlinedSvg} />;

MinusOutlined.displayName = 'MinusOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusOutlined);