// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlyphColoredSvg from '../asn/GlyphColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlyphColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlyphColoredSvg} />;

GlyphColored.displayName = 'GlyphColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlyphColored);