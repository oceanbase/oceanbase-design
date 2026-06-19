// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageChtOutlinedSvg from '../asn/LanguageChtOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageChtOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageChtOutlinedSvg} />;

LanguageChtOutlined.displayName = 'LanguageChtOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageChtOutlined);