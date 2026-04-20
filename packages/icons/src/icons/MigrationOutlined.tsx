// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MigrationOutlinedSvg from '../asn/MigrationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MigrationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MigrationOutlinedSvg} />;

MigrationOutlined.displayName = 'MigrationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MigrationOutlined);