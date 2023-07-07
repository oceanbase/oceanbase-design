// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LetterUpperOutlinedSvg from '../asn/LetterUpperOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LetterUpperOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LetterUpperOutlinedSvg} />;

LetterUpperOutlined.displayName = 'LetterUpperOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LetterUpperOutlined);