// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InfoOutlinedSvg from '../asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoOutlinedSvg} />;

InfoOutlined.displayName = 'InfoOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoOutlined);