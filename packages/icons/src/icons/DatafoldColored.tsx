// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatafoldColoredSvg from '../asn/DatafoldColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatafoldColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatafoldColoredSvg} />;

DatafoldColored.displayName = 'DatafoldColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatafoldColored);