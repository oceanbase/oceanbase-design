import React from 'react';
import { Flex } from 'antd';
import Input from '../../../../../input';
import Empty from '../../../../../empty';
import { SearchOutlined } from '@oceanbase/icons';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';
import { FlatFirstColumn } from './FlatFirstColumn';
import { FlatColumn } from './FlatColumn';
import { COLUMN_WIDTH } from '../../constants';

interface FlatCascaderContentProps {
  flatColumnsPath: string[][];
  options: CascaderOption[];
  currentValue: string[][];
  multiple: boolean;
  prefixCls: string;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onColumnsChange: (columns: string[][]) => void;
  onValueChange: (value: string[][]) => void;
  showSearch?: boolean;
  searchKeyword?: string;
  onSearchChange?: (value: string) => void;
}

/**
 * Flat 模式的级联内容容器组件
 */
export const FlatCascaderContent: React.FC<FlatCascaderContentProps> = ({
  flatColumnsPath,
  options,
  currentValue,
  multiple,
  prefixCls,
  filterButtonRef,
  onColumnsChange,
  onValueChange,
  showSearch = false,
  searchKeyword = '',
  onSearchChange,
}) => {
  // 如果没有任何列，显示第一列（根级别）
  if (flatColumnsPath.length === 0) {
    return (
      <>
        {showSearch && (
          <div style={{ padding: '8px 12px' }}>
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
          <FlatFirstColumn
            options={options}
            currentValue={currentValue}
            multiple={multiple}
            prefixCls={prefixCls}
            filterButtonRef={filterButtonRef}
            onColumnsChange={onColumnsChange}
            onValueChange={onValueChange}
          />
        )}
      </>
    );
  }

  // 渲染多列
  return (
    <>
      {showSearch && (
        <div style={{ padding: '8px 12px' }}>
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
        <Flex style={{ minWidth: flatColumnsPath.length * COLUMN_WIDTH }}>
          {flatColumnsPath.map((columnPath, index) => (
            <FlatColumn
              key={columnPath.join('-')}
              columnPath={columnPath}
              columnIndex={index}
              flatColumnsPath={flatColumnsPath}
              currentValue={currentValue}
              options={options}
              multiple={multiple}
              prefixCls={prefixCls}
              filterButtonRef={filterButtonRef}
              onColumnsChange={onColumnsChange}
              onValueChange={onValueChange}
            />
          ))}
        </Flex>
      )}
    </>
  );
};
