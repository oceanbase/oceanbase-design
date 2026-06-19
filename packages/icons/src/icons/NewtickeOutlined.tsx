// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NewtickeOutlinedSvg from '../asn/NewtickeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewtickeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewtickeOutlinedSvg} />;

NewtickeOutlined.displayName = 'NewtickeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewtickeOutlined);