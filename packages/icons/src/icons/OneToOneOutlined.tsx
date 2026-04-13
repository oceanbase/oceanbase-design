// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OneToOneOutlinedSvg from '../asn/OneToOneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OneToOneOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OneToOneOutlinedSvg} />;

OneToOneOutlined.displayName = 'OneToOneOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OneToOneOutlined);