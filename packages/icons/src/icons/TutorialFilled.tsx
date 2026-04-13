// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TutorialFilledSvg from '../asn/TutorialFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TutorialFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TutorialFilledSvg} />;

TutorialFilled.displayName = 'TutorialFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TutorialFilled);