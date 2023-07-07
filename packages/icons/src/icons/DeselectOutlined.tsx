// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DeselectOutlinedSvg from '../asn/DeselectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeselectOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeselectOutlinedSvg} />;

DeselectOutlined.displayName = 'DeselectOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeselectOutlined);