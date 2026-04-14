// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectPrimaryFilledSvg from '../asn/ProjectPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectPrimaryFilledSvg} />;

ProjectPrimaryFilled.displayName = 'ProjectPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectPrimaryFilled);