import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TableToken = FullToken<'Table'>;

export const genTableStyle = (token: TableToken): CSSObject => {
  const {
    antCls,
    componentCls,
    colorText,
    colorBgBase,
    colorTextSecondary,
    colorFillQuaternary,
    colorPrimaryBg,
    colorLink,
    borderRadiusLG,
    colorBorderSecondary,
    padding,
    marginLG,
    marginXS,
    calc,
  } = token;
  return {
    // 表格通用样式
    [`${componentCls}-wrapper ${componentCls}`]: {
      color: colorText,
      backgroundColor: colorBgBase,
      borderRadius: borderRadiusLG,
      [`${componentCls}-footer`]: {
        borderBottom: `1px solid ${colorBorderSecondary}`,
        borderRadius: 0,
      },
      // head 样式
      [`${componentCls}-thead > tr`]: {
        ['th']: {
          color: colorTextSecondary,
          fontWeight: token.fontWeight,
          backgroundColor: colorBgBase,
        },
        // 去掉排序列表头的灰色背景
        [`th${componentCls}-column-has-sorters`]: {
          backgroundColor: colorBgBase,
        },
        // 保留排序列表头分割线
        [`th${componentCls}-column-sort:before`]: {
          backgroundColor: `${colorBorderSecondary} !important`,
        },
        [`${componentCls}-cell-scrollbar`]: {
          boxShadow: `0 1px 0 1px ${colorBgBase}`,
        },
      },
      // body 样式
      [`${componentCls}-tbody`]: {
        [`${componentCls}-tbody-virtual-scrollbar ${componentCls}-tbody-virtual-scrollbar-thumb`]: {
          background: `${token.colorFillSecondary} !important`,
        },
        // expandRowByClick 行样式
        [`tr${componentCls}-expand-row-by-click`]: {
          cursor: 'pointer',
        },
        // 去掉可展开行在展开时的底部 border
        [`tr > td:has(${componentCls}-row-expand-icon-expanded)`]: {
          borderBottom: 'none',
          [`& ~ td`]: {
            borderBottom: 'none',
          },
        },
        // 为了避免行展开/收起时出现 border 动画，覆盖 antd 默认配置，仅设置背景色动画
        [`tr > td`]: {
          transition: `background ${token.motionDurationMid}`,
        },
        // empty style
        [`${componentCls}-placeholder td`]: {},
        [`${componentCls}-empty-wrapper`]: {
          minHeight: calc(360).sub(calc(token.paddingSM).mul(2).equal()).equal(),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // 嵌套子表格样式
        [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
          borderBottom: 'none',
          // 设置嵌套子表格的表头背景色
          [`${componentCls}-thead > tr > th`]: {
            backgroundColor: token.colorFillQuaternary,
          },
          // 去掉表头左右单元格的圆角
          [`${componentCls}-thead > tr:first-child > th:first-child`]: {
            borderRadius: 0,
          },
          [`${componentCls}-thead > tr:first-child > th:last-child`]: {
            borderRadius: 0,
          },
          // empty wrapper style
          [`${componentCls}-empty-wrapper`]: {
            minHeight: 'auto',
          },
        },
      },
    },

    // middle 表格样式
    [`${componentCls}-wrapper ${componentCls}${componentCls}-middle`]: {
      [`${componentCls}-tbody`]: {
        [`${componentCls}-empty-wrapper`]: {
          minHeight: calc(260).sub(calc(token.paddingXS).mul(2).equal()).equal(),
        },
      },
    },

    // small 表格样式
    [`${componentCls}-wrapper ${componentCls}${componentCls}-small`]: {
      [`${componentCls}-tbody`]: {
        [`${componentCls}-empty-wrapper`]: {
          minHeight: calc(160).sub(calc(token.paddingXXS).mul(2).equal()).equal(),
        },
      },
    },

    // 带边框的表格样式
    [`${componentCls}-wrapper ${componentCls}${componentCls}-bordered`]: {
      [`${componentCls}-footer`]: {
        borderRadius: `0px 0px ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}`,
      },
    },

    // 带内部边框的表格样式
    [`${componentCls}-wrapper${componentCls}-inner-bordered ${componentCls}-bordered`]: {
      [`${componentCls}-container`]: {
        borderInlineStart: 'none',
        borderTop: 'none',
        [`${componentCls}-thead > tr > th, ${componentCls}-tbody > tr > td`]: {
          ['&:last-child']: {
            borderInlineEnd: 'none',
          },
        },
      },
    },

    // 不带边框的表格样式
    [`${componentCls}-wrapper ${componentCls}:not(${componentCls}-bordered)`]: {
      // 单元格通用样式
      [`${componentCls}-thead, ${componentCls}-tbody`]: {
        ['td, th']: {
          [`&${componentCls}-row-expand-icon-cell`]: {
            // 设置 paddingRight 即可
            paddingRight: token.paddingXS,
          },
          // 紧跟在选择列或展开列后的第一列，左侧间距减小为 8px
          [`&${componentCls}-selection-column, &${componentCls}-row-expand-icon-cell`]: {
            [`& + td, & + th`]: {
              paddingLeft: token.paddingXS,
            },
          },
        },
      },
    },

    // 以下样式在 https://design.oceanbase.com/components/table#table-demo-rowspan 场景下还存在问题，先注释掉
    // 带边框、不带 footer、没有行列合并的表格样式
    // [`${componentCls}-wrapper:not(${componentCls}-has-footer):not(${componentCls}-has-on-cell) ${componentCls}${componentCls}-bordered`]:
    //   {
    //     // 表格容器设置圆角
    //     [`${componentCls}-container`]: {
    //       borderRadius: token.borderRadiusLG,
    //     },
    //     [`${componentCls}-tbody`]: {
    //       // 最后一行左右单元格增加圆角
    //       [`tr:last-child >*:first-child`]: {
    //         borderEndStartRadius: token.borderRadiusLG,
    //       },
    //       [`tr:last-child >*:last-child`]: {
    //         borderEndEndRadius: token.borderRadiusLG,
    //       },
    //     },
    //   },

    // 非可展开表格、不带 footer 表格、非空表格、不带边框表格: 去掉底部圆角
    [`${componentCls}-wrapper:not(${componentCls}-expandable):not(${componentCls}-has-footer) ${componentCls}:not(${componentCls}-bordered):not(${componentCls}-empty)`]:
      {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },

    // 可展开表格样式
    [`${componentCls}-wrapper${componentCls}-expandable`]: {
      [`${componentCls}`]: {
        [`${componentCls}-tbody`]: {
          [`${componentCls}-expanded-row > td`]: {
            // 除内嵌子表格外，设置其他内嵌元素样式
            [`& > *:not(${componentCls}-wrapper):not(${componentCls}-expanded-row-fixed)`]: {
              marginLeft: calc(token.marginXL).add(calc(token.lineWidth).mul(2).equal()).equal(),
            },
            [`& > *${componentCls}-expanded-row-fixed`]: {
              paddingLeft: calc(token.marginXL)
                .add(calc(token.lineWidth).mul(2).equal())
                .add(token.padding)
                .equal(),
            },
          },
          // 嵌套子表格和父表格第一列对齐
          [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
            marginLeft: calc(token.margin).add(calc(token.lineWidth).mul(2).equal()).equal(),
          },
        },
      },
      [`${componentCls}-middle, ${componentCls}-small`]: {
        [`${componentCls}-tbody`]: {
          // 嵌套子表格和父表格第一列对齐
          [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
            marginLeft: calc(token.margin)
              .add(calc(token.lineWidth).mul(2).equal())
              .add(token.margin)
              .equal(),
          },
        },
      },
    },

    // 可展开表格 + 可选择表格样式
    [`${componentCls}-wrapper${componentCls}-expandable${componentCls}-selectable`]: {
      [`${componentCls}`]: {
        [`${componentCls}-tbody`]: {
          [`${componentCls}-expanded-row > td`]: {
            // 除内嵌子表格外，设置其他内嵌元素样式
            [`& > *:not(${componentCls}-wrapper):not(${componentCls}-expanded-row-fixed)`]: {
              marginLeft: calc(token.marginXL)
                .add(token.marginXL)
                .add(calc(token.lineWidth).mul(2).equal())
                .equal(),
            },
            [`& > *${componentCls}-expanded-row-fixed`]: {
              paddingLeft: calc(token.marginXL)
                .add(token.marginXL)
                .add(calc(token.lineWidth).mul(2).equal())
                .add(token.padding)
                .equal(),
            },
          },
          // 嵌套子表格和父表格第一列对齐
          [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
            marginLeft: calc(token.margin)
              .add(token.marginXL)
              .add(calc(token.lineWidth).mul(2).equal())
              .equal(),
          },
        },
      },
      [`${componentCls}-middle, ${componentCls}-small`]: {
        [`${componentCls}-tbody`]: {
          // 嵌套子表格和父表格第一列对齐
          [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
            marginLeft: calc(token.margin)
              .add(token.marginXL)
              .add(calc(token.lineWidth).mul(2).equal())
              .add(token.margin)
              .equal(),
          },
        },
      },
    },

    // loading style
    [`${componentCls}-wrapper ${antCls}-spin-blur`]: {
      [`${componentCls}-tbody`]: {
        [`${componentCls}-placeholder`]: {
          // hide empty when Table loading
          visibility: 'hidden',
        },
      },
    },

    // 分页器样式
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-pagination`]: {
        [`&${antCls}-pagination`]: {
          padding: `${unit(padding)} 0`,
          margin: '0 !important',
        },
        // 批量操作栏样式
        [`${componentCls}-batch-operation-bar`]: {
          position: 'absolute',
          left: 0,
          display: 'inline-block',
          marginRight: marginLG,
          [`${componentCls}-batch-operation-selection`]: {
            color: colorTextSecondary,
            fontWeight: token.fontWeightStrong,
            [`${componentCls}-batch-operation-selection-count`]: {
              margin: `0 ${unit(marginXS)}`,
              color: colorLink,
            },
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

    // Popover、Tooltip 等弹出层中的表格空状态高度设为自动，避免高度过大撑高弹出层
    [`${antCls}-popover, ${antCls}-tooltip`]: {
      [`${componentCls} ${componentCls}-tbody`]: {
        [`${componentCls}-empty-wrapper`]: {
          minHeight: 'auto',
        },
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
