import React, { useContext } from 'react';
import { ProTable as AntProTable } from '@ant-design/pro-components';
import type { ProTableProps as AntProTableProps } from '@ant-design/pro-components';
import { ConfigProvider, Empty, Table } from '@oceanbase/design';
import classNames from 'classnames';
import { isEmpty, merge } from 'lodash';
import useLightFilterStyle from '../LightFilter/style';
import useStyle from './style';

export interface ProTableProps<T, U, ValueType> extends AntProTableProps<T, U, ValueType> {
  innerBordered?: boolean;
}

// type CompoundedComponent = React.FC<ProTableProps<T, U, ValueType>> & typeof AntProTable;

function ProTable<T, U, ValueType>({
  form,
  headerTitle,
  options,
  optionsRender,
  toolbar,
  toolBarRender,
  size,
  bordered,
  innerBordered,
  cardBordered,
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
}: ProTableProps<T, U, ValueType>) {
  const { getPrefixCls, card: contextCard } = useContext(ConfigProvider.ConfigContext);

  // customize Table style
  const tablePrefixCls = getPrefixCls('table', customizePrefixCls);
  const { wrapSSR: tableWrapSSR } = Table.useStyle(tablePrefixCls);
  const pagination = Table.useDefaultPagination(customPagination);
  const tableCls = classNames(
    {
      [`${tablePrefixCls}-expandable`]: !isEmpty(expandable),
      [`${tablePrefixCls}-selectable`]: !!rowSelection,
      [`${tablePrefixCls}-has-footer`]: !!footer,
      [`${tablePrefixCls}-inner-bordered`]: innerBordered,
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

  const cardProps = merge(
    {},
    contextCard,
    typeof outerCardProps === 'boolean' ? {} : outerCardProps
  );
  const proCardCls = getPrefixCls('pro-card', customizePrefixCls);

  return tableWrapSSR(
    lightFilterWrapSSR(
      wrapSSR(
        <AntProTable
          // default size change to `large` as same as Table
          defaultSize="large"
          size={size}
          bordered={bordered || innerBordered}
          cardBordered={
            cardBordered ?? (contextCard?.variant ? contextCard?.variant === 'outlined' : undefined)
          }
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
                [`${proCardCls}-no-divider`]: !cardProps?.headerBordered && !cardProps?.divided,
                [`${proCardCls}-no-padding`]: true,
                [`${proCardCls}-contain-tabs`]: !!cardProps?.tabs,
              },
              cardProps?.className
            ),
            bodyStyle: {
              paddingBlock: 0,
              ...cardProps?.bodyStyle,
            },
          }}
          expandable={
            expandable
              ? {
                  columnWidth: !size || size === 'large' ? 40 : 32,
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
}

ProTable.Summary = AntProTable.Summary;

export default ProTable;
