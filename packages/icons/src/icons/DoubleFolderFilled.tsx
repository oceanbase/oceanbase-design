// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleFolderFilledSvg from '../asn/DoubleFolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleFolderFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleFolderFilledSvg} />;

DoubleFolderFilled.displayName = 'DoubleFolderFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleFolderFilled);