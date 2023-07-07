// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CommentDeleteOutlinedSvg from '../asn/CommentDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommentDeleteOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommentDeleteOutlinedSvg} />;

CommentDeleteOutlined.displayName = 'CommentDeleteOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CommentDeleteOutlined);