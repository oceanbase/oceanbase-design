// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import KafkaColoredSvg from '../asn/KafkaColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KafkaColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KafkaColoredSvg} />;

KafkaColored.displayName = 'KafkaColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(KafkaColored);