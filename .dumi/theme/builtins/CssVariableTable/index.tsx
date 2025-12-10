import type { FC } from 'react';
import * as React from 'react';
import type { TableProps } from '@oceanbase/design';
import { Table, token as defaultToken } from '@oceanbase/design';
import { createStyles } from 'antd-style';
import useLocale from '../../../hooks/useLocale';
import ColorChunk from '../ColorChunk';
import {
  cssVariablesMeta,
  type CssVariableCategory,
  type CssVariableMeta,
} from '../../../../packages/design/src/style/cssVariablesMeta';

export type CssVariableTableProps = {
  /**
   * CSS 变量分类过滤
   * - color: 基础颜色
   * - color-bg: 填充色
   * - color-border: 边框色
   * - color-text: 文本色
   * - color-icon: 图标色
   * - color-status: 状态色
   * - font: 字体
   * - shadow: 阴影
   * - radius: 圆角
   * - space: 间距
   * - component: 组件
   */
  category?: CssVariableCategory | CssVariableCategory[];
  /** CSS 变量前缀，默认 'ob' */
  prefix?: string;
  /** 自定义数据 */
  data?: CssVariableData[];
};

export type CssVariableData = {
  /** 变量名 (不含前缀和 --) */
  name: string;
  /** 描述 */
  desc: string;
  /** 值 */
  value: any;
};

const locales = {
  cn: {
    name: '变量名',
    description: '说明',
    value: '值',
  },
  en: {
    name: 'Variable',
    description: 'Description',
    value: 'Value',
  },
};

const useStyle = createStyles(({ token, css }) => ({
  codeSpan: css`
    margin: 0 1px;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    background: ${token.siteMarkdownCodeBg};
    border: 1px solid ${token.colorSplit};
    border-radius: ${token.borderRadiusSM}px;
    font-family: monospace;
  `,
}));

/**
 * 根据 token 名称获取值
 */
const getTokenValue = (tokenName: string, token: Record<string, any>): any => {
  const value = token[tokenName];
  if (value === undefined) {
    return tokenName;
  }
  // 如果是数字类型的 token，添加 px 单位
  if (
    typeof value === 'number' &&
    !['fontWeight', 'fontWeightStrong', 'fontWeightWeak'].includes(tokenName)
  ) {
    return `${value}px`;
  }
  return value;
};

/**
 * 获取 CSS 变量的值
 */
const getCssVariableValue = (meta: CssVariableMeta, token: Record<string, any>): any => {
  if (meta.value !== undefined) {
    return meta.value;
  }
  if (meta.token) {
    return getTokenValue(meta.token, token);
  }
  return '-';
};

export function useColumns(
  prefix: string
): Exclude<TableProps<CssVariableData>['columns'], undefined> {
  const [locale] = useLocale(locales);
  const { styles } = useStyle();

  return [
    {
      title: locale.name,
      key: 'name',
      dataIndex: 'name',
      width: '35%',
      render: (_, record) => <span>{`--${prefix}-${record.name}`}</span>,
    },
    {
      title: locale.value,
      key: 'value',
      dataIndex: 'value',
      width: '35%',
      render: (_, record) => {
        const isColor =
          typeof record.value === 'string' &&
          (record.value.startsWith('#') || record.value.startsWith('rgb'));
        if (isColor) {
          return <ColorChunk value={record.value}>{record.value}</ColorChunk>;
        }
        return typeof record.value !== 'string' ? JSON.stringify(record.value) : record.value;
      },
    },
    {
      title: locale.description,
      key: 'desc',
      dataIndex: 'desc',
    },
  ];
}

const CssVariableTable: FC<CssVariableTableProps> = ({
  category,
  prefix = 'ob',
  data: customData,
}) => {
  const [, lang] = useLocale(locales);
  const columns = useColumns(prefix);

  const data = React.useMemo<CssVariableData[]>(() => {
    // 如果提供了自定义数据，直接使用
    if (customData) {
      return customData;
    }

    // 从元数据获取
    let filteredMeta = cssVariablesMeta;

    // 根据分类过滤
    if (category) {
      const categories = Array.isArray(category) ? category : [category];
      filteredMeta = cssVariablesMeta.filter(meta => categories.includes(meta.category));
    }

    return filteredMeta.map(meta => ({
      name: meta.name,
      desc: lang === 'cn' ? meta.desc : meta.descEn || meta.desc,
      value: getCssVariableValue(meta, defaultToken),
    }));
  }, [category, customData, lang]);

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      bordered
      scroll={{ x: undefined }}
      rowKey="name"
    />
  );
};

export default CssVariableTable;
