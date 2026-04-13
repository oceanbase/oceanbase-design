// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BackupFilledSvg from '../asn/BackupFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackupFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackupFilledSvg} />;

BackupFilled.displayName = 'BackupFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackupFilled);