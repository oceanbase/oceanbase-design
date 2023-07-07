// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BookmarkOutlinedSvg from '../asn/BookmarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookmarkOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookmarkOutlinedSvg} />;

BookmarkOutlined.displayName = 'BookmarkOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookmarkOutlined);