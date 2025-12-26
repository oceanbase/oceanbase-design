import type { ReactNode } from 'react';
import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Flex, Popover } from 'antd';
import { CloseOutlined, DownOutlined, LoadingOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import Spin from '../../spin';
import theme from '../../theme';
import { useFilterContext } from '../FilterContext';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps } from '../type';

export interface FilterButtonRef {
  closePopover: () => void;
}

interface FilterButtonProps extends BaseFilterProps {
  children?: ReactNode;
  /** 清除回调 */
  onClear?: () => void;
  /** 下拉内容 */
  content?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否已选中值 */
  selected?: boolean;
  /** 额外内容，显示在标签旁边 */
  extra?: ReactNode;
  /** 选择后是否自动关闭弹出层 */
  autoCloseOnSelect?: boolean;
  /** 选择回调，当选择项时调用，如果 autoCloseOnSelect 为 true，调用后会自动关闭弹出层 */
  onSelect?: () => void;
  /** 是否显示下拉箭头图标，默认 true */
  showArrow?: boolean;
  /** 是否显示标签下方的分割线，默认 false */
  showLabelDivider?: boolean;
}

const FilterButton = forwardRef<FilterButtonRef, FilterButtonProps>(
  (
    {
      children,
      icon,
      label,
      bordered = true,
      onClear,
      content,
      footer,
      trigger = 'click',
      placement = 'bottomLeft',
      disabled = false,
      loading = false,
      selected = false,
      extra,
      autoCloseOnSelect = false,
      onSelect,
      showArrow = true,
      showLabelDivider = false,
      ...restProps
    },
    ref
  ) => {
    const { token } = theme.useToken();
    const { isWrapped } = useFilterContext();
    const [open, setOpen] = useState(false);
    const { wrapSSR, prefixCls } = useFilterStyle();
    const innerRef = useRef<HTMLDivElement>(null);

    // 从 restProps 中提取 onOpenChange，避免被 Popover 的 onOpenChange 覆盖
    const { onOpenChange: externalOnOpenChange, ...popoverProps } = restProps;

    const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClear?.();
      setOpen(false);
    };

    const closePopover = () => {
      setOpen(false);
    };

    // 通过 ref 暴露关闭方法
    useImperativeHandle(
      ref,
      () => ({
        closePopover,
      }),
      []
    );

    // 处理 popover 状态变化
    const handleOpenChange = (newOpen: boolean) => {
      if (!disabled) {
        setOpen(newOpen);
        // 调用外部传入的 onOpenChange 回调，让父组件能够实时监听状态变化
        externalOnOpenChange?.(newOpen);
      }
    };

    // 使用 useMemo 缓存 content，避免每次都重新创建
    const popoverContent = useMemo(
      () => (
        <>
          {!isWrapped && (
            <Flex
              justify="space-between"
              align="center"
              className={classNames(
                getFilterCls(prefixCls, 'button-label-wrapper'),
                showLabelDivider ? '' : getFilterCls(prefixCls, 'button-label-wrapper-no-border')
              )}
            >
              <div style={{ fontSize: token.fontSizeSM }}>{label}</div>
              <div>{extra}</div>
            </Flex>
          )}
          {content}
          {footer && (
            <div
              style={{
                padding: '8px 16px',
                borderTop: `1px solid ${token.colorFillSecondary}`,
              }}
            >
              {footer}
            </div>
          )}
        </>
      ),
      [content, footer, label, extra, isWrapped, prefixCls, showLabelDivider, token]
    );

    return wrapSSR(
      <Popover
        arrow={false}
        placement={placement}
        trigger={trigger}
        content={popoverContent}
        open={open && !disabled}
        onOpenChange={handleOpenChange}
        styles={{
          body: {
            padding: 0,
            maxWidth: 300,
            minWidth: 200,
          },
        }}
        {...popoverProps}
      >
        <div ref={innerRef}>
          <div
            className={classNames(
              getFilterCls(prefixCls, 'button'),
              bordered && getFilterCls(prefixCls, 'border'),
              open && getFilterCls(prefixCls, 'active'),
              disabled && getFilterCls(prefixCls, 'disabled'),
              selected && !isWrapped && getFilterCls(prefixCls, 'selected')
            )}
          >
            <Flex align="center" justify="space-between" style={{ width: '100%' }}>
              {icon && <div className={getFilterCls(prefixCls, 'button-prefix-icon')}>{icon}</div>}
              <Flex
                gap={8}
                align="center"
                flex={1}
                className={getFilterCls(prefixCls, 'text-ellipsis')}
              >
                {children}
              </Flex>
              <div className={getFilterCls(prefixCls, 'icon-wrapper')}>
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ fontSize: token.fontSizeSM }} spin />}
                  />
                ) : (
                  <>
                    {showArrow && (
                      <DownOutlined
                        className={selected ? getFilterCls(prefixCls, 'arrow-icon') : ''}
                      />
                    )}
                    {selected && (
                      <div
                        className={getFilterCls(prefixCls, 'clear-icon')}
                        onClick={e => {
                          if (!disabled) {
                            handleClearClick(e);
                          }
                        }}
                      >
                        <CloseOutlined />
                      </div>
                    )}
                  </>
                )}
              </div>
            </Flex>
          </div>
        </div>
      </Popover>
    );
  }
);

FilterButton.displayName = 'FilterButton';

export default FilterButton;
