// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InfoPrimaryOutlinedSvg from '../asn/InfoPrimaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoPrimaryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoPrimaryOutlinedSvg} />;

InfoPrimaryOutlined.displayName = 'InfoPrimaryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoPrimaryOutlined);