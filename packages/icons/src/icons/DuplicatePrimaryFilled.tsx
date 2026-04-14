// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DuplicatePrimaryFilledSvg from '../asn/DuplicatePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DuplicatePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DuplicatePrimaryFilledSvg} />;

DuplicatePrimaryFilled.displayName = 'DuplicatePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DuplicatePrimaryFilled);