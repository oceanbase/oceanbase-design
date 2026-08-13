import type { FC } from 'react';
import * as React from 'react';
import type { TableProps } from '@oceanbase/design';
import { Table, token as defaultToken, message } from '@oceanbase/design';
import { createStyles } from 'antd-style';
import { CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import useLocale from '../../../hooks/useLocale';
import ColorChunk from '../ColorChunk';
import {
  obTokenMeta,
  type ObTokenCategory,
  type ObTokenMeta,
} from '../../../../packages/design/src/theme/obTokenMeta';

export type ObTokenTableProps = {
  /**
   * CSS 变量分类过滤
   * - color: 基础颜色
   * - color-bg: 背景色
   * - color-border: 边框色
   * - color-text: 文本色
   * - color-icon: 图标色
   * - font: 字体
   * - font-style: 字体样式
   * - font-family: 字体
   * - font-weight: 字重
   * - font-size: 字号
   * - font-line-height: 行高
   * - shadow: 阴影
   * - radius: 圆角
   * - space: 间距
   * - component: 组件
   */
  category?: ObTokenCategory | ObTokenCategory[];
  /** CSS 变量前缀，默认 'ob' */
  prefix?: string;
  /** 自定义数据 */
  data?: ObTokenData[];
};

export type ObTokenData = {
  /** 变量名 (不含前缀和 --) */
  name: string;
  /** 描述 */
  desc: string;
  /** 值 */
  value: any;
  /** JS token 名称 */
  jsToken?: string;
};

const locales = {
  cn: {
    name: '变量名',
    cssVariable: 'CSS 变量',
    jsToken: 'JS Token',
    description: '说明',
    value: '值',
    copySuccess: '已复制',
  },
  en: {
    name: 'Variable',
    cssVariable: 'CSS Variable',
    jsToken: 'JS Token',
    description: 'Description',
    value: 'Value',
    copySuccess: 'Copied',
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
  variableRow: css`
    position: relative;
    transition: all 0.2s;

    &:hover {
      background: ${token.colorFillTertiary};
    }
  `,
  variableCell: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      .copy-icon {
        opacity: 1;
      }
    }

    .copy-icon {
      opacity: 0;
      transition: opacity 0.2s;
      color: ${token.colorLink};
      cursor: pointer;

      &:hover {
        color: ${token.colorPrimary};
      }
    }
  `,
  valueCell: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      .copy-icon {
        opacity: 1;
      }
    }

    .copy-icon {
      opacity: 0;
      transition: opacity 0.2s;
      color: ${token.colorLink};
      cursor: pointer;

      &:hover {
        color: ${token.colorPrimary};
      }
    }
  `,
  cssVarName: css``,
  jsTokenName: css``,
}));

/**
 * 将 kebab-case 转换为 camelCase
 */
const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * 根据 CSS 变量名获取 obToken 的 key
 * obToken 的 key 是从 CSS 变量名转换的，而不是元数据中的 token 字段（那是参考值）
 */
const getJsTokenName = (cssVarName: string): string => {
  // 从 CSS 变量名转换为 camelCase，这就是 obToken 的 key
  return kebabToCamel(cssVarName);
};

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
 * 使用元数据中的 token 字段（Ant Design token 的 key）来获取实际值
 */
const getCssVariableValue = (meta: ObTokenMeta, token: Record<string, any>): any => {
  // 如果元数据中有固定值，直接使用
  if (meta.value !== undefined) {
    return meta.value;
  }
  // 使用元数据中的 token 字段（Ant Design token 的 key）来获取值
  if (meta.token) {
    return getTokenValue(meta.token, token);
  }
  return '-';
};

export function useColumns(
  prefix: string,
  onCopy: (text: string, type: 'css' | 'js') => void
): Exclude<TableProps<ObTokenData>['columns'], undefined> {
  const [locale] = useLocale(locales);
  const { styles } = useStyle();

  return [
    {
      title: locale.cssVariable,
      key: 'cssVariable',
      width: '25%',
      render: (_, record) => {
        const cssVarName = `--${prefix}-${record.name}`;

        const handleCopy = (text: string, result: boolean) => {
          if (result) {
            onCopy(text, 'css');
          }
        };

        return (
          <div className={styles.variableCell}>
            <CopyToClipboard text={cssVarName} onCopy={handleCopy}>
              <span className={styles.cssVarName} style={{ cursor: 'pointer' }}>
                {cssVarName}
              </span>
            </CopyToClipboard>
            <CopyToClipboard text={cssVarName} onCopy={handleCopy}>
              <CopyOutlined className="copy-icon" />
            </CopyToClipboard>
          </div>
        );
      },
    },
    {
      title: locale.jsToken,
      key: 'jsToken',
      width: '25%',
      render: (_, record) => {
        const jsTokenName = record.jsToken || '';

        if (!jsTokenName) {
          return '-';
        }

        const handleJsTokenCopy = (text: string, result: boolean) => {
          if (result) {
            onCopy(text, 'js');
          }
        };

        return (
          <div className={styles.variableCell}>
            <CopyToClipboard text={jsTokenName} onCopy={handleJsTokenCopy}>
              <span className={styles.jsTokenName} style={{ cursor: 'pointer' }}>
                {jsTokenName}
              </span>
            </CopyToClipboard>
            <CopyToClipboard text={jsTokenName} onCopy={handleJsTokenCopy}>
              <CopyOutlined className="copy-icon" />
            </CopyToClipboard>
          </div>
        );
      },
    },
    {
      title: locale.value,
      key: 'value',
      dataIndex: 'value',
      width: '25%',
      render: (_, record) => {
        const isColor =
          typeof record.value === 'string' &&
          (record.value.startsWith('#') || record.value.startsWith('rgb'));

        const valueContent = isColor ? (
          <ColorChunk value={record.value}>{record.value}</ColorChunk>
        ) : typeof record.value !== 'string' ? (
          JSON.stringify(record.value)
        ) : (
          record.value
        );

        const handleCopy = (text: string, result: boolean) => {
          if (result) {
            onCopy(String(record.value), 'css');
          }
        };

        return (
          <div className={styles.valueCell}>
            <CopyToClipboard text={String(record.value)} onCopy={handleCopy}>
              <span style={{ cursor: 'pointer' }}>{valueContent}</span>
            </CopyToClipboard>
            <CopyToClipboard text={String(record.value)} onCopy={handleCopy}>
              <CopyOutlined className="copy-icon" />
            </CopyToClipboard>
          </div>
        );
      },
    },
    {
      title: locale.description,
      key: 'desc',
      dataIndex: 'desc',
      width: '25%',
    },
  ];
}

// 分类映射：将新的子分类映射到原始分类
const categoryMap: Record<string, ObTokenCategory> = {
  'color-bg': 'color-bg',
  'color-border': 'color-border',
  'color-text': 'color-text',
  'color-icon': 'color-icon',
  'font-style': 'font',
  'font-family': 'font',
  'font-weight': 'font',
  'font-size': 'font',
  'font-line-height': 'font',
};

/**
 * 检查 token 是否属于指定的子分类
 */
const matchesSubCategory = (meta: ObTokenMeta, subCategory: string): boolean => {
  const name = meta.name.toLowerCase();

  switch (subCategory) {
    case 'font-style':
      return (
        name.startsWith('font-h') || name.startsWith('font-body') || name.startsWith('font-caption')
      );
    case 'font-family':
      return name.startsWith('font-family');
    case 'font-weight':
      return name.startsWith('font-weight');
    case 'font-size':
      return name.startsWith('font-size');
    case 'font-line-height':
      return name.startsWith('font-line-height');
    default:
      return false;
  }
};

const ObTokenTable: FC<ObTokenTableProps> = ({ category, prefix = 'ob', data: customData }) => {
  const [, lang] = useLocale(locales);
  const { styles } = useStyle();
  const [locale] = useLocale(locales);

  // 复制成功回调
  const handleCopy = React.useCallback(
    (text: string, type: 'css' | 'js') => {
      message.success(`${locale.copySuccess}: ${text}`);
    },
    [locale.copySuccess]
  );

  const columns = useColumns(prefix, handleCopy);

  const data = React.useMemo<ObTokenData[]>(() => {
    // 如果提供了自定义数据，直接使用
    if (customData) {
      return customData;
    }

    // 从元数据获取
    let filteredMeta = obTokenMeta;

    // 根据分类过滤
    if (category) {
      const categories = Array.isArray(category) ? category : [category];
      filteredMeta = obTokenMeta.filter(meta => {
        // 检查是否匹配原始分类或映射的分类
        return categories.some(cat => {
          const mappedCategory = categoryMap[cat] || cat;
          // 如果是子分类，需要额外检查
          if (cat.startsWith('font-') && cat !== 'font') {
            return meta.category === 'font' && matchesSubCategory(meta, cat);
          }
          return meta.category === mappedCategory || meta.category === cat;
        });
      });
    }

    return filteredMeta.map(meta => {
      const jsTokenName = getJsTokenName(meta.name);
      return {
        name: meta.name,
        desc: lang === 'cn' ? meta.desc : meta.descEn || meta.desc,
        value: getCssVariableValue(meta, defaultToken),
        jsToken: jsTokenName,
      };
    });
  }, [category, customData, lang]);

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      bordered
      scroll={{ x: undefined }}
      rowKey="name"
      onRow={record => ({
        className: styles.variableRow,
      })}
    />
  );
};

export default ObTokenTable;
