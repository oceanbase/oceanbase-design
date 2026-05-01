// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TerminateFilledSvg from '../asn/TerminateFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminateFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TerminateFilledSvg} />;

TerminateFilled.displayName = 'TerminateFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TerminateFilled);