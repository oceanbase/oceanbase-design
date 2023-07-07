// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RecycleBinTwoToneSvg from '../asn/RecycleBinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RecycleBinTwoTone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RecycleBinTwoToneSvg} />;

RecycleBinTwoTone.displayName = 'RecycleBinTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RecycleBinTwoTone);