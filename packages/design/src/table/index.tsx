import { Popover, Space, Table as AntTable } from 'antd';
import type { TableProps as AntTableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { RowSelectMethod, TableLocale as AntTableLocale } from 'antd/es/table/interface';
import type { Reference } from 'rc-table';
import type Summary from 'rc-table/es/Footer/Summary';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import type { ReactElement, ReactNode } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import ConfigProvider from '../config-provider';
import Typography from '../typography';
import Empty from '../empty';
import useStyle from './style';
import type { AnyObject } from '../_util/type';
import useDefaultPagination from './hooks/useDefaultPagination';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import enUS from '../locale/en-US';

export * from 'antd/es/table';

export interface TableLocale extends AntTableLocale {
  batchOperationBar?: {
    selected?: string;
    object?: string;
    cancel?: string;
    collapse?: string;
    open?: string;
  };
}

export interface TableProps<T> extends AntTableProps<T> {
  innerBordered?: boolean;
  columns?: ColumnsType<T>;
  cancelText?: string;
  collapseText?: string;
  openText?: string;
  hiddenCancelBtn?: boolean;
  toolOptionsRender?: (selectedRowKeys: React.Key[], selectedRows: T[]) => ReactNode[];
  toolAlertRender?: false | ((selectedRowKeys: React.Key[], selectedRows: T[]) => ReactNode);
  toolSelectedContent?: (selectedRowKeys: React.Key[], selectedRows: T[]) => ReactNode;
  locale?: TableLocale;
}

function Table<T extends Record<string, any>>(props: TableProps<T>, ref: React.Ref<Reference>) {
  const {
    locale: customLocale,
    size,
    bordered,
    innerBordered,
    columns,
    footer,
    pagination: customPagination,
    rowSelection,
    rowClassName,
    toolAlertRender,
    toolOptionsRender,
    toolSelectedContent,
    cancelText,
    collapseText,
    openText,
    expandable,
    scroll,
    hiddenCancelBtn = false,
    prefixCls: customizePrefixCls,
    className,
  } = props;
  const extendedContext = useContext(ConfigProvider.ExtendedConfigContext);
  const pagination = useDefaultPagination(customPagination);

  const { getPrefixCls, locale, table } = useContext(ConfigProvider.ConfigContext);
  const {
    batchOperationBar,
    emptyText = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
    ...restLocale
  } = {
    ...customLocale,
    batchOperationBar: {
      ...enUS.Table?.batchOperationBar,
      ...locale?.Table?.batchOperationBar,
      ...customLocale?.batchOperationBar,
    },
  };

  const prefixCls = getPrefixCls('table', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const tableCls = classNames(
    {
      [`${prefixCls}-expandable`]: !isEmpty(expandable),
      [`${prefixCls}-selectable`]: !!rowSelection,
      [`${prefixCls}-has-footer`]: !!footer,
      [`${prefixCls}-inner-bordered`]: innerBordered,
    },
    className
  );

  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const [currentSelectedRowKeys, setCurrentSelectedRowKeys] = useMergedState([], {
    value: rowSelection?.selectedRowKeys,
    defaultValue: rowSelection?.defaultSelectedRowKeys,
  });

  const [currentSelectedRows, setCurrentSelectedRows] = useState<any[]>([]);
  const [currentSelectedInfo, setCurrentSelectedInfo] = useState<any>({});

  const newColumns = columns?.map(item => {
    if (item.ellipsis) {
      return {
        ...item,
        ellipsis:
          item.ellipsis === true
            ? item.ellipsis
            : {
                showTitle: false,
                ...item.ellipsis,
              },
        render: (text: any, record: T, index: number) => {
          const element = (
            item.render ? item.render(text, record, index) : record[(item as any).dataIndex]
          ) as ReactElement | undefined;
          const elementType = element?.type as any;
          // 如果目标元素已经被 Tooltip 包裹，则去掉默认的 Tooltip，避免有两个 Tooltip
          return elementType?.__ANT_TOOLTIP === true ? (
            element
          ) : (
            <Typography.Text
              ellipsis={{
                tooltip: {
                  placement: 'topLeft',
                  title: element,
                },
              }}
            >
              <span>{element}</span>
            </Typography.Text>
          );
        },
      };
    }
    return item;
  });
  const hasEllipsisColumn = newColumns.some(item => item.ellipsis);

  const handleSelectedData = (selectedRowKeys: React.Key[], selectedRows: T[], info: any) => {
    setCurrentSelectedRowKeys(selectedRowKeys);
    setCurrentSelectedRows(selectedRows);
    setCurrentSelectedInfo(info);
  };

  const handleOptionsCancel = () => {
    rowSelection?.onChange?.([], [], currentSelectedInfo);
    handleSelectedData([], [], currentSelectedInfo);
  };

  useEffect(() => {
    if (isEmpty(currentSelectedRows) && toolSelectedContent) {
      setOpenPopover(false);
    }
  }, [currentSelectedRows]);

  const renderOptionsBar = (total: number, range: [number, number]) => {
    if (isEmpty(rowSelection) || isEmpty(currentSelectedRowKeys)) {
      return (
        // @ts-ignore
        <span>{pagination && pagination?.showTotal && pagination?.showTotal(total, range)}</span>
      );
    }

    return (
      <div>
        <div className={`${prefixCls}-batch-operation-bar`}>
          <Space
            size={8}
            style={{
              marginRight: 24,
            }}
          >
            {toolAlertRender && toolAlertRender(currentSelectedRowKeys, currentSelectedRows)}
            {!toolAlertRender && toolAlertRender !== false && (
              <span className={`${prefixCls}-batch-operation-selection`}>
                <span>{batchOperationBar?.selected}</span>
                <span className={`${prefixCls}-batch-operation-selection-count`}>
                  {currentSelectedRowKeys?.length || 0}
                </span>
                <span>{batchOperationBar?.object}</span>
              </span>
            )}
            {!hiddenCancelBtn && (
              <a onClick={handleOptionsCancel}>{cancelText ?? batchOperationBar?.cancel}</a>
            )}
            {toolSelectedContent && (
              <Popover
                placement="top"
                overlayClassName={`${prefixCls}-batch-operation-selection-popover`}
                content={toolSelectedContent?.(currentSelectedRowKeys, currentSelectedRows)}
                trigger="click"
                open={openPopover}
              >
                <a onClick={() => setOpenPopover(!openPopover)}>
                  {openPopover
                    ? (collapseText ?? batchOperationBar?.collapse)
                    : (openText ?? batchOperationBar?.open)}
                </a>
              </Popover>
            )}
          </Space>
          {toolOptionsRender && (
            <Space size={8}>
              {toolOptionsRender?.(currentSelectedRowKeys, currentSelectedRows)}
            </Space>
          )}
        </div>
        {/* @ts-ignore */}
        <span>{pagination && pagination?.showTotal && pagination?.showTotal(total, range)}</span>
      </div>
    );
  };

  return wrapCSSVar(
    <AntTable
      {...props}
      ref={ref}
      prefixCls={customizePrefixCls}
      className={tableCls}
      locale={{
        ...restLocale,
        emptyText: (
          <div className={`${prefixCls}-empty-wrapper`}>
            {typeof emptyText === 'function' ? emptyText() : emptyText}
          </div>
        ),
      }}
      size={size}
      bordered={bordered || innerBordered}
      columns={newColumns}
      rowClassName={(...args) => {
        return classNames(
          typeof rowClassName === 'function' ? rowClassName(...args) : rowClassName,
          {
            [`${prefixCls}-expand-row-by-click`]: expandable?.expandRowByClick,
          }
        );
      }}
      expandable={
        expandable
          ? {
              columnWidth: !size || size === 'large' ? 40 : 32,
              ...expandable,
            }
          : undefined
      }
      rowSelection={
        rowSelection
          ? {
              columnWidth: table?.selectionColumnWidth,
              ...rowSelection,
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: any[],
                info: {
                  type: RowSelectMethod;
                }
              ) => {
                handleSelectedData(selectedRowKeys, selectedRows, info);
                rowSelection?.onChange?.(selectedRowKeys, selectedRows, info);
              },
            }
          : undefined
      }
      scroll={{
        // enable auto x scroll when there is no ellipsis column
        x: hasEllipsisColumn ? undefined : 'max-content',
        ...scroll,
      }}
      footer={footer}
      pagination={
        pagination === false
          ? false
          : {
              ...pagination,
              hideOnSinglePage:
                toolAlertRender ||
                toolOptionsRender ||
                toolSelectedContent ||
                pagination?.showSizeChanger
                  ? false
                  : pagination?.hideOnSinglePage !== undefined
                    ? pagination?.hideOnSinglePage
                    : extendedContext.hideOnSinglePage,
              showTotal: renderOptionsBar,
            }
      }
    />
  );
}

const ForwardTable = React.forwardRef(Table) as <RecordType extends AnyObject = AnyObject>(
  props: React.PropsWithChildren<TableProps<RecordType>> & {
    ref?: React.Ref<Reference>;
  }
) => React.ReactElement;

export default Object.assign(ForwardTable, {
  SELECTION_COLUMN: AntTable.SELECTION_COLUMN,
  EXPAND_COLUMN: AntTable.EXPAND_COLUMN,
  SELECTION_ALL: AntTable.SELECTION_ALL,
  SELECTION_INVERT: AntTable.SELECTION_INVERT,
  SELECTION_NONE: AntTable.SELECTION_NONE,
  Column: AntTable.Column,
  ColumnGroup: AntTable.ColumnGroup,
  Summary: AntTable.Summary as typeof Summary,
  useStyle,
  useDefaultPagination,
});
