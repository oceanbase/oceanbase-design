import { Popover, Space, Table as AntTable, theme } from 'antd';
import type { TableProps as AntTableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { RowSelectMethod, TableLocale as AntTableLocale } from 'antd/es/table/interface';
import type { Reference } from 'rc-table';
import type Summary from 'rc-table/es/Footer/Summary';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import type { ReactElement, ReactNode } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import { FilterOutlined, SwapLeftOutlined, SwapRightOutlined } from '@oceanbase/icons';
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
    dataSource,
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
    virtual,
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
  const { token } = theme.useToken();
  const [wrapCSSVar] = useStyle(prefixCls);
  const noPagination = pagination === false || pagination === null;
  const noData = dataSource?.length === 0;
  // 检测第一列是否有 rowSpan 覆盖最后一行，用于设置正确的左下角圆角
  const hasFirstColumnRowSpan = React.useMemo(() => {
    if (!columns || !dataSource || dataSource.length === 0) return false;
    const firstCol = columns[0];
    if (!firstCol || typeof firstCol.onCell !== 'function') return false;
    // 检测最后一行的第一列是否被 rowspan 覆盖（rowSpan: 0 表示被隐藏）
    const lastIndex = dataSource.length - 1;
    const lastRecord = dataSource[lastIndex];
    const cellProps = firstCol.onCell(lastRecord, lastIndex);
    // 如果最后一行的第一列 rowSpan 为 0，说明被前面的行覆盖了
    return cellProps && cellProps.rowSpan === 0;
  }, [columns, dataSource]);
  // 检测最后一列是否有 rowSpan 覆盖最后一行，用于设置正确的右下角圆角
  const hasLastColumnRowSpan = React.useMemo(() => {
    if (!columns || !dataSource || dataSource.length === 0) return false;
    // 找到最后一个非 hidden 的列
    let lastCol = null;
    for (let i = columns.length - 1; i >= 0; i--) {
      if (!columns[i].hidden) {
        lastCol = columns[i];
        break;
      }
    }
    if (!lastCol || typeof lastCol.onCell !== 'function') return false;
    // 检测最后一行的最后一列是否被 rowspan 覆盖（rowSpan: 0 表示被隐藏）
    const lastIndex = dataSource.length - 1;
    const lastRecord = dataSource[lastIndex];
    const cellProps = lastCol.onCell(lastRecord, lastIndex);
    // 如果最后一行的最后一列 rowSpan 为 0，说明被前面的行覆盖了
    return cellProps && cellProps.rowSpan === 0;
  }, [columns, dataSource]);
  // 检测表头是否有多个 tr（表头分组），用于样式上去掉 tbody 纵向分割线
  const hasMultipleTheadRows = React.useMemo(() => {
    if (!columns) return false;
    return columns.some((col: any) => Array.isArray(col?.children) && col.children.length > 0);
  }, [columns]);
  const tableCls = classNames(
    {
      [`${prefixCls}-expandable`]: !isEmpty(expandable),
      [`${prefixCls}-selectable`]: !!rowSelection,
      [`${prefixCls}-has-footer`]: !!footer,
      [`${prefixCls}-has-first-column-rowspan`]: hasFirstColumnRowSpan,
      [`${prefixCls}-has-last-column-rowspan`]: hasLastColumnRowSpan,
      [`${prefixCls}-thead-multiple-rows`]: hasMultipleTheadRows,
      [`${prefixCls}-inner-bordered`]: innerBordered,
      [`${prefixCls}-no-pagination`]: noPagination,
      [`${prefixCls}-has-empty`]: noData,
      [`${prefixCls}-virtual`]: !!virtual,
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

  // 递归处理嵌套的 columns，为所有层级的列添加排序和筛选图标
  const processColumn = React.useCallback(
    (item: any): any => {
      const newItem = { ...item };
      // 自定义排序图标，根据排序状态高亮不同的图标
      if (item.sorter && !item.sortIcon) {
        newItem.sortIcon = ({ sortOrder }: { sortOrder?: 'ascend' | 'descend' }) => (
          <span className={`${prefixCls}-column-sorter`}>
            <SwapRightOutlined
              rotate={-90}
              style={sortOrder === 'ascend' ? { color: token.colorPrimary } : {}}
            />
            <SwapRightOutlined
              rotate={90}
              style={{
                ...(sortOrder === 'descend' ? { color: token.colorPrimary } : {}),
                marginLeft: -6,
                marginRight: -4,
              }}
            />
          </span>
        );
      }
      // 自定义筛选图标
      if ((item.filters || item.filterDropdown) && !item.filterIcon) {
        newItem.filterIcon = () => <FilterOutlined />;
      }
      // 递归处理 children
      if (item.children && Array.isArray(item.children)) {
        newItem.children = item.children.map((child: any) => processColumn(child));
      }
      return newItem;
    },
    [prefixCls, token.colorPrimary]
  );

  // 找到最后一个非 hidden 的列索引
  const lastVisibleColumnIndex = React.useMemo(() => {
    if (!columns) return -1;
    for (let i = columns.length - 1; i >= 0; i--) {
      if (!columns[i].hidden) {
        return i;
      }
    }
    return -1;
  }, [columns]);

  const newColumns = columns?.map((item, colIndex) => {
    const isLastVisibleColumn = colIndex === lastVisibleColumnIndex;
    let newItem = processColumn(item);
    if (item.ellipsis) {
      newItem = {
        ...newItem,
        ellipsis:
          item.ellipsis === true
            ? item.ellipsis
            : {
                showTitle: false,
                ...item.ellipsis,
              },
        render: (text: any, record: T, rowIndex: number) => {
          const element = (
            item.render ? item.render(text, record, rowIndex) : record[(item as any).dataIndex]
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
    // 为最后一个可见列添加 className，用于 innerBordered 模式下正确识别视觉上的最后一列
    if (isLastVisibleColumn) {
      return {
        ...newItem,
        className: classNames(newItem.className, `${prefixCls}-cell-last-column`),
      };
    }
    return newItem;
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
                {`${batchOperationBar?.selected} ${currentSelectedRowKeys?.length || 0} ${batchOperationBar?.object}`}
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
      dataSource={dataSource}
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
        noPagination
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
