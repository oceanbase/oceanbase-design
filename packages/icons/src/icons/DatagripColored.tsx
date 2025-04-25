// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatagripColoredSvg from '../asn/DatagripColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatagripColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatagripColoredSvg} />;

DatagripColored.displayName = 'DatagripColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatagripColored);