import * as React from 'react';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { Row as AntRow } from 'antd';
import type { RowProps } from 'antd/es/grid';

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { style, ...others } = props;

  const supportFlexGap = useFlexGapSupport();

  // Add gutter related style
  const mergeStyle = {
    ...style,
  };

  if (!supportFlexGap) {
    mergeStyle.marginTop = '-8px';
    mergeStyle.marginBottom = '-8px';
  }
  return <AntRow ref={ref} style={mergeStyle} {...others} />;
});

if (process.env.NODE_ENV !== 'production') {
  Row.displayName = 'Row';
}

export default Row;
