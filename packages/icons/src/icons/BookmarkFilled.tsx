// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BookmarkFilledSvg from '../asn/BookmarkFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookmarkFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookmarkFilledSvg} />;

BookmarkFilled.displayName = 'BookmarkFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookmarkFilled);