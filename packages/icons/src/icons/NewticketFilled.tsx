// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NewticketFilledSvg from '../asn/NewticketFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewticketFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewticketFilledSvg} />;

NewticketFilled.displayName = 'NewticketFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewticketFilled);