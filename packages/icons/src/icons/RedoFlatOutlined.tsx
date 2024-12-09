// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RedoFlatOutlinedSvg from '../asn/RedoFlatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedoFlatOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedoFlatOutlinedSvg} />;

RedoFlatOutlined.displayName = 'RedoFlatOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedoFlatOutlined);