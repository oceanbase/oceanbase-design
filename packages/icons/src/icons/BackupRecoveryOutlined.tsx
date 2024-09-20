// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupRecoveryOutlinedSvg from '../asn/BackupRecoveryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupRecoveryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupRecoveryOutlinedSvg} />;

BackupRecoveryOutlined.displayName = 'BackupRecoveryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupRecoveryOutlined);