// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SnippetFilledSvg from '../asn/SnippetFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetFilledSvg} />;

SnippetFilled.displayName = 'SnippetFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetFilled);