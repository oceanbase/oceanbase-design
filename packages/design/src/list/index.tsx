import React, { useContext } from 'react';
import { List as AntList } from 'antd';
import type { ListProps } from 'antd/es/list';
import ConfigProvider from '../config-provider';

export * from 'antd/es/list';
export * from 'antd/es/list/Item';

function List<T>({ pagination, ...restProps }: ListProps<T>) {
  const extendedContext = useContext(ConfigProvider.ExtendedConfigContext);

  return (
    <AntList
      {...restProps}
      pagination={
        typeof pagination === 'object'
          ? {
              hideOnSinglePage:
                extendedContext.hideOnSinglePage !== undefined
                  ? extendedContext.hideOnSinglePage
                  : true,
              ...pagination,
            }
          : pagination
      }
    />
  );
}

List.Item = AntList.Item;

if (process.env.NODE_ENV !== 'production') {
  List.displayName = AntList.displayName;
}

export default List;
