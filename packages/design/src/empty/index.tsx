import React, { useContext } from 'react';
import { Empty as AntEmpty } from 'antd';
import { Card } from '@oceanbase/design';
import type { EmptyProps as AntEmptyProps } from 'antd/es/empty';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import DefaultEmptyImg from './Empty';
export * from 'antd/es/empty';
import useStyle from './style';

const defaultEmptyImg = <DefaultEmptyImg />;

interface ExtraProps {
  prefixCls: string;
  extra: React.ReactNode;
}

const Extra: React.FC<ExtraProps> = ({ prefixCls, extra }) => {
  if (!extra) {
    return null;
  }
  return <div className={`${prefixCls}-extra`}>{extra}</div>;
};

export interface EmptyProps extends AntEmptyProps {
  layout?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  // 展示模式: 页面模式 | 组件模式
  mode?: 'page' | 'pageCard' | 'component';
}

type CompoundedComponent = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
};

const Empty: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  className,
  layout = 'vertical',
  title,
  description,
  extra,
  image = defaultEmptyImg,
  children,
  // 默认为页面模式
  mode = 'pageCard',
  style,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const emptyCls = classNames(prefixCls, className);

  const empty = (
    <AntEmpty
      className={classNames(`${emptyCls} ${prefixCls}-${layout}`)}
      description={
        (title || description || extra) && (
          <>
            {title && <div className={`${prefixCls}-title`}>{title}</div>}
            <div className={`${prefixCls}-subTitle`}>{description}</div>
            {layout === 'horizontal' && children && (
              <div className={`${prefixCls}-content`}>{children}</div>
            )}
            {extra && <Extra prefixCls={prefixCls} extra={extra} />}
          </>
        )
      }
      image={image}
      {...restProps}
    >
      {layout !== 'horizontal' && children}
    </AntEmpty>
  );

  const pageCard = (
    <Card className={`${emptyCls}-${mode}`} style={style}>
      {empty}
    </Card>
  );

  const MyEmpty = mode === 'component' ? empty : pageCard;

  return wrapSSR(MyEmpty);
};

AntEmpty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;

Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT;
Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE;

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = AntEmpty.displayName;
}

export default Empty;
