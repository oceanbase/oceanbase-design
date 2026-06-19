// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EditOutlinedSvg from '../asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditOutlinedSvg} />;

EditOutlined.displayName = 'EditOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EditOutlined);