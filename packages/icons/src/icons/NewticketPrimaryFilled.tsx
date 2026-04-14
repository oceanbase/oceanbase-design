// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NewticketPrimaryFilledSvg from '../asn/NewticketPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewticketPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewticketPrimaryFilledSvg} />;

NewticketPrimaryFilled.displayName = 'NewticketPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewticketPrimaryFilled);