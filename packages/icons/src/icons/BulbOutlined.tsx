// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BulbOutlinedSvg from '../asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbOutlinedSvg} />;

BulbOutlined.displayName = 'BulbOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbOutlined);