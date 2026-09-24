import { render } from '@testing-library/react';
import { TinyColor } from '@ctrl/tinycolor';
import { ConfigProvider, Dropdown } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import seedTheme from '../../theme/default';

const icon = <span className="anticon" />;

// 引用主题 token 中的 colorIcon（线性图标色），避免写死色值
const COLOR_ICON = new TinyColor(seedTheme.token!.colorIcon).toRgbString();

const items: MenuProps['items'] = [
  { key: 'item', icon, label: 'Item' },
  { key: 'sel', icon, label: 'Selected' },
  { key: 'danger', icon, label: 'Danger', danger: true },
  {
    key: 'sub',
    icon,
    label: 'Sub',
    children: [{ key: 'child', icon, label: 'Child' }],
  },
  { key: 'disabled', icon, label: 'Disabled', disabled: true },
];

const getColor = (menu: MenuProps, selector: string) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const { unmount } = render(
    <ConfigProvider>
      <Dropdown menu={menu} open trigger={['click']} getPopupContainer={() => container}>
        <a>trigger</a>
      </Dropdown>
    </ConfigProvider>,
    { container }
  );
  const color = getComputedStyle(container.querySelector(selector) as HTMLElement).color;
  unmount();
  container.remove();
  return color;
};

const base: MenuProps = { items };
const selected: MenuProps = { items, selectedKeys: ['sel'] };
const subSelected: MenuProps = { items, selectedKeys: ['child'], defaultOpenKeys: ['sub'] };

describe('Dropdown menu icon color', () => {
  it('should use colorIcon for light dropdown menu item and submenu title', () => {
    const cases: [string, MenuProps, string][] = [
      [
        'item',
        base,
        '.ant-dropdown-menu-item:not(.ant-dropdown-menu-item-selected):not(.ant-dropdown-menu-item-disabled) .ant-dropdown-menu-item-icon',
      ],
      [
        'submenu title',
        base,
        '.ant-dropdown-menu-submenu:not(.ant-dropdown-menu-submenu-selected) > .ant-dropdown-menu-submenu-title .ant-dropdown-menu-item-icon',
      ],
    ];
    cases.forEach(([name, menu, selector]) => {
      expect({ name, color: getColor(menu, selector) }).toEqual({ name, color: COLOR_ICON });
    });
  });

  it('should not use colorIcon for selected, danger and disabled item', () => {
    const cases: [string, MenuProps, string][] = [
      ['selected item', selected, '.ant-dropdown-menu-item-selected .ant-dropdown-menu-item-icon'],
      [
        'selected submenu title',
        subSelected,
        '.ant-dropdown-menu-submenu-selected > .ant-dropdown-menu-submenu-title .ant-dropdown-menu-item-icon',
      ],
      ['danger item', base, '.ant-dropdown-menu-item-danger .ant-dropdown-menu-item-icon'],
      ['disabled item', base, '.ant-dropdown-menu-item-disabled .ant-dropdown-menu-item-icon'],
    ];
    cases.forEach(([name, menu, selector]) => {
      // jsdom 不计算继承，返回空字符串表示没有命中单独设置图标色的规则
      expect({ name, color: getColor(menu, selector) }).not.toEqual({ name, color: COLOR_ICON });
    });
  });
});
