// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EllipsisCircleFilledSvg from '../asn/EllipsisCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EllipsisCircleFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EllipsisCircleFilledSvg} />;

EllipsisCircleFilled.displayName = 'EllipsisCircleFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EllipsisCircleFilled);