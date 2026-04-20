// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NewsOutlinedSvg from '../asn/NewsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NewsOutlinedSvg} />;

NewsOutlined.displayName = 'NewsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NewsOutlined);