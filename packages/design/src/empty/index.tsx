import React, { useContext } from 'react';
import { Empty as AntEmpty } from 'antd';
import { Card } from '@oceanbase/design';
import type { EmptyProps as AntEmptyProps } from 'antd/es/empty';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';
import EmptyIcon from './icon/EmptyIcon';
import NoDataIcon from './icon/NoDataIcon';
import WellcomeIcon from './icon/WellcomeIcon';
import EmptyBatabase from './icon/EmptyBatabase';
import EmptyCluster from './icon/EmptyCluster';
import EmptyHost from './icon/EmptyHost';
import EmptyOBProxy from './icon/EmptyOBProxy';
import EmptyTenant from './icon/EmptyTenant';

export * from 'antd/es/empty';

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
  iconType?: string;
  layout?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  // 展示模式: 页面模式 | 组件模式
  mode?: 'page' | 'pageCard' | 'component';
  size?: 'default' | 'small';
}

const Empty = React.forwardRef<HTMLSpanElement, EmptyProps>(
  ({
    prefixCls: customizePrefixCls,
    className,
    iconType = 'default',
    layout = 'vertical',
    title,
    description,
    extra,
    image,
    children,
    size = 'default',
    // 默认为页面模式
    mode = 'pageCard',
    style,
    ...restProps
  }) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('empty', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const emptyCls = classNames(prefixCls, className);

    const renderIcon = () => {
      let icon;
      switch (iconType) {
        case 'wellcome':
          icon = <WellcomeIcon />;
          break;
        case 'cluster':
          icon = <EmptyCluster />;
          break;
        case 'tenant':
          icon = <EmptyTenant />;
          break;
        case 'obproxy':
          icon = <EmptyOBProxy />;
          break;
        case 'host':
          icon = <EmptyHost />;
          break;
        case 'database':
          icon = <EmptyBatabase />;
          break;
        case 'empty':
          icon = <EmptyIcon />;
          break;
        case 'default':
          icon = <NoDataIcon />;
          break;
        default:
          icon = <NoDataIcon />;
          break;
      }
      return icon;
    };

    const empty = (
      <AntEmpty
        className={classNames(
          `${emptyCls} ${prefixCls}-${layout} ${prefixCls}-${size === 'small' ? 'small' : ''}`
        )}
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
        image={image ? image : renderIcon()}
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
  }
);

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = AntEmpty.displayName;
}

export default Empty;
