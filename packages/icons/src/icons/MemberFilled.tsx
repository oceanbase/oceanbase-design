// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MemberFilledSvg from '../asn/MemberFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MemberFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MemberFilledSvg} />;

MemberFilled.displayName = 'MemberFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MemberFilled);