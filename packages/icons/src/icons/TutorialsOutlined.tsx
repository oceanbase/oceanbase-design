// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TutorialsOutlinedSvg from '../asn/TutorialsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TutorialsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TutorialsOutlinedSvg} />;

TutorialsOutlined.displayName = 'TutorialsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TutorialsOutlined);