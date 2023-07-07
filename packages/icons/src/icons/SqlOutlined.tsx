// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SqlOutlinedSvg from '../asn/SqlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SqlOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SqlOutlinedSvg} />;

SqlOutlined.displayName = 'SqlOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SqlOutlined);