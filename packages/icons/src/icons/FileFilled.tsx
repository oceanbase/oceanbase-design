// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FileFilledSvg from '../asn/FileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFilledSvg} />;

FileFilled.displayName = 'FileFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFilled);