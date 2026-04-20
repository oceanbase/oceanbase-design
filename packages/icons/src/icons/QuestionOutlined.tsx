// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import QuestionOutlinedSvg from '../asn/QuestionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionOutlinedSvg} />;

QuestionOutlined.displayName = 'QuestionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionOutlined);