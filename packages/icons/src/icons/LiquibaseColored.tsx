// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LiquibaseColoredSvg from '../asn/LiquibaseColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LiquibaseColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LiquibaseColoredSvg} />;

LiquibaseColored.displayName = 'LiquibaseColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LiquibaseColored);