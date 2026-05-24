// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TutorialOutlinedSvg from '../asn/TutorialOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TutorialOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TutorialOutlinedSvg} />;

TutorialOutlined.displayName = 'TutorialOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TutorialOutlined);