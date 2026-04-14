// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TutorialPrimaryFilledSvg from '../asn/TutorialPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TutorialPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TutorialPrimaryFilledSvg} />;

TutorialPrimaryFilled.displayName = 'TutorialPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TutorialPrimaryFilled);