// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import JobOutlinedSvg from '../asn/JobOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const JobOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={JobOutlinedSvg} />;

JobOutlined.displayName = 'JobOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(JobOutlined);