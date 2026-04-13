// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillFilledSvg from '../asn/BillFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillFilledSvg} />;

BillFilled.displayName = 'BillFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillFilled);