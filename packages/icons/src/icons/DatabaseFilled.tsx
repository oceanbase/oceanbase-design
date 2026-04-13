// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseFilledSvg from '../asn/DatabaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseFilledSvg} />;

DatabaseFilled.displayName = 'DatabaseFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseFilled);