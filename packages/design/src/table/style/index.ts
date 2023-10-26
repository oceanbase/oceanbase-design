import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TableToken = FullToken<'Table'>;

export const genTableStyle: GenerateStyle<TableToken> = (token: TableToken): CSSObject => {
  const {
    antCls,
    componentCls,
    colorTextBase,
    colorBgBase,
    colorTextSecondary,
    colorTextTertiary,
    colorFillQuaternary,
    colorPrimaryBg,
    colorPrimaryBgHover,
    colorLink,
    borderRadiusLG,
    colorBorderSecondary,
    paddingSM,
    padding,
    paddingLG,
    marginLG,
    marginXS,
    marginSM,
  } = token;
  const largeCellPadding = `${paddingSM}px ${padding}px`;
  return {
    // 表格通用样式
    [`${componentCls}-wrapper ${componentCls}`]: {
      color: colorTextBase,
      backgroundColor: colorBgBase,
      borderRadius: borderRadiusLG,
      // head 样式
      [`${componentCls}-thead > tr`]: {
        ['td, th']: {
          // 弱化列标题
          color: colorTextTertiary,
          fontWeight: 'normal',
          backgroundColor: colorBgBase,
        },
        [`td${componentCls}-row-expand-icon-cell`]: {
          backgroundColor: colorBgBase,
        },
        // 去掉排序列表头的灰色背景
        [`th${componentCls}-column-sort`]: {
          backgroundColor: colorBgBase,
        },
        [`${componentCls}-cell-scrollbar`]: {
          boxShadow: `0 1px 0 1px ${colorBgBase}`,
        },
      },
      // body 样式
      [`${componentCls}-tbody`]: {
        // 斑马纹样式
        [`tr:nth-child(2n + 1):not(${componentCls}-placeholder):not(${componentCls}-row-selected):not(${antCls}-descriptions-row) > td`]:
          {
            backgroundColor: colorBgBase,
          },
        [`tr:nth-child(2n):not(${componentCls}-placeholder):not(${componentCls}-row-selected):not(${componentCls}-expanded-row):not(${antCls}-descriptions-row) > td`]:
          {
            backgroundColor: colorFillQuaternary,
          },
        // hover 行样式
        [`tr:not(${componentCls}-placeholder):not(${componentCls}-expanded-row):not(${antCls}-descriptions-row):hover > td`]:
          {
            backgroundColor: `${colorPrimaryBgHover} !important`,
          },
        // 选中行样式
        [`tr${componentCls}-row-selected > td`]: {
          backgroundColor: colorPrimaryBg,
        },
        // 展开行样式
        [`${componentCls}-expanded-row > td`]: {
          padding: `${paddingSM}px ${paddingLG}px ${paddingSM}px ${
            padding + paddingLG
          }px !important`,
          backgroundColor: colorBgBase,
          // 除内嵌子表格外，设置其他内嵌元素样式
          [`& > *:not(${componentCls}-wrapper)`]: {
            marginTop: -marginSM,
            padding: largeCellPadding,
            backgroundColor: colorFillQuaternary,
            borderRadius: borderRadiusLG,
          },
        },
        // 嵌套子表格样式
        [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
          // 调整嵌套子表格的间距
          marginBlock: '0 !important',
          marginInline: '0 !important',
          // 设置嵌套子表格的单元格背景色
          [`${componentCls}-thead > tr > th`]: {
            backgroundColor: `${colorFillQuaternary} !important`,
          },
          [`${componentCls}-tbody ${componentCls}-row td`]: {
            backgroundColor: `${colorFillQuaternary} !important`,
          },
          // 设置最后一行左右两列的圆角
          [`${componentCls}-tbody > tr:last-child`]: {
            ['td:first-child, td:last-child']: {
              borderRadius: borderRadiusLG,
            },
          },
        },
      },
    },

    // 滚动表格样式
    // 由于滚动表格会在 tbody 下最前面多一个 tr 元素，因此需要设置相反的斑马条样式
    // .ant-table-scroll-horizontal: 水平滚动
    // .ant-table-fixed-header: 垂直滚动
    [`${componentCls}-wrapper ${componentCls}${componentCls}-scroll-horizontal, ${componentCls}-wrapper ${componentCls}${componentCls}-fixed-header`]:
      {
        [`${componentCls}-tbody`]: {
          // 斑马纹样式
          [`tr:nth-child(2n + 1):not(${componentCls}-placeholder):not(${componentCls}-row-selected):not(${antCls}-descriptions-row) > td`]:
            {
              backgroundColor: colorFillQuaternary,
            },
          [`tr:nth-child(2n):not(${componentCls}-placeholder):not(${componentCls}-row-selected):not(${componentCls}-expanded-row):not(${antCls}-descriptions-row) > td`]:
            {
              backgroundColor: colorBgBase,
            },
        },
      },

    // large 表格样式
    [`${componentCls}-wrapper`]: {
      [`${componentCls}:not(${componentCls}-middle):not(${componentCls}-small)`]: {
        [`${componentCls}-thead > tr`]: {
          ['td, th']: {
            padding: largeCellPadding,
          },
        },
      },
      [`${componentCls}-tbody`]: {
        [`tr:not(${componentCls}-measure-row) > td`]: {
          padding: largeCellPadding,
        },
      },
    },

    // 去掉非展开表格的边框
    [`${componentCls}-wrapper:not(${componentCls}-expandable)`]: {
      [`${componentCls}:not(${componentCls}-bordered)`]: {
        [`${componentCls}-tbody`]: {
          [`tr:not(${componentCls}-measure-row) > td`]: {
            border: 'none',
          },
        },
      },
    },

    // 可展开表格样式
    [`${componentCls}-wrapper${componentCls}-expandable`]: {
      [`${componentCls}`]: {
        [`${componentCls}-tbody`]: {
          // 去掉斑马纹
          [`tr:nth-child(2n):not(${componentCls}-placeholder):not(${componentCls}-row-selected):not(${componentCls}-expanded-row)`]:
            {
              ['& > td']: {
                backgroundColor: colorBgBase,
              },
              ['&:hover']: {
                td: {
                  backgroundColor: colorPrimaryBgHover,
                },
              },
            },
        },
      },
    },

    // 分页器样式
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-pagination`]: {
        [`&${antCls}-pagination`]: {
          padding: `${padding}px 0`,
          margin: '0 !important',
          borderTop: `1px solid ${colorBorderSecondary}`,
        },
        // 批量操作栏样式
        [`${componentCls}-batch-operation-bar`]: {
          position: 'absolute',
          left: 0,
          display: 'inline-block',
          marginRight: marginLG,
          [`${componentCls}-batch-operation-selection`]: {
            color: colorTextSecondary,
            fontWeight: 500,
            [`${componentCls}-batch-operation-selection-count`]: {
              margin: `0 ${marginXS}px`,
              color: colorLink,
            },
          },
        },
      },
      [`${componentCls}${componentCls}-bordered`]: {
        [`&+${componentCls}-pagination`]: {
          [`&${antCls}-pagination`]: {
            // Remove pagination borderTop for bordered Table
            borderTop: 'none',
          },
        },
      },
    },

    // 批量操作栏中的弹出层样式
    [`${antCls}-popover${componentCls}-batch-operation-selection-popover`]: {
      [`${antCls}-popover-inner`]: {
        padding: 0,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Table', token => {
    return [genTableStyle(token as TableToken)];
  });
  return useStyle(prefixCls);
};
