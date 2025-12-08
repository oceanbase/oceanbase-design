import { ArrowLeftOutlined, SyncOutlined } from '@oceanbase/icons';
import type { IconComponentProps } from '@oceanbase/icons/es/components/Icon';
import type {
  PageContainerProps as AntPageContainerProps,
  PageHeaderProps as AntPageHeaderProps,
} from '@ant-design/pro-components';
import { PageContainer as AntPageContainer } from '@ant-design/pro-components';
import classNames from 'classnames';
import { isObject } from 'lodash';
import React, { useContext } from 'react';
import { Button, ConfigProvider, Divider, Space, Tooltip, theme } from '@oceanbase/design';
import LocaleWrapper from '../locale/LocaleWrapper';
import ItemRender from './ItemRender';
import PageLoading from '../PageLoading';
import zhCN from './locale/zh-CN';
import useStyle from './style';

export type ReloadType = boolean | IconComponentProps | React.ReactNode;

export interface PageContainerLocale {
  reload?: string;
  viewDocument?: string;
}

export type PageHeaderProps = AntPageHeaderProps & {
  reload?: ReloadType;
  document?: string | React.MouseEventHandler<HTMLAnchorElement> | React.ReactNode;
};

export interface PageContainerProps extends AntPageContainerProps {
  header?: PageHeaderProps;
  locale?: PageContainerLocale;
}

const DocumentIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_61186_2038)">
        <path
          d="M7.99992 4.66667C7.99992 3.95942 7.71897 3.28115 7.21887 2.78105C6.71877 2.28095 6.0405 2 5.33325 2H1.33325V12H5.99992C6.53035 12 7.03906 12.2107 7.41413 12.5858C7.78921 12.9609 7.99992 13.4696 7.99992 14M7.99992 4.66667V14M7.99992 4.66667C7.99992 3.95942 8.28087 3.28115 8.78097 2.78105C9.28106 2.28095 9.95934 2 10.6666 2H14.6666V12H9.99992C9.46949 12 8.96078 12.2107 8.5857 12.5858C8.21063 12.9609 7.99992 13.4696 7.99992 14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_61186_2038">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const PageContainer = ({
  prefixCls: customizePrefixCls,
  className,
  /* compatible with title, title, subTitle, onBack, backIcon, extra prop */
  title: titleProp,
  subTitle: subTitleProp,
  onBack: onBackProp,
  backIcon: backIconProp,
  breadcrumb: breadcrumbProp,
  extra: extraProp,
  // this is divider for above //
  header,
  content,
  extraContent,
  tabList,
  tabBarExtraContent,
  footerToolBarProps,
  locale,
  loading,
  ...restProps
}: PageContainerProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = getPrefixCls('pro-page-container', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const { token } = theme.useToken();

  const {
    reload,
    title = titleProp,
    subTitle = subTitleProp,
    onBack = onBackProp,
    backIcon = backIconProp || (
      <Button style={{ fontSize: token.fontSizeLG }} icon={<ArrowLeftOutlined />} />
    ),
    document,
    breadcrumb = breadcrumbProp,
    extra = extraProp,
  } = header || {};
  const reloadProps =
    isObject(reload) && !React.isValidElement(reload)
      ? (reload as Omit<IconComponentProps, 'ref'>)
      : {};
  const reloadCls = classNames(
    `${rootPrefixCls}-page-header-heading-reload`,
    reloadProps.className
  );
  const documentLink = typeof document === 'string' ? document : undefined;
  const documentClick = typeof document === 'function' ? document : undefined;

  const newSubTitle = (reload || subTitle || document) && (
    <Space>
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
      {document && (
        <Space>
          <Divider
            type="vertical"
            className={`${rootPrefixCls}-page-header-heading-document-divider`}
          />
          {documentLink || documentClick ? (
            <Tooltip title={locale.viewDocument}>
              <a
                href={documentLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={documentClick}
              >
                <span className={`${rootPrefixCls}-page-header-heading-document-icon`}>
                  <DocumentIcon />
                </span>
              </a>
            </Tooltip>
          ) : (
            (document as React.ReactNode)
          )}
        </Space>
      )}
    </Space>
  );
  const newHeader: PageHeaderProps = (header ||
    title ||
    newSubTitle ||
    onBack ||
    breadcrumb ||
    extra) && {
    ...header,
    title,
    subTitle: newSubTitle,
    onBack,
    backIcon,
    breadcrumb: breadcrumb && {
      itemRender: (route, params, routes, paths) => (
        <ItemRender route={route} params={params} routes={routes} paths={paths} />
      ),
      ...breadcrumb,
    },
    extra,
  };
  const noHasHeader =
    ['title', 'subTitle', 'onBack', 'breadcrumb', 'extra', 'tags', 'avatar'].every(
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
      title={title}
      header={newHeader}
      content={content}
      extraContent={extraContent}
      tabList={tabList}
      tabBarExtraContent={tabBarExtraContent}
      loading={loading === true ? <PageLoading matchWrapperHeight={false} /> : loading}
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
