import { Flex, Tag, Tooltip } from '@oceanbase/design';
import type { ReactNode } from 'react';
import React from 'react';

export interface TagItem {
  label: ReactNode;
  value: string;
}

export interface WrappedTagsDisplayProps {
  /** 选中的标签列表 */
  tags: TagItem[];
  /** 最多显示的标签数量，默认为 2 */
  maxVisibleTags?: number;
  /** 移除标签的回调 */
  onRemove?: (value: string) => void;
  /** 标签的最大宽度，默认为 80 */
  tagMaxWidth?: number;
}

/**
 * Wrapped 模式下的 Tag 展示组件
 * 用于 FilterCheckbox、FilterCascader 等多选组件在 wrapped 模式下展示选中值
 */
const WrappedTagsDisplay: React.FC<WrappedTagsDisplayProps> = ({
  tags,
  maxVisibleTags = 2,
  onRemove,
  tagMaxWidth = 80,
}) => {
  const hasValue = tags.length > 0;
  const visibleTags = tags.slice(0, maxVisibleTags);
  const hiddenTags = tags.slice(maxVisibleTags);
  const hiddenCount = hiddenTags.length;

  if (!hasValue) {
    return <span style={{ color: '#b6c0d4' }}>Please select</span>;
  }

  return (
    <Flex gap={4} align="center" style={{ flex: 1, overflow: 'hidden' }}>
      {visibleTags.map(item => (
        <Tag
          key={item.value}
          closable={!!onRemove}
          onClose={e => {
            e.preventDefault();
            e.stopPropagation();
            onRemove?.(item.value);
          }}
          style={{ maxWidth: tagMaxWidth }}
        >
          {item.label}
        </Tag>
      ))}
      {hiddenCount > 0 && (
        <Tooltip
          title={hiddenTags.map(item => (
            <Tag
              key={item.value}
              closable={!!onRemove}
              onClose={e => {
                e.preventDefault();
                e.stopPropagation();
                onRemove?.(item.value);
              }}
            >
              {item.label}
            </Tag>
          ))}
        >
          <Tag style={{ margin: 0 }}>..</Tag>
        </Tooltip>
      )}
    </Flex>
  );
};

export default WrappedTagsDisplay;
