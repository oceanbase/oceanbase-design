import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DateRanger } from '@oceanbase/ui';
import { NEAR_1_MINUTES, NEAR_30_MINUTES } from '../constant';
import dayjs from 'dayjs';

describe('DateRanger', () => {
  it('Display normally' /** 成功渲染组件 */, async () => {
    const { container, asFragment } = render(<DateRanger />);
    expect(container.querySelector('.ant-date-ranger-wrapper')).toBeTruthy();
  });
  it('Ranger panel can be triggered by clicking' /** 选择面板可以通过点击触发 */, () => {
    const { container } = render(<DateRanger />);
    const dropdownTrigger = container.querySelector(
      '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
    );
    fireEvent.click(dropdownTrigger);
    expect(dropdownTrigger.classList.contains('ant-dropdown-open')).toBeTruthy();
    expect(document.querySelector('.ant-date-ranger-dropdown-picker')).toBeTruthy();
  });
  it('Support setting default quick value' /** 支持设置默认的快捷选项值 */, () => {
    // NEAR_1_MINUTES is default value of defaultQuickValue
    const { container } = render(<DateRanger hasTagInPicker simpleMode />);
    expect(container.querySelector('.ant-date-ranger-label').textContent).toBe(
      NEAR_1_MINUTES.rangeLabel
    );
    expect(container.querySelector('.ant-date-ranger-play').textContent).toBe(NEAR_1_MINUTES.label);

    // Custom defaultQuickValue
    const { container: containerWith30Minutes } = render(
      <DateRanger defaultQuickValue={NEAR_30_MINUTES.name} hasTagInPicker simpleMode />
    );
    expect(containerWith30Minutes.querySelector('.ant-date-ranger-label').textContent).toBe(
      NEAR_30_MINUTES.rangeLabel
    );
    expect(containerWith30Minutes.querySelector('.ant-date-ranger-play').textContent).toBe(
      NEAR_30_MINUTES.label
    );
  });
  it('Should be simple mode when selected shortcut option' /** 选中快捷选项时，应当处于简单模式 */, () => {
    const { container } = render(<DateRanger simpleMode />);
    // As simple mode
    expect(container.querySelector('.ant-date-ranger-play')).toBeTruthy();
    expect(container.querySelector('.ant-date-ranger-picker')).toBeFalsy();
  });
  it('Support setting default value' /** 支持设置默认时间值 */, () => {
    const { container } = render(
      <DateRanger defaultValue={[dayjs('2024/10/12'), dayjs('2024/10/20')]} />
    );
    // As normal mode
    expect(container.querySelector('.ant-date-ranger-play')).toBeFalsy();
    expect(container.querySelector('.ant-date-ranger-picker')).toBeTruthy();
  });
  suite('Panel shortcut options' /** 选择面板中的快捷选项 */, () => {
    it('In simple mode, the shortcut option that is consistent with the ranger label should be selected' /** 在简单模式下，快捷选项应选中和ranger label 一致的快捷选项 */, () => {
      const { container } = render(
        <DateRanger defaultQuickValue={NEAR_30_MINUTES.name} hasTagInPicker simpleMode />
      );
      const dropdownTrigger = container.querySelector(
        '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
      );
      fireEvent.click(dropdownTrigger);
      // Should be selected NEAR_30_MINUTES item that the same as ranger-label when open panel
      const dropdownLayerPicker = document.querySelector('.ant-date-ranger-dropdown-picker');
      expect(
        dropdownLayerPicker.querySelector(
          '.ant-dropdown-menu .ant-dropdown-menu-item-selected .ant-date-ranger-label'
        ).textContent
      ).toBe(NEAR_30_MINUTES.rangeLabel);
    });
    it('In normal mode, the shortcut option should be selected custom item' /** 设置了时间值即为普通模式，选择面板中的快捷选项应当选中“自定义”项 */, () => {
      const { container } = render(
        <DateRanger
          defaultValue={[dayjs('2024/10/12'), dayjs('2024/10/20')]}
          hasTagInPicker
          simpleMode
        />
      );
      const dropdownTrigger = container.querySelector(
        '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
      );
      fireEvent.click(dropdownTrigger);
      const dropdownLayerPicker = document.querySelector('.ant-date-ranger-dropdown-picker');
      expect(
        dropdownLayerPicker.querySelector(
          '.ant-dropdown-menu .ant-dropdown-menu-item-selected .ant-date-ranger-label'
        )
      ).toBeFalsy();
    });
    it('Should selected shortcut option and close panel when click quick time item' /** 当点击快捷时间选项时应该选中该项的时间并关闭选择面板 */, () => {
      let value = [dayjs('2024/10/12'), dayjs('2024/10/20')];
      const onChange = vi.fn(v => {
        value = v;
      });
      const { container } = render(
        <DateRanger value={value} onChange={onChange} hasTagInPicker simpleMode />
      );
      const dropdownTrigger = container.querySelector(
        '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
      );
      fireEvent.click(dropdownTrigger);
      const dropdownLayerPicker = document.querySelector('.ant-date-ranger-dropdown-picker');
      // By default, "NEAR_30_MINUTES" is the second option.
      fireEvent.click(dropdownLayerPicker.querySelector('.ant-dropdown-menu').childNodes[1]);
      expect(onChange).toHaveBeenCalled();
      expect(value.map(v => v.format())).toStrictEqual(
        NEAR_30_MINUTES.range(dayjs()).map(v => v.format())
      );
      // Dropdown panel should be destroyed when close.
      expect(dropdownTrigger.classList.contains('ant-dropdown-open')).toBeFalsy();
      expect(document.querySelector('.ant-date-ranger-dropdown-picker')).toBeFalsy();
    });
  });
});
