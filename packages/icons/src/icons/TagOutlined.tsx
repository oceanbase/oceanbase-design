// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TagOutlinedSvg from '../asn/TagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagOutlinedSvg} />;

TagOutlined.displayName = 'TagOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagOutlined);