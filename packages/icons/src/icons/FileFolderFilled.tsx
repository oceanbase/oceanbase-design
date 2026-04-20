// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileFolderFilledSvg from '../asn/FileFolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFolderFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFolderFilledSvg} />;

FileFolderFilled.displayName = 'FileFolderFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFolderFilled);