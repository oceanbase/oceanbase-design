// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SequenceOutlinedSvg from '../asn/SequenceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SequenceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SequenceOutlinedSvg} />;

SequenceOutlined.displayName = 'SequenceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SequenceOutlined);