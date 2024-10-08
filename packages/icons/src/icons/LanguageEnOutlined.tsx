// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageEnOutlinedSvg from '../asn/LanguageEnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageEnOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageEnOutlinedSvg} />;

LanguageEnOutlined.displayName = 'LanguageEnOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageEnOutlined);