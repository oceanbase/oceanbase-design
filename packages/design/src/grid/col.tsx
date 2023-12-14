import * as React from 'react';
import useFlexGapSupport from '../_util/useFlexGapSupport';
import { Col as AntCol } from 'antd';
import type { ColProps } from 'antd/es/grid';

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const { style, ...others } = props;

  const supportFlexGap = useFlexGapSupport();
  const mergeStyle = {
    ...style,
  };
  if (!supportFlexGap) {
    mergeStyle.paddingBottom = '8px';
    mergeStyle.paddingTop = '8px';
  }

  return <AntCol ref={ref} style={mergeStyle} {...others} />;
});

if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col';
}

export default Col;
