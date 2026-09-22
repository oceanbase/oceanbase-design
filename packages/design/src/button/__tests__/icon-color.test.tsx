import { render } from '@testing-library/react';
import React from 'react';
import ConfigProvider from '../../config-provider';
import Button from '../index';
import type { ButtonProps } from '../index';

const icon = <span className="anticon" />;

const createButton = (props: ButtonProps, label: string) => (
  <Button icon={icon} {...props}>
    {label}
  </Button>
);

const getColor = (node: React.ReactElement, selector: string) => {
  const { container, unmount } = render(<ConfigProvider>{node}</ConfigProvider>);
  const color = getComputedStyle(container.querySelector(selector) as HTMLElement).color;
  unmount();
  return color;
};

// gray8，设计规范中的线性图标色
const COLOR_ICON = 'rgb(92, 107, 138)';
// gray10，即 colorText
const COLOR_TEXT = 'rgb(19, 32, 57)';

describe('Button icon color', () => {
  it('should use colorIcon for default color text, outlined and dashed button', () => {
    const cases: [string, React.ReactElement][] = [
      ['text', createButton({ type: 'text' }, 'Text')],
      ['outlined', createButton({ color: 'default', variant: 'outlined' }, 'Outlined')],
      ['dashed', createButton({ color: 'default', variant: 'dashed' }, 'Dashed')],
    ];
    cases.forEach(([name, button]) => {
      // 图标使用 colorIcon
      expect({ name, color: getColor(button, '.anticon') }).toEqual({ name, color: COLOR_ICON });
      // 文案色仍为 colorText，只有图标变浅
      expect({ name, color: getColor(button, '.ant-btn') }).toEqual({ name, color: COLOR_TEXT });
    });
  });

  it('should not use colorIcon for disabled, solid, colored and link button', () => {
    const cases: [string, React.ReactElement][] = [
      ['disabled text', createButton({ type: 'text', disabled: true }, 'Text')],
      ['solid', createButton({ color: 'default', variant: 'solid' }, 'Solid')],
      ['primary text', createButton({ color: 'primary', variant: 'text' }, 'Text')],
      ['link', createButton({ type: 'link' }, 'Link')],
    ];
    cases.forEach(([name, button]) => {
      // jsdom 不计算继承，返回空字符串表示没有命中单独设置图标色的规则
      expect({ name, color: getColor(button, '.anticon') }).not.toEqual({
        name,
        color: COLOR_ICON,
      });
    });
  });
});
