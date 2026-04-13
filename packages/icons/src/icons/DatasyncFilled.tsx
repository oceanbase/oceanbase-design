// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatasyncFilledSvg from '../asn/DatasyncFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatasyncFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatasyncFilledSvg} />;

DatasyncFilled.displayName = 'DatasyncFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatasyncFilled);