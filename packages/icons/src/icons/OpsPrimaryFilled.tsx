// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OpsPrimaryFilledSvg from '../asn/OpsPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpsPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpsPrimaryFilledSvg} />;

OpsPrimaryFilled.displayName = 'OpsPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OpsPrimaryFilled);