import React, { useContext } from 'react';
import { ProTable as AntProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import classNames from 'classnames';
import { ConfigProvider, Table } from '@oceanbase/design';
import useLightFilterStyle from '../LightFilter/style';
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

  // customize Table style
  const tablePrefixCls = getPrefixCls('table', customizePrefixCls);
  const { wrapSSR: tableWrapSSR } = Table.useStyle(tablePrefixCls);
  const pagination = Table.useDefaultPagination(customPagination);

  // customize LightFilter style
  const lightFilterPrefixCls = getPrefixCls('pro-form-light-filter', customizePrefixCls);
  const { wrapSSR: lightFilterWrapSSR } = useLightFilterStyle(lightFilterPrefixCls);

  const prefixCls = getPrefixCls('pro-table', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const proTableCls = classNames(className);

  return tableWrapSSR(
    lightFilterWrapSSR(
      wrapSSR(
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
      )
    )
  );
};

ProTable.Summary = AntProTable.Summary;

export default ProTable;
