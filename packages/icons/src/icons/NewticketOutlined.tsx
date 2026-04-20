// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NewticketOutlinedSvg from '../asn/NewticketOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewticketOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewticketOutlinedSvg} />;

NewticketOutlined.displayName = 'NewticketOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewticketOutlined);