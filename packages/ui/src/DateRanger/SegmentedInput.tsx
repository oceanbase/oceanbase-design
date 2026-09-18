import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import dayjs from 'dayjs';
import moment from 'moment';
import { Input } from '@oceanbase/design';
import type { InputProps, InputRef } from '@oceanbase/design';
import { applyDigit, buildSegments, clearSegment } from './hooks/segments';
import type { Segment } from './hooks/segments';

export interface SegmentedInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  /** 表单项值(dayjs/moment 对象,由 Form.Item 注入) */
  value?: Dayjs | Moment | null;
  /** blur/回车提交新值(由 Form.Item 注入) */
  onChange?: (value: Dayjs | Moment) => void;
  /** 显示与解析格式,如 HH:mm:ss / MM/DD/YYYY */
  format: string;
  isMoment?: boolean;
  /** blur/回车提交解析成功后的回调(如同步日历高亮) */
  onCommit?: (value: Dayjs | Moment) => void;
}

/**
 * 单值分段日期/时间输入框:
 *  - 点击定位到所在段(年/月/日/时/分/秒),逐段覆盖输入
 *  - 数字输入智能限制:首位达上限(时3/分秒6/月2/日4)直接定值 0X 并跳下一段;
 *    第二位使整体超限(如时 25)时,当前段以首位补零定值,该数字自动溢出推入下一段
 *  - 方向键移段、Backspace/Delete 清段、Enter/失焦提交(非法则回弹)
 * 与主输入框共用同一套分段输入引擎(hooks/segments)。
 */
const SegmentedInput = (props: SegmentedInputProps) => {
  const {
    value,
    onChange,
    format,
    isMoment = false,
    onCommit,
    style,
    className,
    placeholder,
    disabled,
    ...rest
  } = props;

  const inputRef = useRef<InputRef>(null);
  const [draftText, setDraftText] = useState<string | null>(null);
  const [displayValue, setDisplayValue] = useState<string>(() => formatText());

  // 分段编辑状态(与 useSegmentedInput 同思路的轻量单值版)
  const segmentsRef = useRef<Segment[]>([]);
  const activeSegRef = useRef<number>(-1);
  const caretOffsetRef = useRef<number>(0);

  function formatText(v: Dayjs | Moment | null | undefined = value): string {
    if (!v) return '';
    if (isMoment || moment.isMoment(v)) return (v as Moment).format(format);
    return (dayjs.isDayjs(v) ? (v as Dayjs) : dayjs(v)).format(format);
  }

  const parseText = useCallback(
    (text: string): Dayjs | Moment | null => {
      const strict = isMoment ? moment(text, format, true) : dayjs(text, format, true);
      if (strict.isValid()) return strict;
      const loose = isMoment ? moment(text) : dayjs(text);
      return loose.isValid() ? loose : null;
    },
    [isMoment, format]
  );

  // 外部 value 变化同步显示;编辑态草稿优先同步到显示值(与 useSegmentedInput 一致),
  // 保证后续按键基于最新草稿文本计算,避免基准漂移
  useEffect(() => {
    if (draftText !== null) {
      setDisplayValue(draftText);
      return;
    }
    setDisplayValue(formatText());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftText, value?.valueOf(), format, isMoment]);

  // 文本变化时重建段映射(单值:fullFormat 传空使 end 侧无 token)
  useEffect(() => {
    segmentsRef.current = buildSegments(displayValue, format, '', '');
  }, [displayValue, format]);

  const focusSegment = useCallback((index: number, keepOffset = false) => {
    const segs = segmentsRef.current;
    if (index < 0 || index >= segs.length) return;
    if (!keepOffset) caretOffsetRef.current = 0;
    activeSegRef.current = index;
    const seg = segs[index];
    const input = inputRef.current?.input;
    if (input) {
      input.focus();
      input.setSelectionRange(seg.start, seg.end);
    }
  }, []);

  // 受控渲染/文本变化后恢复活动段选区
  useLayoutEffect(() => {
    const idx = activeSegRef.current;
    if (idx < 0) return;
    const seg = segmentsRef.current[idx];
    const input = inputRef.current?.input;
    if (!seg || !input) return;
    input.focus();
    input.setSelectionRange(seg.start, seg.end);
  }, [displayValue]);

  /** 提交草稿:解析成功通知 onChange/onCommit,失败回弹 */
  const commitDraft = useCallback(
    (text: string) => {
      const parsed = parseText(text);
      if (parsed) {
        onChange?.(parsed);
        onCommit?.(parsed);
      }
    },
    [parseText, onChange, onCommit]
  );

  const resolveActiveSegIndex = useCallback((): number => {
    const segs = segmentsRef.current;
    if (segs.length === 0) return -1;
    if (activeSegRef.current >= 0 && activeSegRef.current < segs.length) {
      return activeSegRef.current;
    }
    const caret = inputRef.current?.input?.selectionStart ?? 0;
    const idx = segs.findIndex(s => caret >= s.start && caret <= s.end);
    return idx >= 0 ? idx : 0;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      const input = inputRef.current?.input;
      const caret = input?.selectionStart ?? 0;
      const segs = segmentsRef.current;
      const idx = segs.findIndex(s => caret >= s.start && caret <= s.end);
      if (idx >= 0) {
        setTimeout(() => focusSegment(idx), 0);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [focusSegment]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey || e.metaKey) return;
      const segs = segmentsRef.current;

      // 方向键:在段间移动
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (segs.length > 0) {
          e.preventDefault();
          const cur = resolveActiveSegIndex();
          const next =
            e.key === 'ArrowRight' ? Math.min(cur + 1, segs.length - 1) : Math.max(cur - 1, 0);
          focusSegment(next);
        }
        return;
      }

      // 数字输入:按段写入(覆盖式),支持首位定值跳段与溢出推入
      if (/^\d$/.test(e.key)) {
        e.preventDefault();
        const idx = resolveActiveSegIndex();
        if (idx < 0) return;
        const res = applyDigit(displayValue, segs, idx, e.key, caretOffsetRef.current);
        if (!res) {
          focusSegment(idx);
          return;
        }
        // 溢出推入链(如时 25 → 时 02,5 进入分)
        let curIdx = idx;
        let curRes = res;
        let chain = 0;
        while (curRes.overflowDigit && chain < 2 && curRes.nextSegmentIndex !== curIdx) {
          chain += 1;
          curIdx = curRes.nextSegmentIndex;
          const nextRes = applyDigit(curRes.text, segs, curIdx, curRes.overflowDigit, 0);
          if (!nextRes) break;
          curRes = nextRes;
        }
        setDraftText(curRes.text);
        if (curRes.committed) {
          focusSegment(curRes.nextSegmentIndex);
        } else if (chain > 0) {
          caretOffsetRef.current = 1;
          focusSegment(curIdx, true);
        } else {
          caretOffsetRef.current += 1;
          focusSegment(idx, true);
        }
        return;
      }

      // Backspace/Delete:清空当前段并选中,等待重输
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const idx = resolveActiveSegIndex();
        if (idx >= 0 && segs[idx]) {
          e.preventDefault();
          setDraftText(clearSegment(displayValue, segs[idx]));
          focusSegment(idx);
        }
        return;
      }

      // 其余可打印字符 → 阻止,保持段结构
      if (e.key.length === 1) {
        e.preventDefault();
        return;
      }

      // Enter:确认当前输入框 —— 提交草稿并失焦(输入内容生效)
      // 失焦后无输入框处于输入态,此时再次回车由面板层整体确认(confirmAll)
      if (e.key === 'Enter') {
        e.preventDefault();
        // 阻止冒泡,避免同一次回车同时触发面板层的整体确认
        e.stopPropagation();
        if (draftText !== null) {
          commitDraft(draftText);
          setDraftText(null);
        }
        activeSegRef.current = -1;
        caretOffsetRef.current = 0;
        inputRef.current?.input?.blur();
        return;
      }
    },
    [displayValue, draftText, focusSegment, resolveActiveSegIndex, commitDraft]
  );

  const handleBlur = useCallback(() => {
    if (draftText !== null) {
      commitDraft(draftText);
      setDraftText(null);
    }
    activeSegRef.current = -1;
    caretOffsetRef.current = 0;
  }, [draftText, commitDraft]);

  // 输入兜底回弹:所有输入应在 keyDown 拦截,onChange 仅应对异常写入
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const oldVal = draftText !== null ? draftText : displayValue;
      if (e.target.value !== oldVal) {
        setDraftText(oldVal);
        if (activeSegRef.current >= 0) {
          setTimeout(() => focusSegment(activeSegRef.current), 0);
        }
      }
    },
    [draftText, displayValue, focusSegment]
  );

  return (
    <Input
      ref={inputRef}
      value={draftText ?? displayValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onBlur={handleBlur}
      placeholder={placeholder || format}
      autoComplete="off"
      disabled={disabled}
      style={{ width: '100%', ...style }}
      className={className}
      {...rest}
    />
  );
};

export default SegmentedInput;
