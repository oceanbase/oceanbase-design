// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LetterOutlinedSvg from '../asn/LetterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LetterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LetterOutlinedSvg} />;

LetterOutlined.displayName = 'LetterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LetterOutlined);