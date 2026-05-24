// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectOutlinedSvg from '../asn/ProjectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectOutlinedSvg} />;

ProjectOutlined.displayName = 'ProjectOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectOutlined);