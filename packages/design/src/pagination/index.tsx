import React, { useContext } from 'react';
import { Pagination as AntPagination } from 'antd';
import type { PaginationProps as AntPaginationProps } from 'antd';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import useDefaultShowTotal from './useDefaultShowTotal';

export type { PaginationConfig } from 'antd/es/pagination';

export interface PaginationProps extends Omit<AntPaginationProps, 'showTotal'> {
  /**
   * Total text. When omitted, the locale-driven default text is shown (e.g. "50 in Total").
   * Pass a function to customize it, or `false` to hide it.
   */
  showTotal?: AntPaginationProps['showTotal'] | false;
}

function Pagination(props: PaginationProps) {
  const { pagination: contextPagination } = useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const defaultShowTotal = useDefaultShowTotal();
  const { showTotal: propsShowTotal, total } = props;
  // Keep the same semantics as Table: an explicitly passed `showTotal` (including
  // `undefined` or `false`) wins over ConfigProvider and the built-in default.
  const hasOwnShowTotal = Object.prototype.hasOwnProperty.call(props, 'showTotal');
  const contextHasShowTotal =
    !!contextPagination && Object.prototype.hasOwnProperty.call(contextPagination, 'showTotal');

  // Merge order: component props > ConfigProvider > built-in default.
  // Only inject the default when `total` is provided: antd falls back to `total = 0`,
  // and showing "0 in Total" for a pagination without data would be misleading.
  const showTotal = hasOwnShowTotal
    ? propsShowTotal
    : contextHasShowTotal
      ? contextPagination?.showTotal
      : total !== undefined
        ? defaultShowTotal
        : undefined;

  return (
    <AntPagination
      {...props}
      // rc-pagination renders the total text whenever showTotal is truthy,
      // so the explicit `false` opt-out is normalized to undefined.
      showTotal={showTotal === false ? undefined : showTotal}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  Pagination.displayName = 'Pagination';
}

export default Pagination;
