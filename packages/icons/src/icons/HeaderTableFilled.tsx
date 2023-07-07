// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HeaderTableFilledSvg from '../asn/HeaderTableFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeaderTableFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeaderTableFilledSvg} />;

HeaderTableFilled.displayName = 'HeaderTableFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeaderTableFilled);