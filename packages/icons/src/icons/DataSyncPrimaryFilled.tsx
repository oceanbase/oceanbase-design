// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DataSyncPrimaryFilledSvg from '../asn/DataSyncPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DataSyncPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DataSyncPrimaryFilledSvg} />;

DataSyncPrimaryFilled.displayName = 'DataSyncPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DataSyncPrimaryFilled);