import React, { useContext } from 'react';
import { ProTable as AntProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import { ConfigProvider, Empty, Table } from '@oceanbase/design';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import useLightFilterStyle from '../LightFilter/style';
import useStyle from './style';

export { ProTableProps };

const ProTable: typeof AntProTable = ({
  form,
  expandable,
  pagination: customPagination,
  footer,
  locale,
  prefixCls: customizePrefixCls,
  tableClassName,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  // customize Table style
  const tablePrefixCls = getPrefixCls('table', customizePrefixCls);
  const { wrapSSR: tableWrapSSR } = Table.useStyle(tablePrefixCls);
  const pagination = Table.useDefaultPagination(customPagination);
  const tableCls = classNames(
    {
      [`${tablePrefixCls}-expandable`]: !isEmpty(expandable),
      [`${tablePrefixCls}-has-footer`]: !!footer,
    },
    tableClassName
  );

  // customize LightFilter style
  const lightFilterPrefixCls = getPrefixCls('pro-form-light-filter', customizePrefixCls);
  const { wrapSSR: lightFilterWrapSSR } = useLightFilterStyle(lightFilterPrefixCls);

  const prefixCls = getPrefixCls('pro-table', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const proTableCls = classNames(className);

  const { emptyText = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, ...restLocale } =
    locale || {};

  return tableWrapSSR(
    lightFilterWrapSSR(
      wrapSSR(
        <AntProTable
          // default size change to `large` as same as Table
          defaultSize="large"
          form={{
            // query form should remove required mark
            requiredMark: false,
            ...form,
          }}
          expandable={expandable}
          pagination={pagination}
          footer={footer}
          locale={{
            ...restLocale,
            emptyText: (
              <div className={`${tablePrefixCls}-empty-wrapper`}>
                {typeof emptyText === 'function' ? emptyText() : emptyText}
              </div>
            ),
          }}
          prefixCls={customizePrefixCls}
          tableClassName={tableCls}
          className={proTableCls}
          {...restProps}
        />
      )
    )
  );
};

ProTable.Summary = AntProTable.Summary;

export default ProTable;
