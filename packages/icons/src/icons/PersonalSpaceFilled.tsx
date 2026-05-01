// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PersonalSpaceFilledSvg from '../asn/PersonalSpaceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PersonalSpaceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PersonalSpaceFilledSvg} />;

PersonalSpaceFilled.displayName = 'PersonalSpaceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PersonalSpaceFilled);