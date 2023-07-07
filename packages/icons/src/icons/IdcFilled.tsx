// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import IdcFilledSvg from '../asn/IdcFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IdcFilledSvg} />;

IdcFilled.displayName = 'IdcFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IdcFilled);