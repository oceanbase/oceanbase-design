import React, { useContext } from 'react';
import type { TablePaginationConfig } from 'antd';
import ConfigProvider from '../../config-provider';
import type { ConfigConsumerProps, OBPaginationConfig } from '../../config-provider';
import defaultLocale from '../../locale/en-US';
import type { PaginationLocale } from '../../locale';

/**
 * Table 分页配置：在 antd TablePaginationConfig 基础上，`showTotal` 额外支持传 `false` 关闭总数展示。
 * 不传 `showTotal` 使用默认文案，传函数则自定义，传 `false` 或显式 `undefined` 则不展示。
 */
export type OBTablePaginationConfig = Omit<TablePaginationConfig, 'showTotal'> &
  Pick<OBPaginationConfig, 'showTotal'>;

export default (pagination?: false | OBTablePaginationConfig): false | TablePaginationConfig => {
  const { locale: contextLocale, pagination: contextPagination } = useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const paginationLocale: PaginationLocale = {
    ...defaultLocale.Pagination,
    ...contextLocale?.Pagination,
  };
  if (pagination === false) {
    return pagination;
  }
  // 合并顺序不能调整：默认 showTotal 在前、调用方配置在后展开，这样「不传 showTotal」保留默认文案，
  // 显式传 undefined / false 才会覆盖为不展示。不要改写成 ?? 、解构默认值或 omitBy(isUndefined)：
  // ProTable 会把这里的返回值再合并一次（见 ProTable/obTableViewRender），键被删掉后默认文案会复活。
  const merged: OBTablePaginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    showTotal: total => paginationLocale.total?.split('${total}').join(total?.toString()),
    ...contextPagination,
    ...pagination,
  };
  return {
    ...merged,
    // antd 只接受函数或 undefined，这里把显式的 false 归一化，下游只需判断是否存在函数
    showTotal: merged.showTotal === false ? undefined : merged.showTotal,
  };
};
