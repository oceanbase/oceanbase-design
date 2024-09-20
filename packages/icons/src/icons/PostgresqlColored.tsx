// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PostgresqlColoredSvg from '../asn/PostgresqlColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PostgresqlColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PostgresqlColoredSvg} />;

PostgresqlColored.displayName = 'PostgresqlColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PostgresqlColored);