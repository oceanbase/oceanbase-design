// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObMysqlColoredSvg from '../asn/ObMysqlColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObMysqlColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObMysqlColoredSvg} />;

ObMysqlColored.displayName = 'ObMysqlColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObMysqlColored);