// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimejobOutlinedSvg from '../asn/TimejobOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimejobOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimejobOutlinedSvg} />;

TimejobOutlined.displayName = 'TimejobOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimejobOutlined);