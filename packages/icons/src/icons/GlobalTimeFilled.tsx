// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalTimeFilledSvg from '../asn/GlobalTimeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalTimeFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalTimeFilledSvg} />;

GlobalTimeFilled.displayName = 'GlobalTimeFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalTimeFilled);