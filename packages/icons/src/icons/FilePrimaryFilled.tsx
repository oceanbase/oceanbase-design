// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FilePrimaryFilledSvg from '../asn/FilePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePrimaryFilledSvg} />;

FilePrimaryFilled.displayName = 'FilePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePrimaryFilled);