// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SynonymsOutlinedSvg from '../asn/SynonymsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SynonymsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SynonymsOutlinedSvg} />;

SynonymsOutlined.displayName = 'SynonymsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SynonymsOutlined);