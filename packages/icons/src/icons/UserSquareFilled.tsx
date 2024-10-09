// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSquareFilledSvg from '../asn/UserSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSquareFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSquareFilledSvg} />;

UserSquareFilled.displayName = 'UserSquareFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSquareFilled);