// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AirflowColoredSvg from '../asn/AirflowColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirflowColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AirflowColoredSvg} />;

AirflowColored.displayName = 'AirflowColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AirflowColored);