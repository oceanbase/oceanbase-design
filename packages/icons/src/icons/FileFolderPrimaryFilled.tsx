// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileFolderPrimaryFilledSvg from '../asn/FileFolderPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFolderPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFolderPrimaryFilledSvg} />;

FileFolderPrimaryFilled.displayName = 'FileFolderPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFolderPrimaryFilled);