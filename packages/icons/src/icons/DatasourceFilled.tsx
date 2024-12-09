// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasourceFilledSvg from '../asn/DatasourceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasourceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasourceFilledSvg} />;

DatasourceFilled.displayName = 'DatasourceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasourceFilled);