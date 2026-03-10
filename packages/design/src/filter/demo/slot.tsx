import React, { useState } from 'react';
import {
  Filter,
  Flex,
  Input,
  Rate,
  Slider,
  Space,
  Tag,
  Typography,
  theme,
} from '@oceanbase/design';
import { SearchOutlined, TagOutlined } from '@oceanbase/icons';

const { CheckableTag } = Tag;
const { Text } = Typography;

const allTags = ['Bug', 'Feature', 'Enhancement', 'Documentation'];

const TagPicker: React.FC<{
  value?: string[];
  onChange?: (value: string[]) => void;
}> = ({ value = [], onChange }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const next = checked ? [...value, tag] : value.filter(t => t !== tag);
    onChange?.(next);
  };

  return (
    <Flex wrap="wrap" gap={8}>
      {allTags.map(tag => (
        <CheckableTag
          key={tag}
          checked={value.includes(tag)}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Flex>
  );
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>([]);
  const [rating, setRating] = useState<number | undefined>();
  const [keyword, setKeyword] = useState<string>('');
  const [containerWidth, setContainerWidth] = useState(500);

  return (
    <Flex vertical gap={24}>
      {/* dropdownRender 模式：自定义内容展示在 FilterButton + Popover 中 */}
      <Space wrap>
        <Filter.Slot
          label="标签"
          icon={<TagOutlined />}
          value={tags}
          onChange={setTags}
          formatValue={val => val?.join(', ')}
          dropdownRender={<TagPicker />}
        />
        <Filter.Slot
          label="评分"
          value={rating}
          onChange={setRating}
          formatValue={val => `${val} 星及以上`}
          dropdownRender={<Rate />}
        />
        <Filter.Slot label="禁用状态" disabled dropdownRender={<div>自定义内容</div>} />
        <Filter.Slot label="加载中" loading dropdownRender={<div>自定义内容</div>} />
      </Space>

      {/* children 直接渲染模式 + 响应式折叠 */}
      <div>
        <Text>
          通过 <code>children</code> 直接渲染自定义内容，调整宽度查看折叠效果：
        </Text>
        <Slider
          min={100}
          max={700}
          value={containerWidth}
          onChange={setContainerWidth}
          marks={{ 100: '100px', 300: '300px', 500: '500px', 700: '700px' }}
        />
      </div>
      <div
        style={{
          width: containerWidth,
          border: `1px dashed ${token.colorBorder}`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Filter.ResponsiveGroup gap={8} showActions={false}>
          <Filter.Slot label="搜索" value={keyword} onChange={setKeyword} formatValue={val => val}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="搜索..."
              allowClear
              style={{ width: 160 }}
            />
          </Filter.Slot>
          <Filter.Select
            label="状态"
            options={[
              { value: 'open', label: '开启' },
              { value: 'closed', label: '关闭' },
            ]}
          />
          <Filter.Slot
            label="标签"
            icon={<TagOutlined />}
            value={tags}
            onChange={setTags}
            formatValue={val => val?.join(', ')}
            dropdownRender={<TagPicker />}
          />
          <Filter.Select
            label="优先级"
            options={[
              { value: 'high', label: '高' },
              { value: 'medium', label: '中' },
              { value: 'low', label: '低' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>
    </Flex>
  );
};

export default App;
