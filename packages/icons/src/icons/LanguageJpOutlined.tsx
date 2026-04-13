// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageJpOutlinedSvg from '../asn/LanguageJpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageJpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageJpOutlinedSvg} />;

LanguageJpOutlined.displayName = 'LanguageJpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageJpOutlined);