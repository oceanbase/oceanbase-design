// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SnippetPrimaryFilledSvg from '../asn/SnippetPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetPrimaryFilledSvg} />;

SnippetPrimaryFilled.displayName = 'SnippetPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetPrimaryFilled);