// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TagPrimaryFilledSvg from '../asn/TagPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagPrimaryFilledSvg} />;

TagPrimaryFilled.displayName = 'TagPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagPrimaryFilled);