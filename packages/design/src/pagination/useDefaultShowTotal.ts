import { useContext } from 'react';
import type { PaginationProps } from 'antd';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import type { PaginationLocale } from '../locale';

/**
 * Resolve the localized `showTotal` renderer shared by Pagination and Table.
 * Returns undefined when the current locale has no `Pagination.total` template, so callers
 * skip rendering an empty `.ant-pagination-total-text` node.
 */
const useDefaultShowTotal = (): PaginationProps['showTotal'] | undefined => {
  const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
  const paginationLocale: PaginationLocale = {
    ...defaultLocale.Pagination,
    ...contextLocale?.Pagination,
  };
  const template = paginationLocale.total;
  if (!template) {
    return undefined;
  }
  return (total: number) => template.split('${total}').join(total?.toString());
};

export default useDefaultShowTotal;
