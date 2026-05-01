// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SubProgramOutlinedSvg from '../asn/SubProgramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubProgramOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubProgramOutlinedSvg} />;

SubProgramOutlined.displayName = 'SubProgramOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubProgramOutlined);