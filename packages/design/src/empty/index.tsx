import React, { useContext } from 'react';
import { Empty as AntEmpty } from 'antd';
import type { EmptyProps as AntEmptyProps } from 'antd/es/Empty';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/Empty';

export interface EmptyProps extends AntEmptyProps {
  imageType?: string;
}

const Empty = React.forwardRef<HTMLSpanElement, EmptyProps>(
  ({ prefixCls: customizePrefixCls, className, imageType = 'noData', ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('Empty', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const EmptyCls = classNames(prefixCls, className);

    const noDataImage =
      'https://mass-office.alipay.com/design_kitchen/afts/img/TO-1SLtmoSUAAAAAAAAAABAADmmSAQBr/original?x-oss-process=image/resize,w_400/quality,q_90';
    const noProblemImage =
      'https://mass-office.alipay.com/design_kitchen/afts/img/3O9bTJoKzAQAAAAAAAAAABAADmmSAQBr/original?x-oss-process=image/resize,w_400/quality,q_90';
    const emptyImage = imageType === 'noData' ? noDataImage : noProblemImage;

    return wrapSSR(
      <AntEmpty
        ref={ref}
        prefixCls={customizePrefixCls}
        className={EmptyCls}
        imageStyle={{
          height: 54,
        }}
        description={imageType === 'noData' ? '暂无数据' : '暂无问题'}
        image={emptyImage}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = AntEmpty.displayName;
}

export default Empty;
