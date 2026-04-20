// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageChOutlinedSvg from '../asn/LanguageChOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageChOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageChOutlinedSvg} />;

LanguageChOutlined.displayName = 'LanguageChOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageChOutlined);