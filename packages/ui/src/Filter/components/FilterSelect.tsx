import { Button, Flex, Popover, Space } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import ClearCircle from './ClearCircle';
import FilterSearch from './FilterSearch';

import { getPrefix } from '../../_util';
import '../styles.less';

export interface PageExtraOperatorProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
  clear: () => void;
  showSearch?: boolean;
}

/**
 * 事件操作者选择器
 * @param param0 组件props
 * @returns
 */
const PageExtraOperator: FC<PageExtraOperatorProps> = ({
  label,
  value,
  setValue,
  clear,
  options,
  showSearch = false,
}) => {
  const [searchOperator, setSearchOperator] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const prefix = getPrefix('filter');

  // 根据搜索条件过滤数据
  const filterOptions = useMemo(() => {
    if (!searchOperator) {
      return options;
    }
    return options?.filter(item => item.label.toLowerCase().includes(searchOperator.toLowerCase()));
  }, [options, searchOperator]);

  return (
    <Popover
      key="operator"
      placement="bottomLeft"
      arrow={false}
      trigger="click"
      open={isOpen}
      onOpenChange={setIsOpen}
      content={
        <div>
          {showSearch && <FilterSearch setValue={setSearchOperator} />}
          <Flex
            vertical
            style={{ marginTop: showSearch ? 8 : 0, maxHeight: 244, overflow: 'scroll' }}
          >
            {filterOptions?.map(item => (
              <div
                className={`${prefix}-select-item`}
                key={item.value}
                onClick={() => {
                  setValue(item.value);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </Flex>
        </div>
      }
    >
      <Button>
        {value ? (
          <Space>
            {value}
            <ClearCircle
              clear={() => {
                clear();
                setSearchOperator('');
              }}
            />
          </Space>
        ) : (
          <Space>
            {label}
            <DownOutlined />
          </Space>
        )}
      </Button>
    </Popover>
  );
};

export default PageExtraOperator;
