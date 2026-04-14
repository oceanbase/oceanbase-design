// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupPrimaryFilledSvg from '../asn/BackupPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupPrimaryFilledSvg} />;

BackupPrimaryFilled.displayName = 'BackupPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupPrimaryFilled);