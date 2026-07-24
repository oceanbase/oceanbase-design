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
      {/* dropdownRender mode: custom content in FilterButton + Popover */}
      <Space wrap>
        <Filter.Slot
          label="Tags"
          icon={<TagOutlined />}
          value={tags}
          onChange={setTags}
          formatValue={val => val?.join(', ')}
          dropdownRender={<TagPicker />}
        />
        <Filter.Slot
          label="Rating"
          value={rating}
          onChange={setRating}
          formatValue={val => `${val} stars and above`}
          dropdownRender={<Rate />}
        />
        <Filter.Slot label="Disabled" disabled dropdownRender={<div>Custom content</div>} />
        <Filter.Slot label="Loading" loading dropdownRender={<div>Custom content</div>} />
      </Space>

      {/* children render mode + responsive collapse */}
      <div>
        <Text>
          Render custom content via <code>children</code>. Adjust width to see collapse behavior:
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
          <Filter.Slot
            label="Search"
            value={keyword}
            onChange={setKeyword}
            formatValue={val => val}
          >
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              allowClear
              style={{ width: 160 }}
            />
          </Filter.Slot>
          <Filter.Select
            label="Status"
            options={[
              { value: 'open', label: 'Open' },
              { value: 'closed', label: 'Closed' },
            ]}
          />
          <Filter.Slot
            label="Tags"
            icon={<TagOutlined />}
            value={tags}
            onChange={setTags}
            formatValue={val => val?.join(', ')}
            dropdownRender={<TagPicker />}
          />
          <Filter.Select
            label="Priority"
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>
    </Flex>
  );
};

export default App;
