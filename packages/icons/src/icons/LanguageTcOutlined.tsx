// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LanguageTcOutlinedSvg from '../asn/LanguageTcOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LanguageTcOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LanguageTcOutlinedSvg} />;

LanguageTcOutlined.displayName = 'LanguageTcOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LanguageTcOutlined);