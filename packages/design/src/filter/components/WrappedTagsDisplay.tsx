import type { ReactNode } from 'react';
import React, { useContext } from 'react';
import { Flex } from 'antd';
import Tag from '../../tag';
import Tooltip from '../../tooltip';
import theme from '../../theme';
import ConfigProvider from '../../config-provider';
import type { Locale } from '../../locale';
import enUS from '../../locale/en-US';

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
  const { token } = theme.useToken();
  const { locale: contextLocale } = useContext(ConfigProvider.ConfigContext);
  const filterLocale = (contextLocale as Locale)?.Filter || enUS.Filter;
  const hasValue = tags.length > 0;
  const visibleTags = tags.slice(0, maxVisibleTags);
  const hiddenTags = tags.slice(maxVisibleTags);
  const hiddenCount = hiddenTags.length;

  if (!hasValue) {
    return <span style={{ color: token.colorTextPlaceholder }}>{filterLocale?.pleaseSelect}</span>;
  }

  return (
    <Flex align="center" style={{ overflow: 'hidden', flex: 1 }}>
      {visibleTags.map(item => (
        <Tag
          key={item.value}
          closable={!!onRemove}
          onClose={e => {
            e.preventDefault();
            e.stopPropagation();
            onRemove?.(item.value);
          }}
          style={{ maxWidth: tagMaxWidth, marginRight: 4 }}
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
