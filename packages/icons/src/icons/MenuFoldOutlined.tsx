// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MenuFoldOutlinedSvg from '../asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuFoldOutlinedSvg} />;

MenuFoldOutlined.displayName = 'MenuFoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuFoldOutlined);