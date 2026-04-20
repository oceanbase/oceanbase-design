// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DuplicateFilledSvg from '../asn/DuplicateFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DuplicateFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DuplicateFilledSvg} />;

DuplicateFilled.displayName = 'DuplicateFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DuplicateFilled);