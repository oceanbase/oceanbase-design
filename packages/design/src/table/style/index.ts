import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type TableToken = FullToken<'Table'>;

const genSmallBtnStyle = (token: TableToken): CSSObject => {
  const { antCls } = token;
  return {
    // button is small size by default
    [`${antCls}-btn:not(${antCls}-btn-sm):not(${antCls}-btn-lg)`]: {
      height: token.controlHeightSM,
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      [`&:not(${antCls}-btn-icon-only):not(${antCls}-btn-circle)`]: {
        paddingInline: token.paddingXS,
      },
      [`&${antCls}-btn-icon-only`]: {
        width: token.controlHeightSM,
      },
      [`&${antCls}-btn-circle`]: {
        minWidth: token.controlHeightSM,
      },
    },
  };
};

export const genTableStyle = (token: TableToken): CSSObject => {
  const {
    antCls,
    componentCls,
    iconCls,
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
      // to match fontSizeSM lineHeight
      lineHeight: token.lineHeightSM,
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
          [iconCls]: {
            fontSize: token.fontSize,
            color: token.colorIcon,
          },
        },
        [`${componentCls}-column-title`]: {
          flex: 'initial',
        },
        [`${componentCls}-filter-column`]: {
          justifyContent: 'flex-start',
        },
        // 去掉排序列表头的灰色背景
        [`th${componentCls}-column-has-sorters`]: {
          backgroundColor: colorBgBase,
        },
        [`${componentCls}-column-sorters`]: {
          justifyContent: 'flex-start',
          backgroundColor: colorBgBase,
          [`&:hover ${componentCls}-column-sorter`]: {
            [iconCls]: {
              color: token.colorIconHover,
            },
          },
        },
        [`${componentCls}-filter-trigger`]: {
          color: token.colorIcon,
          [`&:hover`]: {
            [iconCls]: {
              color: token.colorIconHover,
            },
          },
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
        // for custom expand icon
        [`${componentCls}-row-indent+${iconCls}`]: {
          marginInlineEnd: token.marginXS,
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
          fontWeight: token.fontWeight,
          transition: `background ${token.motionDurationMid}`,
          a: {
            fontWeight: token.fontWeightStrong,
            // work for ProTable link style
            fontSize: token.fontSizeSM,
          },
        },
        ...genSmallBtnStyle(token),
        // empty style
        [`${componentCls}-placeholder td`]: {},
        [`${componentCls}-empty-wrapper`]: {
          minHeight: calc(360).sub(calc(token.paddingXS).mul(2).equal()).equal(),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // 嵌套子表格样式
        [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
          borderBottom: 'none',
          // 设置嵌套子表格的背景色
          [`${componentCls}-thead > tr > th`]: {
            backgroundColor: token.colorFillQuaternary,
          },
          [`${componentCls}-tbody > tr > td`]: {
            backgroundColor: token.colorFillQuaternary,
          },
          [`${componentCls}-tbody > tr:hover > td`]: {
            backgroundColor: token.colorFillTertiary,
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

    // 表头分组的表格（thead 中有多个 tr），去掉 tbody 的纵向分割线，保留最后一列的纵向分割线
    // 通过 Table 组件上的 ant-table-thead-multiple-rows 类选择，避免使用 :has() 在部分环境下产生无效选择器
    [`${componentCls}-wrapper${componentCls}-thead-multiple-rows ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody > tr > td:not(${componentCls}-cell-last-column)`]: {
          borderInlineEnd: 'none',
        },
      },

    // 带内部边框的表格样式
    [`${componentCls}-wrapper${componentCls}-inner-bordered ${componentCls}-bordered`]: {
      [`${componentCls}-container`]: {
        borderInlineStart: 'none',
        borderTop: 'none',
        // 使用 last-column 类名选择视觉上的最后一列，而不是 :last-child
        // 因为 :last-child 在有 rowspan 时会选中 DOM 中的最后一个单元格，而不是视觉上的最后一列
        [`${componentCls}-thead > tr > th${componentCls}-cell-last-column,
          ${componentCls}-tbody > tr > td${componentCls}-cell-last-column`]: {
          borderInlineEnd: 'none',
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

    // 带边框（非内部边框）、不带 footer 的表格样式
    [`${componentCls}-wrapper:not(${componentCls}-has-footer):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        // 表格容器设置圆角
        [`${componentCls}-container`]: {
          borderRadius: token.borderRadiusLG,
        },
      },

    [`${componentCls}-wrapper:not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-container`]: {
          // ::after 伪元素用于固定列时的阴影效果，表格带边框时去掉左上角和右上角的圆角
          ['&::after']: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: token.borderRadius,
          },
          [`${componentCls}-content`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: token.borderRadius,
          },
        },
      },

    // 带边框（非内部边框）、不带 footer 的虚拟滚动表格样式
    [`${componentCls}-wrapper${componentCls}-virtual:not(${componentCls}-has-footer):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        // 虚拟滚动容器设置底部圆角和边框
        [`${componentCls}-tbody-virtual-holder`]: {
          borderEndStartRadius: token.borderRadiusLG,
          borderEndEndRadius: token.borderRadiusLG,
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
        },
        [`${componentCls}-tbody-virtual::after`]: {
          borderBottom: 'none',
        },
      },

    // 非虚拟滚动、带边框（非内部边框）、不带 footer、第一列和最后一列都没有 rowSpan 覆盖最后一行的表格样式
    [`${componentCls}-wrapper:not(${componentCls}-has-footer):not(${componentCls}-has-first-column-rowspan):not(${componentCls}-has-last-column-rowspan):not(${componentCls}-virtual):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody`]: {
          // 最后一行左下角单元格增加圆角
          [`tr:last-child > *:first-child`]: {
            borderEndStartRadius: token.borderRadiusLG,
          },
          // 最后一行右下角单元格增加圆角
          [`tr:last-child > *:last-child`]: {
            borderEndEndRadius: token.borderRadiusLG,
          },
        },
      },

    // 非虚拟滚动、带边框（非内部边框）、不带 footer、第一列有 rowSpan 覆盖最后一行的表格样式
    // 通过 rowspan 属性检测延伸到最后一行的单元格，设置左下角圆角
    [`${componentCls}-wrapper${componentCls}-has-first-column-rowspan:not(${componentCls}-has-footer):not(${componentCls}-virtual):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody`]: {
          // 有 rowspan 且延伸到最后一行的第一列单元格，设置左下角圆角
          // 覆盖 rowspan 2-10 的常见场景
          [`tr:nth-last-child(2) > td[rowspan="2"]:first-child,
            tr:nth-last-child(3) > td[rowspan="3"]:first-child,
            tr:nth-last-child(4) > td[rowspan="4"]:first-child,
            tr:nth-last-child(5) > td[rowspan="5"]:first-child,
            tr:nth-last-child(6) > td[rowspan="6"]:first-child,
            tr:nth-last-child(7) > td[rowspan="7"]:first-child,
            tr:nth-last-child(8) > td[rowspan="8"]:first-child,
            tr:nth-last-child(9) > td[rowspan="9"]:first-child,
            tr:nth-last-child(10) > td[rowspan="10"]:first-child,
            tr:last-child > td[rowspan]:first-child`]: {
            borderEndStartRadius: token.borderRadiusLG,
          },
        },
      },

    // 非虚拟滚动、带边框（非内部边框）、不带 footer、最后一列有 rowSpan 覆盖最后一行的表格样式
    // 通过 rowspan 属性检测延伸到最后一行的单元格，设置右下角圆角
    [`${componentCls}-wrapper${componentCls}-has-last-column-rowspan:not(${componentCls}-has-footer):not(${componentCls}-virtual):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody`]: {
          // 有 rowspan 且延伸到最后一行的最后一列单元格，设置右下角圆角
          // 覆盖 rowspan 2-10 的常见场景
          [`tr:nth-last-child(2) > td[rowspan="2"]${componentCls}-cell-last-column,
            tr:nth-last-child(3) > td[rowspan="3"]${componentCls}-cell-last-column,
            tr:nth-last-child(4) > td[rowspan="4"]${componentCls}-cell-last-column,
            tr:nth-last-child(5) > td[rowspan="5"]${componentCls}-cell-last-column,
            tr:nth-last-child(6) > td[rowspan="6"]${componentCls}-cell-last-column,
            tr:nth-last-child(7) > td[rowspan="7"]${componentCls}-cell-last-column,
            tr:nth-last-child(8) > td[rowspan="8"]${componentCls}-cell-last-column,
            tr:nth-last-child(9) > td[rowspan="9"]${componentCls}-cell-last-column,
            tr:nth-last-child(10) > td[rowspan="10"]${componentCls}-cell-last-column,
            tr:last-child > td[rowspan]${componentCls}-cell-last-column`]: {
            borderEndEndRadius: token.borderRadiusLG,
          },
        },
      },

    // 非虚拟滚动、带边框（非内部边框）、不带 footer、最后一列没有 rowSpan 但第一列有的表格样式
    [`${componentCls}-wrapper${componentCls}-has-first-column-rowspan:not(${componentCls}-has-last-column-rowspan):not(${componentCls}-has-footer):not(${componentCls}-virtual):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody`]: {
          // 最后一行右下角单元格增加圆角
          [`tr:last-child > td${componentCls}-cell-last-column`]: {
            borderEndEndRadius: token.borderRadiusLG,
          },
        },
      },

    // 非虚拟滚动、带边框（非内部边框）、不带 footer、第一列没有 rowSpan 但最后一列有的表格样式
    [`${componentCls}-wrapper${componentCls}-has-last-column-rowspan:not(${componentCls}-has-first-column-rowspan):not(${componentCls}-has-footer):not(${componentCls}-virtual):not(${componentCls}-inner-bordered) ${componentCls}${componentCls}-bordered`]:
      {
        [`${componentCls}-tbody`]: {
          // 最后一行左下角单元格增加圆角
          [`tr:last-child > *:first-child`]: {
            borderEndStartRadius: token.borderRadiusLG,
          },
        },
      },

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
              margin: `-${unit(token.marginXS)} -${unit(token.margin)}`,
            },
          },
          // 嵌套子表格和父表格第一列对齐
          [`tr > td > ${componentCls}-wrapper:only-child ${componentCls}`]: {
            marginLeft: calc(token.margin).add(calc(token.lineWidth).mul(2).equal()).equal(),
          },
          [`tr > td > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child ${componentCls}`]:
            {
              marginLeft: -token.padding,
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
          fontSize: token.fontSizeSM,
          padding: `${unit(token.paddingSM)} 0`,
          margin: 0,
          // 带边框和带内部边框的 Table，分页器右侧间距设为 token.marginLG
          [`${componentCls}-wrapper${componentCls}-has-bordered &`]: {
            marginInlineEnd: marginLG,
          },
          [`${antCls}-pagination-item, ${antCls}-pagination-total-text, ${antCls}-pagination-prev, ${antCls}-pagination-next`]:
            {
              height: token.controlHeightSM,
              minWidth: token.controlHeightSM,
              lineHeight: unit(
                calc(token.controlHeightSM).sub(calc(token.lineWidth).mul(2)).equal()
              ),
            },
          [`${antCls}-pagination-options ${antCls}-select-single`]: {
            height: token.controlHeightSM,
            [`${antCls}-select-selector`]: {
              fontSize: token.fontSizeSM,
              paddingInline: calc(token.paddingXS).sub(token.lineWidth).equal(),
            },
          },
        },
        // 批量操作栏样式
        [`${componentCls}-batch-operation-bar`]: {
          position: 'absolute',
          left: 0,
          display: 'inline-block',
          marginRight: marginLG,
          [`${componentCls}-batch-operation-selection`]: {},
          ...genSmallBtnStyle(token),
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

export default genStyleHooks('Table', token => {
  return [genTableStyle(token as TableToken)];
});
