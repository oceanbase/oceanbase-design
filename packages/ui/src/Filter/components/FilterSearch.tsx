import { Input, theme } from '@oceanbase/design';
import { SearchOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import React from 'react';

interface SearchInputProps {
  setValue: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ setValue }) => {
  const { token } = theme.useToken();
  return (
    <Input
      allowClear
      placeholder="请输入关键字搜索"
      onChange={e => {
        setValue(e.target.value);
      }}
      prefix={<SearchOutlined style={{ color: token.colorTextTertiary }} />}
    />
  );
};

export default SearchInput;
