// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LetterLowerOutlinedSvg from '../asn/LetterLowerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LetterLowerOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LetterLowerOutlinedSvg} />;

LetterLowerOutlined.displayName = 'LetterLowerOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LetterLowerOutlined);