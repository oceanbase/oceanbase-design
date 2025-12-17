import { Flex, Popover, Spin, token } from '@oceanbase/design';
import { CloseOutlined, DownOutlined, LoadingOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { forwardRef, useMemo, useState } from 'react';
import { useFilterContext } from '../FilterContext';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps } from '../type';

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
}

const FilterButton = forwardRef<HTMLDivElement, FilterButtonProps>(
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
      ...restProps
    },
    ref
  ) => {
    const { isWrapped } = useFilterContext();
    const [open, setOpen] = useState(false);
    const { wrapSSR, prefixCls } = useFilterStyle();

    const handleClearClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClear?.();
      setOpen(false);
    };

    // 使用 useMemo 缓存 content，避免每次都重新创建
    const popoverContent = useMemo(
      () => (
        <>
          {!isWrapped && (
            <Flex
              justify="space-between"
              className={getFilterCls(prefixCls, 'button-label-wrapper')}
            >
              <div>{label}</div>
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
      [content, footer, label, extra, isWrapped, prefixCls]
    );

    return wrapSSR(
      <Popover
        arrow={false}
        placement={placement}
        trigger={trigger}
        content={popoverContent}
        open={open && !disabled}
        onOpenChange={newOpen => {
          if (!disabled) {
            setOpen(newOpen);
          }
        }}
        styles={{
          body: {
            padding: 0,
            minWidth: isWrapped ? 268 : 200,
          },
        }}
        {...restProps}
      >
        <div ref={ref}>
          <div
            className={classNames(
              getFilterCls(prefixCls, 'button'),
              bordered && getFilterCls(prefixCls, 'border'),
              open && getFilterCls(prefixCls, 'active'),
              disabled && getFilterCls(prefixCls, 'disabled'),
              selected && !isWrapped && getFilterCls(prefixCls, 'selected')
            )}
          >
            <Flex align="center" justify="space-between" gap={8} style={{ width: '100%' }}>
              {icon && <div style={{ lineHeight: '1px' }}>{icon}</div>}
              <Flex gap={8} align="center">
                {children}
              </Flex>
              <div className={getFilterCls(prefixCls, 'icon-wrapper')}>
                {loading ? (
                  <Spin
                    indicator={<LoadingOutlined style={{ fontSize: token.fontSizeSM }} spin />}
                  />
                ) : (
                  <>
                    <DownOutlined
                      className={selected ? getFilterCls(prefixCls, 'arrow-icon') : ''}
                    />
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
