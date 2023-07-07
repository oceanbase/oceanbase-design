// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DouyinFilledSvg from '../asn/DouyinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DouyinFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DouyinFilledSvg} />;

DouyinFilled.displayName = 'DouyinFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DouyinFilled);