import { ClockCircleOutlined, DownOutlined } from '@oceanbase/icons';
import { Dropdown, Menu, Select, Space } from '@oceanbase/design';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { noop } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import { CUSTOMIZE } from './constant';
import type { RangeValue } from './Ranger';
import type { RangeOption } from './typing';

interface SelectProps {
  selects: RangeOption[];
  value: string;
  onChange: (name: string) => void;
  customable?: boolean;
  locale?: Record<string, string>;
  size?: 'small' | 'large' | 'middle';
}

export type QuickType = 'select' | 'dropdown';

export interface QuickPickerProps extends LocaleWrapperProps {
  selects: RangeOption[];
  type?: QuickType;
  onChange: (range: RangeValue) => void;
  onNameChange?: (name: string) => void;
  customable?: boolean;
  name?: string;
  defaultName?: string;
  isMoment?: boolean;
  size?: 'small' | 'large' | 'middle';
}

const prefix = getPrefix('ranger-quick-picker');

const RangeDropdown = ({
  selects,
  onChange,
  value,
  customable,
  locale = {},
  ...rest
}: SelectProps) => {
  const menu = (
    <Menu
      onClick={e => {
        onChange(e.key as string);
      }}
      style={{ minWidth: 120 }}
    >
      {selects.map(item => (
        <Menu.Item key={item.name}>{locale[item.name] || item.name}</Menu.Item>
      ))}
      {customable && <Menu.Item key={CUSTOMIZE}>{locale.customize}</Menu.Item>}
    </Menu>
  );

  const match = selects.find(item => item.name === value);

  return (
    <Dropdown overlay={menu} {...rest}>
      <Space style={{ cursor: 'pointer' }} className={classnames(prefix, `${prefix}-dropdown`)}>
        <ClockCircleOutlined />
        {locale[match?.name] || match?.name}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

const RangeSelect = ({
  selects,
  onChange,
  value,
  customable,
  locale = {},
  size,
  ...rest
}: SelectProps) => {
  const handleChange = (nextValue: string) => {
    onChange(nextValue);
  };
  return (
    <Select
      className={classnames(prefix, `${prefix}-select`)}
      style={{ minWidth: 120 }}
      onSelect={handleChange}
      value={value}
      size={size}
      {...rest}
    >
      {selects.map(item => {
        return (
          <Select.Option key={item.name} value={item.name}>
            {locale[item.name] || item.name}
          </Select.Option>
        );
      })}
      {customable && (
        <Select.Option key={CUSTOMIZE} value={CUSTOMIZE}>
          {locale.customize}
        </Select.Option>
      )}
    </Select>
  );
};

export default (props: QuickPickerProps) => {
  const {
    type = 'select',
    name,
    defaultName,
    selects,
    onChange,
    onNameChange = noop,
    isMoment,
    ...rest
  } = props;
  const [innerName, setInnerName] = useState(name ?? defaultName ?? selects?.[0]?.name);

  useEffect(() => {
    if (name) {
      setInnerName(name);
    }
  }, [name]);

  const handleChange = (value: string) => {
    const selected = selects.find(item => item.name === value);
    setInnerName(value);
    if (value !== CUSTOMIZE) {
      onChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
    }
    onNameChange(value);
  };

  return type === 'select' ? (
    <RangeSelect value={innerName} selects={selects} onChange={handleChange} {...rest} />
  ) : (
    <RangeDropdown value={innerName} selects={selects} onChange={handleChange} {...rest} />
  );
};
