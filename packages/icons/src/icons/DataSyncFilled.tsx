// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DataSyncFilledSvg from '../asn/DataSyncFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DataSyncFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DataSyncFilledSvg} />;

DataSyncFilled.displayName = 'DataSyncFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DataSyncFilled);