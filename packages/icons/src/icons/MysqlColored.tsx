// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MysqlColoredSvg from '../asn/MysqlColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MysqlColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MysqlColoredSvg} />;

MysqlColored.displayName = 'MysqlColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MysqlColored);