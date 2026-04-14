// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasourcePrimaryFilledSvg from '../asn/DatasourcePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasourcePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasourcePrimaryFilledSvg} />;

DatasourcePrimaryFilled.displayName = 'DatasourcePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasourcePrimaryFilled);