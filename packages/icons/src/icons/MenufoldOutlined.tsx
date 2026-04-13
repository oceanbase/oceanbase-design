// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MenufoldOutlinedSvg from '../asn/MenufoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenufoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenufoldOutlinedSvg} />;

MenufoldOutlined.displayName = 'MenufoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenufoldOutlined);