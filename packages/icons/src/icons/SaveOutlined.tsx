// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SaveOutlinedSvg from '../asn/SaveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveOutlinedSvg} />;

SaveOutlined.displayName = 'SaveOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveOutlined);