// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AwsColoredSvg from '../asn/AwsColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AwsColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AwsColoredSvg} />;

AwsColored.displayName = 'AwsColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AwsColored);