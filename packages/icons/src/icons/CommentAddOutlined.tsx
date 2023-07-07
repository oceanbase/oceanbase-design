// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CommentAddOutlinedSvg from '../asn/CommentAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommentAddOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommentAddOutlinedSvg} />;

CommentAddOutlined.displayName = 'CommentAddOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CommentAddOutlined);