import { GlobalOutlined } from '@oceanbase/icons';
import { findByValue } from '@oceanbase/util';
import { Dropdown, Menu, Space } from '@oceanbase/design';
import type { DropdownProps } from '@oceanbase/design/es/dropdown';
import React from 'react';
import { LOCALE_LIST } from '../constant';
import type { Locale } from '../interface';
import { getLocale, setLocale } from '../_util';

export interface LocaleDropdownProps extends DropdownProps {
  // 自定义语言列表
  locales?: Locale[];
  showLabel?: boolean;
}

const LocaleDropdown: React.FC<LocaleDropdownProps> = ({
  locales,
  showLabel,
  className,
  ...restProps
}) => {
  // 语言切换菜单
  const localeMenu = (
    <Menu
      onClick={({ key }) => {
        setLocale(key as string);
      }}
    >
      {LOCALE_LIST.filter(item => !locales || locales.includes(item.value as Locale)).map(item => (
        <Menu.Item key={item.value}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={localeMenu} {...restProps}>
      {showLabel ? (
        <span
          style={{
            display: 'inline-block',
            width: 28,
            height: 28,
            fontSize: 12,
            fontWeight: 500,
            lineHeight: '28px',
            textAlign: 'center',
            border: '0.88px solid #ced4e1',
            borderRadius: 14,
          }}
        >
          {findByValue(LOCALE_LIST, getLocale()).minLabel}
        </span>
      ) : (
        <Space className={className}>
          <GlobalOutlined />
          {findByValue(LOCALE_LIST, getLocale()).shortLabel}
        </Space>
      )}
    </Dropdown>
  );
};

export default LocaleDropdown;
