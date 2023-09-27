import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BasicLayoutToken = FullToken<any>;

export const genBasicLayoutStyle: GenerateStyle<BasicLayoutToken> = (
  token: BasicLayoutToken
): CSSObject => {
  const { 
    proComponentsCls,
    colorBgLayout,
    colorText,
    maxWidth,
    colorBorder,
    colorPrimaryBorder,
    colorPrimary,
   } = token;

   const prefix = 'ob-layout';

  return {
    // 弹出菜单样式
    [`${proComponentsCls}-menu-submenu-popup`]: {
      [`${proComponentsCls}-menu`]: {
        paddingLeft: '6px !important',
        backgroundColor: `${colorBgLayout} !important`,
        [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu`]: {
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          marginInline: 0,
          '&:not\(:last-child\):': {
            marginBottom: '8px !important',
          }
        },
        [`${proComponentsCls}-menu-item-active, ${proComponentsCls}-menu-submenu-active > & ${proComponentsCls}-menu-submenu-title`]: {
          color: 'colorText !important',
          fontWeight: 600,
          animation: 'activeGradientAnimation 0.1s',
          // .border-gradient(linear-gradient(to right, #E9EDF6, colorBgLayout), linear-gradient(90deg, #C6CDD9, colorBgLayout), 0.5px, solid, 8px 0 0 8px),
        },
    
        [`${proComponentsCls}-menu-item-selected`]: {
          color: `${colorPrimary} !important`,
          fontWeight: 600,
          animation: 'selectedGradientAnimation 0.1s',
          // .border-gradient(linear-gradient(to right, #E5EEFF, #F4F8FF), linear-gradient(90deg, @colorPrimaryBorder, colorBgLayout), 0.5px, solid, 8px 0 0 8px),
        },
        [`${proComponentsCls}-divider`]: {
          width: "'60%'",
          minWidth: '60%',
          margin: '0 0 8px 16px !important'
        },
      },
    },

    [`${prefix}-banner-wrapper`]: {
      position: 'fixed',
      top: 0,
      zIndex: 20,
      width: '100%'
    },
  

    [`${prefix}`]: {
      height: '100%',
      backgroundColor: colorBgLayout,
      transition: 'all 0.1s',
    
      [`${prefix}-content-layout`]: {
        maxWidth: maxWidth,
        // 居中对齐
        margin: '0 auto',
        [`${prefix}-sider`]: {
          position: 'fixed',
          zIndex: 10,
          padding: '16px 0 16px 16px',
          backgroundColor: colorBgLayout,
          transition: 'all 0.3s',
    
          [`${prefix}-sider-border`]: {
            position: 'relative',
            top: '-16px',
            width: 1,
            height: '100%',
            backgroundColor: '#e2e8f3',
            cursor: 'pointer',
            opacity: 0,
            // 左右两侧扩大热区
            '&::after': {
              position: 'absolute',
              top: 0,
              right: '-10px',
              bottom: 0,
              left: '-10px',
              content: '',
            },
            '&:hover': {
              opacity: 1,
              // 仅在 hover 时增加过渡动画，避免展开/收起时 border 和 collapse 没有及时消失、影响整体效果
              transition: 'opacity 0.3s',
              [`${prefix}-sider-collapse`]: {
                opacity: 1,
                transition: 'opacity 0.3s',
              }
            },
    
            [`${prefix}-sider-collapse`]: {
              position: 'relative',
              top: 245,
              right: 10,
              // 需要设置 z-index 以便叠加在分隔线上，否则点击的是分隔线的热区，无法触发 collapse 的点击事件
              zIndex: 1,
              width: 20,
              height: 42,
              lineHeight: 42,
              textAlign: 'center',
              backgroundColor: '#fff',
              border: `1px solid ${colorBorder}`,
              borderRadius: 10,
              cursor: 'pointer',
              opacity: 0,
              // 设置展开/收起按钮中的图标大小
              // .@{iconPrefixCls} {
              //   fontSize: 12,
              // }
            }
          },
    
          [`${prefix}-sider-wrapper`]: {
            display: 'flex',
            height: 'calc(100vh - 48px)',
            // 菜单通用样式
            [`${proComponentsCls}-menu`]: {
              backgroundColor: 'transparent',
              borderRight: 'none',
    
              [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu`]: {
                width: '100%',
                marginTop: 0,
                marginRight: 'auto',
                marginLeft: 'auto',
                color: colorText,
                backgroundColor: 'transparent',
                // .@{iconPrefixCls}`] {
                //   // 图标尺寸设为 18px，因为设计侧给到的图标内侧有间距，需要适当加大尺寸
                //   width: 18,
                //   height: 18,
                //   font-size: 18,
                // }
              },
              [`${proComponentsCls}-menu-submenu > ${proComponentsCls}-menu-submenu-title`]: {
                width: '100%',
                marginzBottom: '4px !important',
                marginInline: 0,
                marginBlock: 0,
              }
            },
            // 内嵌菜单样式
            [`${proComponentsCls}-menu-inline`]: {
              // 菜单项间距
              [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu`]: {
                '&:not\(:last-child\)': {
                  marginzBottom: 16,
                  // 子菜单展开时 marginzBottom 会变小，为了避免效果突兀，增加过渡效果
                  transition: 'marginzBottom 0.2s',
                }
              },
              [`${proComponentsCls}-menu-submenu-open`]: {
                '&:not\(:last-child\)': {
                  // 子菜单展开时，减小 marginzBottom
                  marginzBottom: 4,
                }
              },
              // 子菜单项间距
              [`${proComponentsCls}-menu-submenu`]: {
                [`${proComponentsCls}-menu-item:not(:last-child)`]: {
                  marginzBottom: 4,
                }
              },
              // 菜单项缩进
              [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu > ${proComponentsCls}-menu-submenu-title`]: {
                paddingLeft: '16px !important',
              },
              // 子菜单项缩进
              [`${proComponentsCls}-menu-sub`]: {
                [`${proComponentsCls}-menu-item`]: {
                  marginLeft: 16,
                  paddingLeft: '28px !important',
                }
              },
              // 菜单项激活样式
              [`${proComponentsCls}-menu-item-active, ${proComponentsCls}-menu-submenu-active > ${proComponentsCls}-menu-submenu-title`]: {
                color: `${colorText} !important`,
                fontWeight: 600,
                animation: 'activeGradientAnimation 0.1s',
                // .border-gradient(linear-gradient(to right, #E9EDF6, @colorBgLayout), linear-gradient(90deg, #C6CDD9, @colorBgLayout), 0.5px, solid, 8px 0 0 8px),
              },
              // 菜单项选中样式
              [`${proComponentsCls}-menu-item-selected`]: {
                color: `${colorPrimary} !important`,
                fontWeight: 600,
                animation: 'selectedGradientAnimation 0.5s',
                // .border-gradient(linear-gradient(to right, #E5EEFF, #F4F8FF), linear-gradient(90deg, @colorPrimaryBorder, @colorBgLayout), 0.5px, solid, 8px 0 0 8px),
                '&::after': {
                  // 去掉菜单项的选中标记
                  display: 'none',
                }
              },
              [`${proComponentsCls}-menu-submenu-selected > ${proComponentsCls}-menu-submenu-title`]: {
                color: `${colorPrimary} !important`,
              },
              [`${proComponentsCls}-divider`]: {
                margin: '0 0 16px 0',
              }
            },
    
            // 垂直菜单样式
            [`${proComponentsCls}-menu-vertical`]: {
              overflowX: 'hidden',
              overflowY: 'auto',
              borderRight: 'none',
    
              [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu`]: {
                '&:not\(:last-child\)': {
                  marginzBottom: 4,
                }
              },
    
              [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu > ${proComponentsCls}-menu-submenu-title`]: {
                width: 52,
                height: 52,
                padding: 0,
                lineHeight: 52,
                textAlign: 'center',
    
                [`${proComponentsCls}-menu-title-content`]: {
                  display: 'inline-block',
                  width: 40,
                  height: 40,
                  lineHeight: 40,
                  borderRadius: 8,
                },
    
                [`${proComponentsCls}-menu-submenu-arrow`]: {
                  display: 'none',
                }
              },
              [`${proComponentsCls}-menu-item-active, ${proComponentsCls}-menu-submenu-active > ${proComponentsCls}-menu-submenu-title`]: {
                [`${proComponentsCls}-menu-title-content`]: {
                  backgroundColor: '#e9edf6',
                  border: '0.5px solid #c6cdd9',
                }
              },
              [`${proComponentsCls}-menu-item-selected, ${proComponentsCls}-menu-submenu-selected > ${proComponentsCls}-menu-submenu-title`]: {
                [`${proComponentsCls}-menu-title-content`]: {
                  backgroundColor: '#e5eeff',
                  border: `0.5px solid ${colorPrimaryBorder}`,
                }
              }
            },
    
            [`${prefix}-sub-sider`]: {
              borderRight: '1px solid #e2e8f3',
              [`${proComponentsCls}-divider`]: {
                margin: '0 0 4px 0',
              }
            },
    
            [`${prefix}-sub-sider, ${prefix}-menu-collapsed`]: {
              width: 52,
              [`${proComponentsCls}-divider`]: {
                margin: '0 0 4px 0',
              }
            },
    
            [`${prefix}-sider-content`]: {
              display: 'flex',
              flex: 1,
              // 纵向排列
              flexDirection: 'column',
              // 纵向两端对齐
              justifyContent: 'space-between',
              height: '100%',
    
              [`${prefix}-sider-header`]: {
                paddingTop: 16,
              },
    
              [`${prefix}-menu-wrapper`]: {
                display: 'flex',
                flexDirection: 'column',
                // 保证垂直方向超出高度出现滚动
                flexGrow: 1,
                justifyContent: 'space-between',
                overflowX: 'hidden',
                overflowY: 'auto',
    
                [`${prefix}-menu`]: {
                  marginzBottom: 32,
                }
              }
            }
          }
        },
    
        [`${prefix}-sider-collapsed`]: {
          paddingLeft: 0,
        },
    
        [`${prefix}-sider-has-sub-sider`]: {
          padding: 0,
          // 包含子侧边栏的菜单不支持收起，直接隐藏侧边栏 border 和 collapse
          [`${prefix}-sider-border`]: {
            display: 'none',
            [`${prefix}-sider-collapse`]: {
              display: 'none',
            }
          },
          [`${proComponentsCls}-menu-inline`]: {
            paddingTop: 16,
            [`${proComponentsCls}-menu-item, ${proComponentsCls}-menu-submenu`]: {
              '&:not\(:last-child\)': {
                marginzBottom: '16px !important',
              }
            },
            [`${proComponentsCls}-divider`]: {
              width: '60%',
              minWidth: '60%',
              margin: '-8px 0 8px 16px !important',
            }
          },
          [`${proComponentsCls}-menu-vertical`]: {
            paddingTop: 10,
          },
          [`${prefix}-sider-content`]: {
            paddingLeft: 6,
          }
        },
    
        [`${prefix}-content`]: {
          backgroundColor: colorBgLayout,
          transition: 'all 0.3s',
        }
      }
    },

    // '@media (min-width: maxWidth)': {
    //   [`${proComponentsCls}-pro-footer-bar`]: {
    //     right: 'calc((100% - @maxWidth) / 2 + 24px)',
    //     width: 'calc(@maxWidth - 192px - 24px - 24px)',
    //     maxWidth: 'calc(@maxWidth - 192px - 24px - 24px)'
    //   }
    // },
    
    // 对于 Alert 类型的 banner，自动增加上间距
    // 对于其他类型的 banner，需要业务侧自行设置上间距
    [`${prefix}-with-banner`]: {
      marginTop: 38,
    },
    
    // '@media (min-width: maxWidth)': {
    //   [`${prefix}`]:  {
    //     [`${prefix}-content-layout`]: {
    //       [`${prefix}-sider`]: {
    //         paddingLeft: 0
    //       }
    //     }
    //   }
    // }
};
}

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('BasicLayout', token => {
    return [genBasicLayoutStyle(token as BasicLayoutToken)];
  });
  return useStyle(prefixCls);
};
