import React, { useContext } from 'react';
import { ProTable as AntProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import classNames from 'classnames';
import { ConfigProvider, Table } from '@oceanbase/design';
import useStyle from './style';

export { ProTableProps };

const ProTable: typeof AntProTable = ({
  pagination: customPagination,
  form,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-table', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const proTableCls = classNames(className);

  const pagination = Table.useDefaultPagination(customPagination);

  return wrapSSR(
    <AntProTable
      // default size change to `large`
      defaultSize="large"
      pagination={pagination}
      form={{
        // query form should remove required mark
        requiredMark: false,
        ...form,
      }}
      prefixCls={customizePrefixCls}
      className={proTableCls}
      {...restProps}
    />
  );
};

ProTable.Summary = AntProTable.Summary;

export default ProTable;
