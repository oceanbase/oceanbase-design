import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';
import moment from 'moment';
import SegmentedInput from '../SegmentedInput';
import { buildSegments } from '../hooks/segments';

/** 点击到指定段(段区间由分段的实现算出,避免测试写死字符偏移) */
const clickSegment = (input: HTMLInputElement, text: string, format: string, index: number) => {
  const seg = buildSegments(text, format)[index];
  input.setSelectionRange(seg.start, seg.end);
  fireEvent.click(input);
};

const getInput = (container: HTMLElement) => {
  return container.querySelector('input') as HTMLInputElement;
};

describe('SegmentedInput', () => {
  suite('Commit draft' /** 提交草稿 */, () => {
    const invalidDateCases: {
      name: string;
      format: string;
      /** 表单值 */
      initial: string;
      /** 表单值格式化后的显示文本 */
      rendered: string;
      /** 改完月份后的显示文本 */
      typed: string;
      /** 月/日段在段列表中的下标,由 format 决定 */
      monthIndex: number;
      dayIndex: number;
      isMoment?: boolean;
    }[] = [
      {
        name: 'dayjs + YYYY-MM-DD',
        format: 'YYYY-MM-DD',
        initial: '2026-01-15',
        rendered: '2026-01-15',
        typed: '2026-02-30',
        monthIndex: 1,
        dayIndex: 2,
      },
      {
        name: 'dayjs + MM/DD/YYYY',
        format: 'MM/DD/YYYY',
        initial: '2026-01-15',
        rendered: '01/15/2026',
        typed: '02/30/2026',
        monthIndex: 0,
        dayIndex: 1,
      },
      {
        name: 'moment + MM/DD/YYYY',
        format: 'MM/DD/YYYY',
        initial: '2026-01-15',
        rendered: '01/15/2026',
        typed: '02/30/2026',
        monthIndex: 0,
        dayIndex: 1,
        isMoment: true,
      },
    ];

    it.each(invalidDateCases)(
      'Should not silently rewrite an invalid date ($name)' /** 非法日期不能被静默改写成另一个日期 */,
      ({ format, initial, rendered, typed, monthIndex, dayIndex, isMoment }) => {
        const onChange = vi.fn();
        const { container } = render(
          <SegmentedInput
            value={isMoment ? moment(initial) : dayjs(initial)}
            onChange={onChange}
            format={format}
            isMoment={isMoment}
          />
        );
        const input = getInput(container);
        expect(input.value).toBe(rendered);

        // 月份改为 02
        clickSegment(input, rendered, format, monthIndex);
        fireEvent.keyDown(input, { key: '0' });
        fireEvent.keyDown(input, { key: '2' });

        // 日期改为 30 → 2026-02-30 并不存在
        clickSegment(input, rendered, format, dayIndex);
        fireEvent.keyDown(input, { key: 'Delete' });
        fireEvent.keyDown(input, { key: '3' });
        fireEvent.keyDown(input, { key: '0' });
        expect(input.value).toBe(typed);

        fireEvent.keyDown(input, { key: 'Enter' });

        // 非法草稿应整体回弹,而不是被宽松解析成 2026-03-02
        expect(onChange).not.toHaveBeenCalled();
        expect(input.value).toBe(rendered);
      }
    );

    it('Should commit a valid draft only once when pressing Enter' /** 合法草稿提交:一次回车只提交一次 */, () => {
      const onChange = vi.fn();
      const { container } = render(
        <SegmentedInput value={dayjs('2026-01-15')} onChange={onChange} format="YYYY-MM-DD" />
      );
      const input = getInput(container);

      // 日期改为 20
      clickSegment(input, '2026-01-15', 'YYYY-MM-DD', 2);
      fireEvent.keyDown(input, { key: 'Delete' });
      fireEvent.keyDown(input, { key: '2' });
      fireEvent.keyDown(input, { key: '0' });
      fireEvent.keyDown(input, { key: 'Enter' });

      // 回车提交后会紧接着 blur,不应重复提交
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0].format('YYYY-MM-DD')).toBe('2026-01-20');
    });
  });
});
