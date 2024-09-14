// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleFolderColoredSvg from '../asn/DoubleFolderColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleFolderColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleFolderColoredSvg} />;

DoubleFolderColored.displayName = 'DoubleFolderColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleFolderColored);