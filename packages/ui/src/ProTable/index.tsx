import React, { useContext } from 'react';
import { ProTable as AntProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import { ConfigProvider, Empty, Table } from '@oceanbase/design';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import useLightFilterStyle from '../LightFilter/style';
import useStyle from './style';

export { ProTableProps };

const ProTable: typeof AntProTable = ({
  form,
  headerTitle,
  options,
  optionsRender,
  toolbar,
  toolBarRender,
  expandable,
  rowSelection,
  pagination: customPagination,
  footer,
  locale,
  cardProps: outerCardProps,
  prefixCls: customizePrefixCls,
  tableClassName,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  // customize Table style
  const tablePrefixCls = getPrefixCls('table', customizePrefixCls);
  const { wrapSSR: tableWrapSSR } = Table.useStyle(tablePrefixCls);
  const pagination = Table.useDefaultPagination(customPagination);
  const tableCls = classNames(
    {
      [`${tablePrefixCls}-expandable`]: !isEmpty(expandable),
      [`${tablePrefixCls}-selectable`]: !!rowSelection,
      [`${tablePrefixCls}-has-footer`]: !!footer,
    },
    tableClassName
  );

  // customize LightFilter style
  const lightFilterPrefixCls = getPrefixCls('pro-form-light-filter', customizePrefixCls);
  const { wrapSSR: lightFilterWrapSSR } = useLightFilterStyle(lightFilterPrefixCls);

  const prefixCls = getPrefixCls('pro-table', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const proTableCls = classNames(className);

  const { emptyText = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, ...restLocale } =
    locale || {};

  const cardProps = typeof outerCardProps === 'boolean' ? {} : outerCardProps;
  const proCardCls = getPrefixCls('pro-card', customizePrefixCls);

  return tableWrapSSR(
    lightFilterWrapSSR(
      wrapSSR(
        <AntProTable
          // default size change to `large` as same as Table
          defaultSize="large"
          form={{
            // query form should remove required mark
            requiredMark: false,
            ...form,
          }}
          headerTitle={headerTitle}
          options={options}
          optionsRender={optionsRender}
          toolbar={toolbar}
          toolBarRender={toolBarRender}
          cardProps={{
            ...cardProps,
            className: classNames(
              {
                [`${proCardCls}-has-title`]:
                  !!headerTitle ||
                  options ||
                  options === undefined ||
                  optionsRender ||
                  toolbar ||
                  toolBarRender,
                [`${proCardCls}-no-divider`]: !cardProps?.headerBordered,
                [`${proCardCls}-no-padding`]: true,
                [`${proCardCls}-contain-tabs`]: !!cardProps?.tabs,
              },
              cardProps?.className
            ),
          }}
          expandable={
            expandable
              ? {
                  columnWidth: 32,
                  ...expandable,
                }
              : undefined
          }
          rowSelection={rowSelection}
          pagination={pagination}
          footer={footer}
          locale={{
            ...restLocale,
            emptyText: (
              <div className={`${tablePrefixCls}-empty-wrapper`}>
                {typeof emptyText === 'function' ? emptyText() : emptyText}
              </div>
            ),
          }}
          prefixCls={customizePrefixCls}
          tableClassName={tableCls}
          className={proTableCls}
          {...restProps}
        />
      )
    )
  );
};

ProTable.Summary = AntProTable.Summary;

export default ProTable;
