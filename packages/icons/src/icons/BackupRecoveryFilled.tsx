// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupRecoveryFilledSvg from '../asn/BackupRecoveryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupRecoveryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupRecoveryFilledSvg} />;

BackupRecoveryFilled.displayName = 'BackupRecoveryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupRecoveryFilled);