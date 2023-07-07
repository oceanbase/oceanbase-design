// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InternetFilledSvg from '../asn/InternetFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InternetFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InternetFilledSvg} />;

InternetFilled.displayName = 'InternetFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InternetFilled);