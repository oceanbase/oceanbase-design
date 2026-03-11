import React from 'react';
import { Flex, Popover } from 'antd';
import Checkbox from '../../../../checkbox';
import theme from '../../../../theme';
import Input from '../../../../input';
import Empty from '../../../../empty';
import { CheckOutlined, CloseOutlined, RightOutlined, SearchOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import { getFilterCls } from '../../../style';
import type { CascaderOption } from '../types';
import type { FilterButtonRef } from '../../FilterButton';
import { MAX_HEIGHT, PADDING_VERTICAL, PADDING_HORIZONTAL, GAP_SIZE_SMALL } from '../constants';

interface NormalCascaderContentProps {
  options: CascaderOption[];
  currentValue: string[][];
  multiple: boolean;
  prefixCls: string;
  openPopoverKey: string | null;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onOpenPopoverKeyChange: (key: string | null) => void;
  onValueChange: (value: string[][]) => void;
  onHandleChange: (parentValue: string, childValue: string) => void;
  onClearByParent: (parentValue: string) => void;
  onSelectAllChildren: (option: CascaderOption) => void;
  showSearch?: boolean;
  searchKeyword?: string;
  onSearchChange?: (value: string) => void;
}

/**
 * 非 Flat 模式的级联内容组件
 */
export const NormalCascaderContent: React.FC<NormalCascaderContentProps> = ({
  options,
  currentValue,
  multiple,
  prefixCls,
  openPopoverKey,
  filterButtonRef,
  onOpenPopoverKeyChange,
  onValueChange,
  onHandleChange,
  onClearByParent,
  onSelectAllChildren,
  showSearch = false,
  searchKeyword = '',
  onSearchChange,
}) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        padding: PADDING_VERTICAL,
        maxHeight: MAX_HEIGHT,
        overflowY: 'auto',
      }}
    >
      {showSearch && (
        <div style={{ marginInline: 12, marginBottom: 8 }}>
          <Input
            placeholder="搜索"
            prefix={<SearchOutlined />}
            allowClear
            value={searchKeyword}
            onChange={e => onSearchChange?.(e.target.value)}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      {options.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="无匹配结果"
          style={{ padding: '16px 0' }}
        />
      ) : (
        options.map(option => {
          const selectedChildren = currentValue
            .filter(item => item[0] === option.value)
            .map(item => item[1]);

          const hasSelectedChildren = selectedChildren.length > 0;
          const hasChildren = option.children && option.children.length > 0;
          const allChildrenSelected =
            multiple && hasChildren && selectedChildren.length === option.children.length;

          // 判断当前节点是否被选中（用于无子节点的情况）
          const isNodeSelected = currentValue.some(item => item[0] === option.value && !item[1]);

          // 处理无子节点的点击事件
          const handleNodeClick = () => {
            if (option.disabled) {
              return;
            }

            if (!hasChildren) {
              // 无子节点时，直接选中/取消选中该节点
              if (multiple) {
                const isSelected = currentValue.some(item => item[0] === option.value && !item[1]);
                if (isSelected) {
                  onValueChange(
                    currentValue.filter(item => !(item[0] === option.value && !item[1]))
                  );
                } else {
                  onValueChange([...currentValue, [option.value, '']]);
                }
              } else {
                const isSelected = currentValue.some(item => item[0] === option.value && !item[1]);
                if (isSelected) {
                  onValueChange([]);
                } else {
                  onValueChange([[option.value, '']]);
                }
                onOpenPopoverKeyChange(null);
                setTimeout(() => {
                  filterButtonRef.current?.closePopover();
                }, 0);
              }
            }
          };

          // 没有子节点时，直接渲染节点项，不使用 Popover
          if (!hasChildren) {
            return (
              <div key={option.value} style={{ padding: PADDING_HORIZONTAL }}>
                <Flex
                  gap={GAP_SIZE_SMALL * 2}
                  className={getFilterCls(prefixCls, 'select-option')}
                  justify="space-between"
                  align="center"
                  onClick={handleNodeClick}
                  style={{
                    cursor: option.disabled ? 'not-allowed' : 'pointer',
                    color: option.disabled ? token.colorTextDisabled : 'inherit',
                  }}
                >
                  {multiple ? (
                    <Checkbox checked={isNodeSelected} disabled={option.disabled}>
                      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                        {option.label}
                      </span>
                    </Checkbox>
                  ) : (
                    <>
                      <div className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</div>
                      <span>
                        {isNodeSelected && <CheckOutlined style={{ color: token.colorPrimary }} />}
                      </span>
                    </>
                  )}
                </Flex>
              </div>
            );
          }

          // 有子节点时，使用 Popover
          return (
            <Popover
              placement="rightTop"
              trigger={'hover'}
              key={option.value}
              arrow={false}
              open={
                option?.disabled ? false : multiple ? undefined : openPopoverKey === option.value
              }
              onOpenChange={
                multiple
                  ? undefined
                  : open => {
                      if (!open) {
                        onOpenPopoverKeyChange(null);
                      } else {
                        onOpenPopoverKeyChange(option.value);
                      }
                    }
              }
              content={option.children?.map(child => {
                const isSelected = selectedChildren.includes(child.value);
                const isChildDisabled = child.disabled || false;
                return (
                  <Flex
                    key={child.value}
                    gap={GAP_SIZE_SMALL * 2}
                    className={getFilterCls(prefixCls, 'select-option')}
                    justify="space-between"
                    onClick={e => {
                      e.stopPropagation();
                      if (!isChildDisabled) {
                        onHandleChange(option.value, child.value);
                      }
                    }}
                    style={{
                      cursor: isChildDisabled ? 'not-allowed' : 'pointer',
                      color: isChildDisabled ? token.colorTextDisabled : 'inherit',
                    }}
                  >
                    {multiple ? (
                      <Checkbox checked={isSelected} disabled={isChildDisabled}>
                        <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                          {child.label}
                        </span>
                      </Checkbox>
                    ) : (
                      <>
                        <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                          {child.label}
                        </span>
                        <span>
                          {isSelected && <CheckOutlined style={{ color: token.colorPrimary }} />}
                        </span>
                      </>
                    )}
                  </Flex>
                );
              })}
              styles={{
                body: {
                  padding: 8,
                  maxHeight: 220,
                  maxWidth: 300,
                  overflowY: 'auto',
                },
              }}
            >
              <div style={{ padding: PADDING_HORIZONTAL }}>
                <Flex
                  gap={GAP_SIZE_SMALL * 2}
                  className={getFilterCls(prefixCls, 'select-option')}
                  justify="space-between"
                  align="center"
                  style={{
                    cursor: option.disabled ? 'not-allowed' : 'pointer',
                    color: option.disabled ? token.colorTextDisabled : 'inherit',
                  }}
                >
                  {multiple ? (
                    <Checkbox
                      checked={allChildrenSelected}
                      indeterminate={hasSelectedChildren && !allChildrenSelected}
                      disabled={option.disabled}
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      onChange={() => {
                        if (!option.disabled) {
                          if (allChildrenSelected) {
                            onClearByParent(option.value);
                          } else {
                            onSelectAllChildren(option);
                          }
                        }
                      }}
                    >
                      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                        {option.label}
                      </span>
                    </Checkbox>
                  ) : (
                    <div className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</div>
                  )}
                  <Flex align="center" gap={GAP_SIZE_SMALL}>
                    <div className={getFilterCls(prefixCls, 'icon-wrapper')}>
                      <RightOutlined
                        className={hasSelectedChildren ? getFilterCls(prefixCls, 'arrow-icon') : ''}
                      />
                      {hasSelectedChildren && (
                        <div
                          className={getFilterCls(prefixCls, 'clear-icon')}
                          onClick={e => {
                            e.stopPropagation();
                            onClearByParent(option.value);
                          }}
                        >
                          <CloseOutlined />
                        </div>
                      )}
                    </div>
                  </Flex>
                </Flex>
              </div>
            </Popover>
          );
        })
      )}
    </div>
  );
};
