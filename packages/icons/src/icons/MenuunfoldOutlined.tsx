// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MenuunfoldOutlinedSvg from '../asn/MenuunfoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuunfoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MenuunfoldOutlinedSvg} />;

MenuunfoldOutlined.displayName = 'MenuunfoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuunfoldOutlined);