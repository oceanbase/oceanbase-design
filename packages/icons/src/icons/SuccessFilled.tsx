// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SuccessFilledSvg from '../asn/SuccessFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuccessFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SuccessFilledSvg} />;

SuccessFilled.displayName = 'SuccessFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SuccessFilled);