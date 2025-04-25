// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSlashColoredSvg from '../asn/CodeSlashColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSlashColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSlashColoredSvg} />;

CodeSlashColored.displayName = 'CodeSlashColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSlashColored);