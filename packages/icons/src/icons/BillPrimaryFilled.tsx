// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillPrimaryFilledSvg from '../asn/BillPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillPrimaryFilledSvg} />;

BillPrimaryFilled.displayName = 'BillPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillPrimaryFilled);