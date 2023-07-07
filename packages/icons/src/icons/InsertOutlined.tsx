// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InsertOutlinedSvg from '../asn/InsertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsertOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsertOutlinedSvg} />;

InsertOutlined.displayName = 'InsertOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InsertOutlined);