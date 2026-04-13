// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CodeSnippetOutlinedSvg from '../asn/CodeSnippetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSnippetOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSnippetOutlinedSvg} />;

CodeSnippetOutlined.displayName = 'CodeSnippetOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSnippetOutlined);