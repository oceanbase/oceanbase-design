// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DataSyncOutlinedSvg from '../asn/DataSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DataSyncOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DataSyncOutlinedSvg} />;

DataSyncOutlined.displayName = 'DataSyncOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DataSyncOutlined);