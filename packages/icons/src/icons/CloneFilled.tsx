// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CloneFilledSvg from '../asn/CloneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloneFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloneFilledSvg} />;

CloneFilled.displayName = 'CloneFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloneFilled);