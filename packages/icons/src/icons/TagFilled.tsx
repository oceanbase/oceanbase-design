// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TagFilledSvg from '../asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagFilledSvg} />;

TagFilled.displayName = 'TagFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagFilled);