// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UpDoubleOutlinedSvg from '../asn/UpDoubleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpDoubleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpDoubleOutlinedSvg} />;

UpDoubleOutlined.displayName = 'UpDoubleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpDoubleOutlined);