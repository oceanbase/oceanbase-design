// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HelpPrimaryFilledSvg from '../asn/HelpPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HelpPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HelpPrimaryFilledSvg} />;

HelpPrimaryFilled.displayName = 'HelpPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HelpPrimaryFilled);