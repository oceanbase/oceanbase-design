// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasourceColoredSvg from '../asn/DatasourceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasourceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasourceColoredSvg} />;

DatasourceColored.displayName = 'DatasourceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasourceColored);