import React, { useContext } from 'react';
import type { TablePaginationConfig } from 'antd';
import ConfigProvider from '../../config-provider';
import type { ConfigConsumerProps } from '../../config-provider';
import defaultLocale from '../../locale/en-US';
import type { PaginationLocale } from '../../locale';

export default (pagination?: false | TablePaginationConfig): false | TablePaginationConfig => {
  const { locale: contextLocale, pagination: contextPagination } = useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const paginationLocale: PaginationLocale = {
    ...defaultLocale.Pagination,
    ...contextLocale?.Pagination,
  };
  return pagination === false
    ? pagination
    : {
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
        showTotal: total => paginationLocale.total?.replaceAll('${total}', total?.toString()),
        ...contextPagination,
        ...pagination,
      };
};
