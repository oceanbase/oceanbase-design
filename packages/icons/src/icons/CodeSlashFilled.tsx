// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSlashFilledSvg from '../asn/CodeSlashFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSlashFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSlashFilledSvg} />;

CodeSlashFilled.displayName = 'CodeSlashFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSlashFilled);