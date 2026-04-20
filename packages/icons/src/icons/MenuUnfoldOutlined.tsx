// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MenuUnfoldOutlinedSvg from '../asn/MenuUnfoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuUnfoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuUnfoldOutlinedSvg} />;

MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuUnfoldOutlined);