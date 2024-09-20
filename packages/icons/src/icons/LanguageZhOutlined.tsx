// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageZhOutlinedSvg from '../asn/LanguageZhOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageZhOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageZhOutlinedSvg} />;

LanguageZhOutlined.displayName = 'LanguageZhOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageZhOutlined);