import { SyncOutlined } from '@oceanbase/icons';
import type { IconComponentProps } from '@oceanbase/icons/es/components/Icon';
import type {
  PageContainerProps as AntPageContainerProps,
  PageHeaderProps as AntPageHeaderProps,
} from '@ant-design/pro-components';
import { PageContainer as AntPageContainer } from '@ant-design/pro-components';
import classNames from 'classnames';
import { isObject } from 'lodash';
import React, { useContext } from 'react';
import { ConfigProvider, Space, Tooltip } from '@oceanbase/design';
import LocaleWrapper from '../locale/LocaleWrapper';
import ItemRender from './ItemRender';
import zhCN from './locale/zh-CN';
import useStyle from './style';

export type ReloadType = boolean | IconComponentProps | React.ReactNode;

export interface PageContainerLocale {
  reload?: string;
}

export type PageHeaderProps = AntPageHeaderProps & {
  reload?: ReloadType;
};

export interface PageContainerProps extends AntPageContainerProps {
  header?: PageHeaderProps;
  locale?: PageContainerLocale;
}

const PageContainer = ({
  prefixCls: customizePrefixCls,
  className,
  header,
  content,
  extraContent,
  tabList,
  tabBarExtraContent,
  footerToolBarProps,
  locale,
  ...restProps
}: PageContainerProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = getPrefixCls('pro-page-container', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const { reload, subTitle, breadcrumb } = header || {};
  const reloadProps =
    isObject(reload) && !React.isValidElement(reload)
      ? (reload as Omit<IconComponentProps, 'ref'>)
      : {};
  const reloadCls = classNames(
    `${rootPrefixCls}-page-header-heading-reload`,
    reloadProps.className
  );

  const newSubTitle = (reload || subTitle) && (
    <Space size={12}>
      {reload && (
        <Tooltip title={locale.reload}>
          {isObject(reload) && React.isValidElement(reload) ? (
            reload
          ) : (
            <SyncOutlined {...reloadProps} className={reloadCls} />
          )}
        </Tooltip>
      )}
      {subTitle}
    </Space>
  );
  const newHeader: PageHeaderProps = header && {
    ...header,
    subTitle: newSubTitle,
    breadcrumb: breadcrumb && {
      itemRender: (route, params, routes, paths) => (
        <ItemRender route={route} params={params} routes={routes} paths={paths} />
      ),
      ...breadcrumb,
    },
  };
  const noHasHeader =
    ['title', 'subTitle', 'extra', 'tags', 'avatar', 'backIcon', 'breadcrumb'].every(
      item => !newHeader?.[item]
    ) &&
    !content &&
    !extraContent &&
    !tabList &&
    !tabBarExtraContent;

  const pageContainerCls = classNames(
    {
      [`${prefixCls}-no-page-header`]: noHasHeader,
    },
    className
  );

  return wrapSSR(
    <AntPageContainer
      prefixCls={customizePrefixCls}
      className={pageContainerCls}
      header={newHeader}
      content={content}
      extraContent={extraContent}
      tabList={tabList}
      tabBarExtraContent={tabBarExtraContent}
      footerToolBarProps={{
        // render footer under parent instead of body by default
        portalDom: false,
        ...footerToolBarProps,
      }}
      {...restProps}
    />
  );
};

export default LocaleWrapper({
  componentName: 'PageContainer',
  defaultLocale: zhCN,
})(PageContainer);
