// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AddOutlinedSvg from '../asn/AddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AddOutlinedSvg} />;

AddOutlined.displayName = 'AddOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AddOutlined);