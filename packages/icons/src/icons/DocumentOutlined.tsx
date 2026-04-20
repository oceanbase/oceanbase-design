// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DocumentOutlinedSvg from '../asn/DocumentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DocumentOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DocumentOutlinedSvg} />;

DocumentOutlined.displayName = 'DocumentOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DocumentOutlined);