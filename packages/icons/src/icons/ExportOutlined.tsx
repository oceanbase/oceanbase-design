// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ExportOutlinedSvg from '../asn/ExportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExportOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExportOutlinedSvg} />;

ExportOutlined.displayName = 'ExportOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExportOutlined);