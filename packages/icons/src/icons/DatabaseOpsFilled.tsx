// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseOpsFilledSvg from '../asn/DatabaseOpsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOpsFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOpsFilledSvg} />;

DatabaseOpsFilled.displayName = 'DatabaseOpsFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOpsFilled);