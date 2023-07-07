// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TopicFilledSvg from '../asn/TopicFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TopicFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TopicFilledSvg} />;

TopicFilled.displayName = 'TopicFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TopicFilled);