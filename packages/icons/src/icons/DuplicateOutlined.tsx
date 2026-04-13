// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DuplicateOutlinedSvg from '../asn/DuplicateOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DuplicateOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DuplicateOutlinedSvg} />;

DuplicateOutlined.displayName = 'DuplicateOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DuplicateOutlined);