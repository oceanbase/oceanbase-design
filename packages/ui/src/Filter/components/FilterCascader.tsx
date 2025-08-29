import { Button, Cascader, Flex, Space, theme, CascaderProps } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import React, { useState } from 'react';
import ClearCircle from './ClearCircle';
import FilterSearch from './FilterSearch';
import { filterData } from '../utils';

export interface FilterCascaderProps {
  clear: () => void;
  label: React.ReactNode;
  haveValueLabel: React.ReactNode;
  value: string[][];
  showSearch?: boolean;
}

/**
 * 级联筛选
 * @param param0 组件props
 * @returns
 */
const FilterCascader: FC<FilterCascaderProps & CascaderProps<any, string, true>> = ({
  label,
  haveValueLabel,
  options,
  value,
  onChange,
  clear,
  showSearch = false,
  ...restProps
}) => {
  const [searchValue, setSearchValue] = useState('');
  const { token } = theme.useToken();
  const filteredOptions = filterData(options, searchValue);

  return (
    <Cascader
      options={filteredOptions || []}
      multiple={true}
      value={value}
      onChange={onChange}
      showCheckedStrategy="SHOW_CHILD"
      dropdownRender={menu => (
        <div style={{ padding: '8px 4px' }}>
          {showSearch && (
            <div style={{ margin: '0px 4px 4px' }}>
              <FilterSearch setValue={setSearchValue} />
            </div>
          )}
          {menu}
        </div>
      )}
      {...restProps}
    >
      <Button>
        {value.length ? (
          <Flex align="center" gap={4}>
            {haveValueLabel || label}
            <Flex
              justify="center"
              align="center"
              style={{
                lineHeight: '10px',
                fontSize: 10,
                padding: `3px ${value.length < 10 ? '5px' : '3px'}`,
                borderRadius: 8,
                color: token.colorTextSecondary,
                background: token.colorFillSecondary,
                marginRight: 8,
              }}
            >
              {value.length}
            </Flex>
            <ClearCircle
              clear={() => {
                clear();
                setSearchValue('');
              }}
            />
          </Flex>
        ) : (
          <Space>
            {label}
            <DownOutlined />
          </Space>
        )}
      </Button>
    </Cascader>
  );
};

export default FilterCascader;
