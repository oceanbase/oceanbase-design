// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InfoFilledSvg from '../asn/InfoFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoFilledSvg} />;

InfoFilled.displayName = 'InfoFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoFilled);