import React from 'react';
import type { ProTableProps as AntProTableProps } from '@ant-design/pro-components';
import { Table } from '@oceanbase/design';
import classNames from 'classnames';
import { mergeColumnTooltip } from './columnTooltip';

interface CreateObTableViewRenderOptions<T, U, ValueType> {
  columns?: AntProTableProps<T, U, ValueType>['columns'];
  mergeTooltip: boolean;
  innerBordered?: boolean;
  tableCls: string;
  pagination: AntProTableProps<T, U, ValueType>['pagination'];
  restLocale: Record<string, any>;
  emptyTextNode: React.ReactNode;
  userTableViewRender?: AntProTableProps<T, U, ValueType>['tableViewRender'];
}

export function createObTableViewRender<T, U, ValueType>({
  columns,
  mergeTooltip,
  innerBordered,
  tableCls,
  pagination,
  restLocale,
  emptyTextNode,
  userTableViewRender,
}: CreateObTableViewRenderOptions<T, U, ValueType>): NonNullable<
  AntProTableProps<T, U, ValueType>['tableViewRender']
> {
  return (props, _defaultDom) => {
    const obTable = (
      <Table
        {...props}
        columns={mergeTooltip ? mergeColumnTooltip(props.columns, columns) : props.columns}
        innerBordered={innerBordered}
        className={classNames(tableCls, props.className)}
        pagination={pagination}
        locale={{
          ...restLocale,
          emptyText: emptyTextNode,
        }}
      />
    );
    return userTableViewRender ? userTableViewRender(props, obTable) : obTable;
  };
}
