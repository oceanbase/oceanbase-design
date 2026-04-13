// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupOutlinedSvg from '../asn/BackupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupOutlinedSvg} />;

BackupOutlined.displayName = 'BackupOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupOutlined);