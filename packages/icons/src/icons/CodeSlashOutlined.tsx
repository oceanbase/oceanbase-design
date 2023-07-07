// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSlashOutlinedSvg from '../asn/CodeSlashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSlashOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSlashOutlinedSvg} />;

CodeSlashOutlined.displayName = 'CodeSlashOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSlashOutlined);