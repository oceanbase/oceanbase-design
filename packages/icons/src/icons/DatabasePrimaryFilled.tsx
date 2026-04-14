// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabasePrimaryFilledSvg from '../asn/DatabasePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabasePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabasePrimaryFilledSvg} />;

DatabasePrimaryFilled.displayName = 'DatabasePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabasePrimaryFilled);