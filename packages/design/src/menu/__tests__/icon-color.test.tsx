import { render } from '@testing-library/react';
import { TinyColor } from '@ctrl/tinycolor';
import { ConfigProvider, Menu } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import seedTheme from '../../theme/default';

const icon = <span className="anticon" />;

// 引用主题 token 中的 colorIcon（线性图标色），避免写死色值
const COLOR_ICON = new TinyColor(seedTheme.token!.colorIcon).toRgbString();

const items: MenuProps['items'] = [
  {
    key: 'sub',
    icon,
    label: 'Sub',
    children: [{ key: 'child', icon, label: 'Child' }],
  },
  { key: 'item', icon, label: 'Item' },
  { key: 'danger', icon, label: 'Danger', danger: true },
  { key: 'disabled', icon, label: 'Disabled', disabled: true },
];

const getColor = (props: MenuProps, selector: string) => {
  const { container, unmount } = render(
    <ConfigProvider>
      <Menu items={items} {...props} />
    </ConfigProvider>
  );
  const color = getComputedStyle(container.querySelector(selector) as HTMLElement).color;
  unmount();
  return color;
};

const SELECTED: MenuProps = { mode: 'inline', defaultSelectedKeys: ['item'] };
const SUB_SELECTED: MenuProps = {
  mode: 'inline',
  defaultSelectedKeys: ['child'],
  defaultOpenKeys: ['sub'],
};

describe('Menu icon color', () => {
  it('should use colorIcon for light menu item and submenu title', () => {
    const cases: [string, MenuProps, string][] = [
      [
        'item',
        { mode: 'inline' },
        '.ant-menu-item:not(.ant-menu-item-selected):not(.ant-menu-item-disabled) .ant-menu-item-icon',
      ],
      [
        'submenu title',
        { mode: 'inline' },
        '.ant-menu-submenu:not(.ant-menu-submenu-selected) > .ant-menu-submenu-title .ant-menu-item-icon',
      ],
    ];
    cases.forEach(([name, props, selector]) => {
      expect({ name, color: getColor(props, selector) }).toEqual({ name, color: COLOR_ICON });
    });
  });

  it('should not use colorIcon for highlighted, disabled item and dark menu', () => {
    const cases: [string, MenuProps, string][] = [
      ['selected item', SELECTED, '.ant-menu-item-selected .ant-menu-item-icon'],
      [
        'selected submenu title',
        SUB_SELECTED,
        '.ant-menu-submenu-selected > .ant-menu-submenu-title .ant-menu-item-icon',
      ],
      ['danger item', { mode: 'inline' }, '.ant-menu-item-danger .ant-menu-item-icon'],
      ['disabled item', { mode: 'inline' }, '.ant-menu-item-disabled .ant-menu-item-icon'],
      ['dark menu item', { mode: 'inline', theme: 'dark' }, '.ant-menu-item .ant-menu-item-icon'],
      [
        'horizontal selected item',
        { mode: 'horizontal', defaultSelectedKeys: ['item'] },
        '.ant-menu-item-selected .ant-menu-item-icon',
      ],
    ];
    cases.forEach(([name, props, selector]) => {
      // jsdom 不计算继承，返回空字符串表示没有命中单独设置图标色的规则
      expect({ name, color: getColor(props, selector) }).not.toEqual({ name, color: COLOR_ICON });
    });
  });
});
