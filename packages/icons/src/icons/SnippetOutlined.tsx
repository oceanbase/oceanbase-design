// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SnippetOutlinedSvg from '../asn/SnippetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetOutlinedSvg} />;

SnippetOutlined.displayName = 'SnippetOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetOutlined);