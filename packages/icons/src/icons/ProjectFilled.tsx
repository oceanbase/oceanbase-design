// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectFilledSvg from '../asn/ProjectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectFilledSvg} />;

ProjectFilled.displayName = 'ProjectFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectFilled);