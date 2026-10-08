import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';
import { DateRanger } from '@oceanbase/ui';
import { DATE_TIME_MONTH_FORMAT_CN, NEAR_1_MINUTES, NEAR_30_MINUTES } from '../constant';
import jaJP from '../locale/ja-JP';
import dayjs from 'dayjs';
import moment from 'moment';
import { buildSegments } from '../hooks/segments';

/** 面板内容由 antd Dropdown 挂载到 body 上,所以这里从 document 取 */
const getPanelInputs = () => {
  const panel = document.querySelector('.ant-date-ranger-dropdown-picker');
  return Array.from(panel.querySelectorAll('input')) as HTMLInputElement[];
};

/** 打开面板,返回其中的 4 个输入框(开始日期/时间、结束日期/时间) */
const openPanel = (container: HTMLElement) => {
  const dropdownTrigger = container.querySelector(
    '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
  );
  fireEvent.click(dropdownTrigger);
  return getPanelInputs();
};

/** 把开始日期改成 2024-10-13(日期段由 format 算出,不写死字符偏移) */
const typeStartDate = (inputs: HTMLInputElement[]) => {
  const startDate = inputs[0];
  // 面板默认是中文日期格式,日期是第 3 段
  const daySegment = buildSegments(startDate.value, DATE_TIME_MONTH_FORMAT_CN)[2];
  startDate.setSelectionRange(daySegment.start, daySegment.end);
  fireEvent.click(startDate);
  fireEvent.keyDown(startDate, { key: '1' });
  fireEvent.keyDown(startDate, { key: '3' });
};

/** 打开面板,把开始日期改为 2024-10-13 并回车确认该输入框,返回面板中的 4 个输入框 */
const editStartDate = (container: HTMLElement) => {
  const inputs = openPanel(container);
  typeStartDate(inputs);
  fireEvent.keyDown(inputs[0], { key: 'Enter' });
  return inputs;
};

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
  it('Should keep the time when editing the date (dayjs)' /** 修改日期后应保留原有时间(dayjs) */, () => {
    const { container } = render(
      <DateRanger defaultValue={[dayjs('2024-10-12 08:30:00'), dayjs('2024-10-20 18:00:00')]} />
    );
    const inputs = editStartDate(container);
    // 日期生效,时间不应被重置为 00:00:00
    expect(inputs.map(input => input.value)).toStrictEqual([
      '2024-10-13',
      '08:30:00',
      '2024-10-20',
      '18:00:00',
    ]);
  });
  it('Should keep the time when editing the date (moment)' /** 修改日期后应保留原有时间(moment) */, () => {
    const { container } = render(
      <DateRanger defaultValue={[moment('2024-10-12 08:30:00'), moment('2024-10-20 18:00:00')]} />
    );
    const inputs = editStartDate(container);
    expect(inputs.map(input => input.value)).toStrictEqual([
      '2024-10-13',
      '08:30:00',
      '2024-10-20',
      '18:00:00',
    ]);
  });
  it('Should confirm the input first, then the whole panel on a second Enter' /** 回车两阶段:第一次确认所属输入框,第二次整体确认面板 */, async () => {
    const onChange = vi.fn();
    const { container } = render(
      <DateRanger
        defaultValue={[dayjs('2024-10-12 08:30:00'), dayjs('2024-10-20 18:00:00')]}
        onChange={onChange}
      />
    );
    const inputs = openPanel(container);
    // 打开面板本身会回调一次,这里只关心回车带来的变化
    const callsBeforeEdit = onChange.mock.calls.length;

    // 第一次回车在输入框内按下,只确认该输入框
    typeStartDate(inputs);
    fireEvent.keyDown(inputs[0], { key: 'Enter' });
    expect(inputs[0].value).toBe('2024-10-13');
    expect(onChange.mock.calls.length).toBe(callsBeforeEdit);

    // 此时没有输入框处于输入态,再次回车由面板整体确认
    fireEvent.keyDown(document.body, { key: 'Enter' });

    await waitFor(() => expect(onChange.mock.calls.length).toBe(callsBeforeEdit + 1));
    const confirmedRange = onChange.mock.calls[callsBeforeEdit][0];
    expect(confirmedRange.map(v => v.format('YYYY-MM-DD HH:mm:ss'))).toStrictEqual([
      '2024-10-13 08:30:00',
      '2024-10-20 18:00:00',
    ]);
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
    expect(container.querySelector('.ant-date-ranger-editable-wrapper')).toBeFalsy();
  });
  suite('Locale' /** i18n */, () => {
    const jaLocale = {
      locale: 'ja',
      DateRanger: jaJP,
    };
    it('Should render Japanese quick option labels under ja-JP locale' /** Quick option labels should render in Japanese under ja-JP */, () => {
      const { container } = render(
        <ConfigProvider locale={jaLocale as any}>
          <DateRanger simpleMode />
        </ConfigProvider>
      );
      // NEAR_1_MINUTES is the default quick value in simple mode
      expect(container.querySelector('.ant-date-ranger-play').textContent).toBe(jaJP['近 1 分钟']);
    });
    it('Should display Japanese quick options in the dropdown under ja-JP locale' /** Dropdown quick options should render in Japanese under ja-JP */, () => {
      const { container } = render(
        <ConfigProvider locale={jaLocale as any}>
          <DateRanger simpleMode />
        </ConfigProvider>
      );
      const dropdownTrigger = container.querySelector(
        '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
      );
      fireEvent.click(dropdownTrigger);
      const dropdownLayerPicker = document.querySelector('.ant-date-ranger-dropdown-picker');
      const menuItems = dropdownLayerPicker.querySelectorAll('.ant-dropdown-menu-item');
      expect(menuItems.length).toBeGreaterThan(0);
      // The first two quick options are NEAR_1_MINUTES and NEAR_30_MINUTES
      expect(menuItems[0].textContent).toBe(jaJP['近 1 分钟']);
      expect(menuItems[1].textContent).toBe(jaJP['近 30 分钟']);
    });
    it('Should render the Japanese history entry under ja-JP locale' /** History entry should render in Japanese under ja-JP */, () => {
      const { container } = render(
        <ConfigProvider locale={jaLocale as any}>
          <DateRanger simpleMode history />
        </ConfigProvider>
      );
      const dropdownTrigger = container.querySelector(
        '.ant-date-ranger-wrapper > .ant-dropdown-trigger'
      );
      fireEvent.click(dropdownTrigger);
      const dropdownLayerPicker = document.querySelector('.ant-date-ranger-dropdown-picker');
      expect(dropdownLayerPicker.textContent).toContain(jaJP.history);
      expect(dropdownLayerPicker.textContent).not.toContain('历史记录');
    });
    it('Should render the Japanese custom range description under ja-JP locale' /** Custom range description should render in Japanese under ja-JP */, () => {
      const { container } = render(
        <ConfigProvider locale={jaLocale as any}>
          <DateRanger simpleMode defaultValue={[dayjs().subtract(30, 'minute'), dayjs()]} />
        </ConfigProvider>
      );
      // Clicking forward when the current range (last 30 minutes) would end in the future
      // switches to play mode and shows the custom-range description
      const forwardButton = Array.from(
        container.querySelectorAll('.ant-date-ranger-playback-control label')
      ).find(label => {
        return label.querySelector('input[value="stepForward"]');
      });
      fireEvent.click(forwardButton);
      expect(container.querySelector('.ant-date-ranger-play').textContent).toBe(
        jaJP.nearlyMinutes.replace('{0}', '30')
      );
    });
  });
  it('Support setting default value' /** 支持设置默认时间值 */, () => {
    const { container } = render(
      <DateRanger defaultValue={[dayjs('2024/10/12'), dayjs('2024/10/20')]} />
    );
    // As normal mode
    expect(container.querySelector('.ant-date-ranger-play')).toBeFalsy();
    expect(container.querySelector('.ant-date-ranger-editable-wrapper')).toBeTruthy();
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
