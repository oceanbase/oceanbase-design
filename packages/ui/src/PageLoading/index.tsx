import React from 'react';
import { Spin } from '@oceanbase/design';
import type { SpinProps } from '@oceanbase/design';

export interface PageLoadingProps extends SpinProps {
  matchWrapperHeight?: boolean;
}

const PageLoading: React.FC<PageLoadingProps> = ({
  prefixCls: customizePrefixCls,
  style,
  matchWrapperHeight = false,
  ...restProps
}) => {
  const spinElement = (
    <Spin
      size="large"
      gray={false}
      style={{
        position: 'absolute',
        // horizontal align
        // 36px is 1/2 of large Spin width
        insetInlineStart: 'calc(50% - 36px)',
        // vertical align
        // 27px is 1/2 of large Spin height
        top: 'calc(50% - 27px)',
        ...style,
      }}
      {...restProps}
    />
  );

  return matchWrapperHeight ? (
    <div
      style={{
        height: '100%',
        position: 'relative',
      }}
    >
      {spinElement}
    </div>
  ) : (
    spinElement
  );
};

export default PageLoading;
