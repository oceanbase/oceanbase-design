// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OverviewFilledSvg from '../asn/OverviewFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OverviewFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OverviewFilledSvg} />;

OverviewFilled.displayName = 'OverviewFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OverviewFilled);