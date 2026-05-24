// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OasFilledSvg from '../asn/OasFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OasFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OasFilledSvg} />;

OasFilled.displayName = 'OasFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OasFilled);