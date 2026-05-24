// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DeleteOutlinedSvg from '../asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteOutlinedSvg} />;

DeleteOutlined.displayName = 'DeleteOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteOutlined);