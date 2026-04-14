// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MemberPrimaryFilledSvg from '../asn/MemberPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MemberPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MemberPrimaryFilledSvg} />;

MemberPrimaryFilled.displayName = 'MemberPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MemberPrimaryFilled);