import { Popover, Space, Table as AntTable, Typography } from 'antd';
import type { TableProps as AntTableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { RowSelectMethod, TableLocale as AntTableLocale } from 'antd/es/table/interface';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import type { ReactElement, ReactNode } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import ConfigProvider from '../config-provider';
import enUS from '../locale/en-US';
import useStyle from './style';

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
  columns?: ColumnsType<T>;
  hiddenCancelBtn?: boolean;
  toolOptionsRender?: (selectedRowKeys, selectedRows) => ReactNode[];
  toolAlertRender?: false | ((selectedRowKeys, selectedRows) => ReactNode);
  toolSelectedContent?: (selectedRowKeys, selectedRows) => ReactNode;
  locale?: TableLocale;
}

function Table<T>(props: TableProps<T>) {
  const {
    locale: customLocale,
    columns,
    pagination,
    rowSelection,
    toolAlertRender,
    toolOptionsRender,
    toolSelectedContent,
    expandable,
    hiddenCancelBtn = false,
    prefixCls: customizePrefixCls,
    className,
  } = props;
  const { batchOperationBar, ...restLocale } = {
    ...customLocale,
    batchOperationBar: {
      ...enUS.Table?.batchOperationBar,
      ...customLocale?.batchOperationBar,
    },
  };

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('table', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const tableCls = classNames(
    {
      [`${prefixCls}-expandable`]: !isEmpty(expandable),
    },
    className
  );

  const [openPopver, setOpenPopver] = useState<boolean>(false);
  const [currentSelectedRowKeys, setCurrentSelectedRowKeys] = useState<any[]>();
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
        render: (text, record, index) => {
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

  const handleSelectedData = (selectedRowKeys, selectedRows, info) => {
    setCurrentSelectedRowKeys(selectedRowKeys);
    setCurrentSelectedRows(selectedRows);
    setCurrentSelectedInfo(info);
  };

  const handleOptionsCancel = () => {
    rowSelection?.onChange([], [], currentSelectedInfo);
    handleSelectedData([], [], currentSelectedInfo);
  };

  useEffect(() => {
    if (isEmpty(currentSelectedRows) && toolSelectedContent) {
      setOpenPopver(false);
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
            {!hiddenCancelBtn && <a onClick={handleOptionsCancel}>{batchOperationBar?.cancel}</a>}
            {toolSelectedContent && (
              <Popover
                placement="top"
                overlayClassName={`${prefixCls}-batch-operation-selection-popover`}
                content={toolSelectedContent?.(currentSelectedRowKeys, currentSelectedRows)}
                trigger="click"
                open={openPopver}
              >
                <a onClick={() => setOpenPopver(!openPopver)}>
                  {openPopver ? batchOperationBar?.collapse : batchOperationBar?.open}
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

  return wrapSSR(
    <AntTable
      {...props}
      prefixCls={customizePrefixCls}
      className={tableCls}
      locale={restLocale}
      columns={newColumns}
      rowSelection={
        rowSelection
          ? {
              ...rowSelection,
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: any[],
                info: {
                  type: RowSelectMethod;
                }
              ) => {
                handleSelectedData(selectedRowKeys, selectedRows, info);
                rowSelection?.onChange(selectedRowKeys, selectedRows, info);
              },
            }
          : undefined
      }
      pagination={
        pagination === false
          ? false
          : {
              ...pagination,
              // @ts-ignore
              showTotal: renderOptionsBar,
            }
      }
    />
  );
}

Table.SELECTION_COLUMN = AntTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = AntTable.EXPAND_COLUMN;
Table.SELECTION_ALL = AntTable.SELECTION_ALL;
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntTable.SELECTION_NONE;
Table.Column = AntTable.Column;
Table.ColumnGroup = AntTable.ColumnGroup;
Table.Summary = AntTable.Summary;

export default Table;
