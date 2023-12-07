import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BasicLayoutToken = FullToken<any>;

export const genBasicLayoutStyle: GenerateStyle<BasicLayoutToken> = (
  token: BasicLayoutToken
): CSSObject => {
  const {
    antCls,
    iconCls,
    componentCls,
    proComponentsCls,
    colorBgLayout,
    colorText,
    colorBorder,
    colorPrimaryBorder,
    colorPrimary,
    motionDurationSlow,
  } = token;
  const maxWidth = '8192px';

  const siderWidthList = [0, 52, 52 * 2, 192, 208];

  const footerBarStyle: CSSObject = {};
  siderWidthList.forEach(width => {
    footerBarStyle[`${componentCls}${componentCls}-sider-${width}`] = {
      [`${proComponentsCls}-footer-bar`]: {
        // footer bar width adapt to sider width of BasicLayout
        width: width === 0 ? '100%' : `calc(100% - ${width}px - 24px)`,
        transition: `width ${motionDurationSlow}`,
      },
    };
  });

  return {
    [`${componentCls}-banner-wrapper`]: {
      position: 'fixed',
      top: 0,
      zIndex: 20,
      width: '100%',
    },

    // 对于 Alert 类型的 banner，自动增加上间距
    // 对于其他类型的 banner，需要业务侧自行设置上间距
    [`${componentCls}-with-banner`]: {
      marginTop: '38px',
    },

    ...footerBarStyle,

    [`${componentCls}`]: {
      height: '100%',
      backgroundColor: colorBgLayout,
      transition: 'all 0.1s',
      // Set style of PageContainer in BasicLayout
      [`${proComponentsCls}-page-container`]: {
        // 48px is the height of BasicLayout header
        minHeight: 'calc(100vh - 48px)',
      },

      [`${componentCls}-content-layout`]: {
        maxWidth: maxWidth,
        // 居中对齐
        margin: '0 auto',
        [`${componentCls}-sider`]: {
          position: 'fixed',
          zIndex: 10,
          padding: '16px 0 16px 16px',
          backgroundColor: colorBgLayout,
          transition: 'all 0.3s',

          [`${componentCls}-sider-border`]: {
            position: 'relative',
            top: '-16px',
            width: 1,
            height: '100%',
            backgroundColor: '#e2e8f3',
            cursor: 'pointer',
            opacity: 0,
            // 左右两侧扩大热区
            ['&::after']: {
              position: 'absolute',
              top: 0,
              right: '-10px',
              bottom: 0,
              left: '-10px',
              content: '""',
            },
            '&:hover': {
              opacity: 1,
              // 仅在 hover 时增加过渡动画，避免展开/收起时 border 和 collapse 没有及时消失、影响整体效果
              transition: 'opacity 0.3s',
              [`${componentCls}-sider-collapse`]: {
                opacity: 1,
                transition: 'opacity 0.3s',
              },
            },

            [`${componentCls}-sider-collapse`]: {
              position: 'relative',
              top: '245px',
              right: 10,
              // 需要设置 z-index 以便叠加在分隔线上，否则点击的是分隔线的热区，无法触发 collapse 的点击事件
              zIndex: 1,
              width: '20px',
              height: '42px',
              lineHeight: '42px',
              textAlign: 'center',
              backgroundColor: '#fff',
              border: `1px solid ${colorBorder}`,
              borderRadius: '10px',
              cursor: 'pointer',
              opacity: 0,
              // 设置展开/收起按钮中的图标大小
              [iconCls]: {
                fontSize: 'px',
                display: 'block',
                lineHeight: '42px',
              },
            },
          },

          [`${componentCls}-sider-wrapper`]: {
            display: 'flex',
            height: 'calc(100vh - 48px)',

            // 菜单通用样式
            [`${antCls}-menu`]: {
              backgroundColor: 'transparent',
              borderRight: 'none',

              [`${antCls}-menu-item`]: {
                width: '100%',
                marginTop: 0,
                marginRight: 'auto',
                marginLeft: 'auto',
                color: colorText,
                backgroundColor: 'transparent',
                [iconCls]: {
                  // 图标尺寸设为 18px，因为设计侧给到的图标内侧有间距，需要适当加大尺寸
                  width: '18px',
                  height: '18px',
                  fontSize: '18px',
                },
              },
              [`${antCls}-menu-submenu`]: {
                width: '100%',
                marginTop: 0,
                marginRight: 'auto',
                marginLeft: 'auto',
                color: colorText,
                backgroundColor: 'transparent',
                [iconCls]: {
                  // 图标尺寸设为 18px，因为设计侧给到的图标内侧有间距，需要适当加大尺寸
                  width: '18px',
                  height: '18px',
                  fontSize: '18px',
                },
              },
              [`${antCls}-menu-submenu > ${antCls}-menu-submenu-title`]: {
                width: '100%',
                marginBottom: '4px !important',
                marginInline: 0,
                marginBlock: 0,
              },
            },
            // 内嵌菜单样式
            [`${antCls}-menu-inline`]: {
              // 菜单项间距
              [`${antCls}-menu-item, ${antCls}-menu-submenu`]: {
                '&:not(:last-child)': {
                  marginBottom: '16px',
                  // 子菜单展开时 marginBottom 会变小，为了避免效果突兀，增加过渡效果
                  transition: 'marginBottom 0.2s',
                },
              },
              [`${antCls}-menu-submenu-open`]: {
                '&:not(:last-childantCls)': {
                  // 子菜单展开时，减小 marginBottom
                  marginBottom: 4,
                },
              },
              // 子菜单项间距
              [`${antCls}-menu-submenu`]: {
                [`${antCls}-menu-item:not(:last-child)`]: {
                  marginBottom: 4,
                },
              },
              // 菜单项缩进
              [`${antCls}-menu-item, ${antCls}-menu-submenu > ${antCls}-menu-submenu-title`]: {
                paddingLeft: '16px !important',
                [`${antCls}-menu-title-content`]: {
                  width: '108px',
                },
              },
              // 子菜单项缩进
              [`${antCls}-menu-sub`]: {
                [`${antCls}-menu-item`]: {
                  marginLeft: '16px',
                  paddingLeft: '28px !important',
                },
              },
              // 菜单项激活样式
              [`${antCls}-menu-item-active, ${antCls}-menu-submenu-active > ${antCls}-menu-submenu-title`]:
                {
                  color: `${colorText} !important`,
                  fontWeight: 600,
                  animation: 'activeGradientAnimation 0.1s',
                  // .border-gradient(linear-gradient(to right, #E9EDF6, @colorBgLayout), linear-gradient(90deg, #C6CDD9, @colorBgLayout), 0.5px, solid, 8px 0 0 8px),
                  backgroundImage: `linear-gradient(to right,#E9EDF6, ${colorBgLayout}),linear-gradient(90deg,#C6CDD9,${colorBgLayout})`,
                  backgroundClip: 'padding-box,border-box',
                  backgroundOrigin: 'padding-box,border-box',
                  border: '.5px solid transparent',
                  borderRadius: '8px 0 0 8px',
                  transition: 'border-width .3s',
                },
              // 菜单项选中样式
              [`${antCls}-menu-item-selected`]: {
                color: `${colorPrimary} !important`,
                fontWeight: 600,
                animation: 'selectedGradientAnimation 0.5s',
                // .border-gradient(linear-gradient(to right, #E5EEFF, #F4F8FF), linear-gradient(90deg, @colorPrimaryBorder, @colorBgLayout), 0.5px, solid, 8px 0 0 8px),
                backgroundImage: `linear-gradient(to right,#E5EEFF,#F4F8FF),linear-gradient(90deg,${colorPrimaryBorder},${colorBgLayout})`,
                backgroundClip: 'padding-box,border-box',
                backgroundOrigin: 'padding-box,border-box',
                border: '.5px solid transparent',
                borderRadius: '8px 0 0 8px',
                transition: 'border-width .3s',
                '&::after': {
                  // content: '""',
                  // 去掉菜单项的选中标记
                  display: 'none',
                },
              },
              [`${antCls}-menu-submenu-selected > ${antCls}-menu-submenu-title`]: {
                color: `${colorPrimary} !important`,
              },
              [`${antCls}-divider`]: {
                margin: '0 0 16px 0',
              },
            },

            // 垂直菜单样式
            [`${antCls}-menu-vertical`]: {
              overflowX: 'hidden',
              overflowY: 'auto',
              borderRight: 'none',

              [`${antCls}-menu-item, ${antCls}-menu-submenu`]: {
                '&:not(:last-child)': {
                  marginBottom: 4,
                },
              },

              [`${antCls}-menu-item, ${antCls}-menu-submenu > ${antCls}-menu-submenu-title`]: {
                width: '52px',
                height: '52px',
                padding: 0,
                lineHeight: '52px',
                textAlign: 'center',

                [`${antCls}-menu-title-content`]: {
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  lineHeight: '40px',
                  borderRadius: '8px',
                },

                [`${antCls}-menu-submenu-arrow`]: {
                  display: 'none',
                },
              },
              [`${antCls}-menu-item-active, ${antCls}-menu-submenu-active > ${antCls}-menu-submenu-title`]:
                {
                  [`${antCls}-menu-title-content`]: {
                    backgroundColor: '#e9edf6',
                    border: '0.5px solid #c6cdd9',
                  },
                },
              [`${antCls}-menu-item-selected, ${antCls}-menu-submenu-selected > ${antCls}-menu-submenu-title`]:
                {
                  [`${antCls}-menu-title-content`]: {
                    backgroundColor: '#e5eeff',
                    border: `0.5px solid ${colorPrimaryBorder}`,
                  },
                },
            },

            [`${componentCls}-sub-sider`]: {
              borderRight: '1px solid #e2e8f3',
              [`${antCls}-divider`]: {
                margin: '0 0 4px 0',
              },
            },

            [`${componentCls}-sub-sider, ${componentCls}-menu-collapsed`]: {
              width: '52px',
              [`${antCls}-divider`]: {
                margin: '0 0 4px 0',
              },
            },

            [`${componentCls}-sider-content`]: {
              display: 'flex',
              flex: 1,
              // 纵向排列
              flexDirection: 'column',
              // 纵向两端对齐
              justifyContent: 'space-between',
              height: '100%',

              [`${componentCls}-sider-header`]: {
                paddingTop: '16px',
              },

              [`${componentCls}-menu-wrapper`]: {
                display: 'flex',
                flexDirection: 'column',
                // 保证垂直方向超出高度出现滚动
                flexGrow: 1,
                justifyContent: 'space-between',
                overflowX: 'hidden',
                overflowY: 'auto',

                [`${componentCls}-menu`]: {
                  backgroundColor: 'transparent',
                  borderRight: 'none',
                  marginBottom: '32px',
                },
              },
            },
          },
        },

        [`${componentCls}-sider-collapsed`]: {
          paddingLeft: 0,
        },

        [`${componentCls}-sider-has-sub-sider`]: {
          padding: 0,
          // 包含子侧边栏的菜单不支持收起，直接隐藏侧边栏 border 和 collapse
          [`${componentCls}-sider-border`]: {
            display: 'none',
            [`${componentCls}-sider-collapse`]: {
              display: 'none',
            },
          },
          [`${antCls}-menu-inline`]: {
            paddingTop: '16px',
            [`${antCls}-menu-item, ${antCls}-menu-submenu`]: {
              '&:not(:last-child)': {
                marginBottom: '16px !important',
              },
            },
            [`${antCls}-divider`]: {
              width: '60%',
              minWidth: '60%',
              margin: '-8px 0 8px 16px !important',
            },
          },
          [`${antCls}-menu-vertical`]: {
            paddingTop: '10px',
          },
          [`${componentCls}-sider-content`]: {
            paddingLeft: '6px',
          },
        },

        [`${componentCls}-content`]: {
          backgroundColor: colorBgLayout,
          transition: 'all 0.3s',
        },
      },
    },

    [`@media (min-width: ${maxWidth})`]: {
      [`${componentCls}`]: {
        [`${componentCls}-content-layout`]: {
          [`${componentCls}-sider`]: {
            paddingLeft: 0,
          },
        },
      },
      [`${proComponentsCls}-footer-bar`]: {
        right: `calc((100% - ${maxWidth}) / 2 + 24px)`,
        width: `calc(${maxWidth} - 192px - 24px - 24px)`,
        maxWidth: `calc(${maxWidth} - 192px - 24px - 24px)`,
      },
    },

    // 弹出菜单样式
    [`${antCls}-menu-submenu-popup`]: {
      [`${antCls}-menu`]: {
        paddingLeft: '6px !important',
        backgroundColor: `${colorBgLayout} !important`,
        [`${antCls}-menu-item`]: {
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          marginInline: 0,
          '&:not(:last-child):': {
            marginBottom: '8px !important',
          },
        },
        [`${antCls}-menu-submenu`]: {
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          marginInline: 0,
          '&:not(:last-child):': {
            marginBottom: '8px !important',
          },
        },
        [`${antCls}-menu-item-active`]: {
          color: 'colorText !important',
          fontWeight: 600,
          animation: 'activeGradientAnimation 0.1s',
          // .border-gradient(linear-gradient(to right, #E9EDF6, colorBgLayout), linear-gradient(90deg, #C6CDD9, colorBgLayout), 0.5px, solid, 8px 0 0 8px),
          backgroundImage: `linear-gradient(to right, #E9EDF6, ${colorBgLayout}), linear-gradient(90deg, #C6CDD9, ${colorBgLayout})`,
          backgroundClip: 'padding-box,border-box',
          backgroundOrigin: 'padding-box,border-box',
          border: '.5px solid transparent',
          borderRadius: '8px 0 0 8px',
          transition: 'border-width .3s',
        },
        [`${antCls}-menu-submenu-active > & ${antCls}-menu-submenu-title`]: {
          color: 'colorText !important',
          fontWeight: 600,
          animation: 'activeGradientAnimation 0.1s',
          // .border-gradient(linear-gradient(to right, #E9EDF6, colorBgLayout), linear-gradient(90deg, #C6CDD9, colorBgLayout), 0.5px, solid, 8px 0 0 8px),
          backgroundImage: `linear-gradient(to right, #E9EDF6, ${colorBgLayout}), linear-gradient(90deg, #C6CDD9, ${colorBgLayout})`,
          backgroundClip: 'padding-box,border-box',
          backgroundOrigin: 'padding-box,border-box',
          border: '.5px solid transparent',
          borderRadius: '8px 0 0 8px',
          transition: 'border-width .3s',
        },

        [`${antCls}-menu-item-selected`]: {
          color: `${colorPrimary} !important`,
          fontWeight: 600,
          animation: 'selectedGradientAnimation 0.1s',
          // .border-gradient(linear-gradient(to right, #E5EEFF, #F4F8FF), linear-gradient(90deg, @colorPrimaryBorder, colorBgLayout), 0.5px, solid, 8px 0 0 8px),
          backgroundImage: `linear-gradient(to right,#E5EEFF,#F4F8FF),linear-gradient(90deg,${colorPrimaryBorder},${colorBgLayout})`,
          backgroundClip: 'padding-box,border-box',
          backgroundOrigin: 'padding-box,border-box',
          border: '.5px solid transparent',
          borderRadius: '8px 0 0 8px',
          transition: 'border-width .3s',
        },
        [`${antCls}-divider`]: {
          width: "'60%'",
          minWidth: '60%',
          margin: '0 0 8px 16px !important',
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('BasicLayout', token => {
    return [genBasicLayoutStyle(token as BasicLayoutToken)];
  });
  return useStyle(prefixCls);
};
