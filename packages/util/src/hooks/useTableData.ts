import { some, isNil, noop, omitBy } from 'lodash';
import { useAntdTable } from 'ahooks-v2';
import { DEFAULT_LIST_DATA } from '../constant';
import { isNullValue } from '../util';

const sortOrderMap = {
  ascend: 'asc',
  descend: 'desc',
};

const defaultAsnycFnOfUseTableData = () => {
  const promise = new Promise(resolve => {
    resolve({
      tableProps: {
        dataSource: [],
        loading: false,
        pagination: {
          total: 0,
          current: 1,
          pageSize: 10,
        },
      },
      refresh: noop,
      search: {
        changeType: noop,
        submit: noop,
        reset: noop,
      },
    });
  });
  promise.then(data => {
    return data;
  });
  return promise;
};

/**
 * 获取表格数据，内置后端分页、筛选和排序的请求逻辑，同时支持条件请求
 * TODO: 后续需要补全 TS 类型定义
 */
export function useTableData({
  fn = noop,
  params = {},
  condition = [],
  refreshDeps = [],
  options = {},
}) {
  const { pagePropName = 'page', sizePropName = 'size', ...restOptions } = options as any;
  const newOptions = {
    formatResult: (res: any) => {
      const { data } = (res || {}) as any;
      // 接口请求出错时，后端返回的 res.data 可能为 undefined。避免前端解析错误导致页面崩溃，这里需要做健壮性处理
      const { page: { totalElements = 0 } = {}, contents = [] } = data || DEFAULT_LIST_DATA;
      return {
        total: totalElements,
        list: contents,
      };
    },
    refreshDeps,
    ...restOptions,
  };

  const serviceFn = some(condition, item => isNullValue(item))
    ? defaultAsnycFnOfUseTableData
    : ({ current, pageSize, sorter = {}, filters = {} }: any) => {
        // eslint-disable-next-line
        let newFilters = {} as any;
        Object.keys(filters).forEach(key => {
          // antd 4.x 的表格筛选，在筛选项为空时，对应字段为 null 值，为了适配这里调用 join 方法前需要做非空判断
          newFilters[key] = filters[key] && filters[key].join(',');
        });
        // 对列表查询参数进行处理
        const newParams = omitBy(
          {
            [pagePropName]: current,
            [sizePropName]: pageSize,
            // @ts-ignore
            sort: sorter.order
              ? // @ts-ignore
                `${sorter.field},${sortOrderMap[sorter.order as 'ascend' | 'descend']}`
              : null,
            ...newFilters,
            ...params,
          },
          value => isNil(value) || value === '' // 将空值剔除
        );
        return fn(newParams);
      };

  const result = useAntdTable(serviceFn, newOptions);
  if (result) {
    // @ts-ignore
    result.tableProps.pagination.showSizeChanger = true;
    // @ts-ignore
    result.tableProps.pagination.showTotal = (total: number) => `共 ${total} 条`;
  }
  return result;
}
