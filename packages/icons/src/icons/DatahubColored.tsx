// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatahubColoredSvg from '../asn/DatahubColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatahubColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatahubColoredSvg} />;

DatahubColored.displayName = 'DatahubColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatahubColored);