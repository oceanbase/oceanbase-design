// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HelpFilledSvg from '../asn/HelpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HelpFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HelpFilledSvg} />;

HelpFilled.displayName = 'HelpFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HelpFilled);