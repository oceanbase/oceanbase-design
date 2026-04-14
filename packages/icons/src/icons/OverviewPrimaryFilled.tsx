// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OverviewPrimaryFilledSvg from '../asn/OverviewPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OverviewPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OverviewPrimaryFilledSvg} />;

OverviewPrimaryFilled.displayName = 'OverviewPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OverviewPrimaryFilled);