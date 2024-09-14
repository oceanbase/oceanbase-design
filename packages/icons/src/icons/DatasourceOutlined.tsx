// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasourceOutlinedSvg from '../asn/DatasourceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasourceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasourceOutlinedSvg} />;

DatasourceOutlined.displayName = 'DatasourceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasourceOutlined);