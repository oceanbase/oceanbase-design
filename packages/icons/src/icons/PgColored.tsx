// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PgColoredSvg from '../asn/PgColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PgColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PgColoredSvg} />;

PgColored.displayName = 'PgColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PgColored);