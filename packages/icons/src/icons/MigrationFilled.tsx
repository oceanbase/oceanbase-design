// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MigrationFilledSvg from '../asn/MigrationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MigrationFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MigrationFilledSvg} />;

MigrationFilled.displayName = 'MigrationFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MigrationFilled);