// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PersonalSpacePrimaryFilledSvg from '../asn/PersonalSpacePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PersonalSpacePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PersonalSpacePrimaryFilledSvg} />;

PersonalSpacePrimaryFilled.displayName = 'PersonalSpacePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PersonalSpacePrimaryFilled);