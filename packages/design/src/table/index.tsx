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
import enUS from '../locale/en-US';
import useStyle from './style';
import type { AnyObject } from '../_util/type';

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

function Table<T>(props: TableProps<T>, ref: React.Ref<Reference>) {
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
  const extendedContext = useContext(ConfigProvider.ExtendedConfigContext);

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

  const [openPopover, setOpenPopover] = useState<boolean>(false);
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
            {!hiddenCancelBtn && <a onClick={handleOptionsCancel}>{batchOperationBar?.cancel}</a>}
            {toolSelectedContent && (
              <Popover
                placement="top"
                overlayClassName={`${prefixCls}-batch-operation-selection-popover`}
                content={toolSelectedContent?.(currentSelectedRowKeys, currentSelectedRows)}
                trigger="click"
                open={openPopover}
              >
                <a onClick={() => setOpenPopover(!openPopover)}>
                  {openPopover ? batchOperationBar?.collapse : batchOperationBar?.open}
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
      ref={ref}
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
              hideOnSinglePage:
                extendedContext.hideOnSinglePage !== undefined
                  ? extendedContext.hideOnSinglePage
                  : true,
              ...pagination,
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
});
