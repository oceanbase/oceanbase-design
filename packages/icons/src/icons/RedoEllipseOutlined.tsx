// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RedoEllipseOutlinedSvg from '../asn/RedoEllipseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedoEllipseOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedoEllipseOutlinedSvg} />;

RedoEllipseOutlined.displayName = 'RedoEllipseOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedoEllipseOutlined);