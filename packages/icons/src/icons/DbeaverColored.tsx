// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DbeaverColoredSvg from '../asn/DbeaverColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DbeaverColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DbeaverColoredSvg} />;

DbeaverColored.displayName = 'DbeaverColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DbeaverColored);