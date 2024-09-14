// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupRecoveryColoredSvg from '../asn/BackupRecoveryColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupRecoveryColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupRecoveryColoredSvg} />;

BackupRecoveryColored.displayName = 'BackupRecoveryColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupRecoveryColored);