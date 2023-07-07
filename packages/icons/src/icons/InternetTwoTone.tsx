// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InternetTwoToneSvg from '../asn/InternetTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InternetTwoTone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InternetTwoToneSvg} />;

InternetTwoTone.displayName = 'InternetTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InternetTwoTone);