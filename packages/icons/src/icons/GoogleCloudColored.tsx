// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GoogleCloudColoredSvg from '../asn/GoogleCloudColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleCloudColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleCloudColoredSvg} />;

GoogleCloudColored.displayName = 'GoogleCloudColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleCloudColored);