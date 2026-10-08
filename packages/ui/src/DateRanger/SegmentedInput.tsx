import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';
import { Input } from '@oceanbase/design';
import type { InputProps, InputRef } from '@oceanbase/design';
import { applyDigit, buildSegments, clearSegment } from './hooks/segments';

// 严格解析依赖 customParseFormat:未注册时 dayjs(text, format, true) 会忽略 format,
// 退化成原生 Date 解析,识别不出非法日期。
dayjs.extend(customParseFormat);

export interface SegmentedInputProps extends Omit<
  InputProps,
  'value' | 'onChange' | 'readOnly' | 'onKeyDown' | 'onClick' | 'onBlur'
> {
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

/** 把表单值格式化成显示文本;isMoment 或传入的本身就是 moment 对象时用 moment 格式化 */
function formatValue(
  value: Dayjs | Moment | null | undefined,
  format: string,
  isMoment: boolean
): string {
  if (!value) return '';
  if (isMoment || moment.isMoment(value)) return (value as Moment).format(format);
  return (dayjs.isDayjs(value) ? (value as Dayjs) : dayjs(value)).format(format);
}

/**
 * 单值分段日期/时间输入框:
 *  - 点击定位到所在段(年/月/日/时/分/秒),逐段覆盖输入
 *  - 数字输入智能限制:首位达上限(时3/分秒6/月2/日4)直接定值 0X 并跳下一段;
 *    第二位使整体超限(如时 25)时,当前段以首位补零定值,该数字自动溢出推入下一段
 *  - 方向键移段、Backspace/Delete 清段、Enter/失焦提交(非法则回弹)
 * 分段解析与数字输入规则见 hooks/segments。
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
  // 编辑态草稿:非空时接管显示,提交或回弹后重新由 value 派生显示值
  const [draftText, setDraftText] = useState<string | null>(null);
  // 草稿的同步镜像:回车提交后组件会紧接着 blur,
  // blur 处理器必须读到「已提交」的最新状态,否则同一次回车会因为 state 尚未刷新而重复提交一次
  const draftTextRef = useRef<string | null>(null);
  const updateDraft = useCallback((text: string | null) => {
    draftTextRef.current = text;
    setDraftText(text);
  }, []);

  // 显示文本与段映射都由 value/format 派生,不额外存放 state,避免两份状态漂移
  const displayValue = draftText ?? formatValue(value, format, isMoment);
  const segments = useMemo(() => buildSegments(displayValue, format), [displayValue, format]);

  // 当前活动段与段内偏移,只在输入过程中使用
  const activeSegRef = useRef<number>(-1);
  const caretOffsetRef = useRef<number>(0);

  /**
   * 解析草稿文本:只接受严格匹配 format、且真实存在的日期时间。
   * 不做宽松兜底解析 —— 宽松解析会把非法输入静默改写成另一个合法日期
   * (如 2026-02-31 → 2026-03-03),用户无法察觉自己输入的日期已被篡改。
   * 解析失败返回 null,由调用方回弹到提交前的值。
   */
  const parseText = useCallback(
    (text: string): Dayjs | Moment | null => {
      const parsed = isMoment ? moment(text, format, true) : dayjs(text, format, true);
      return parsed.isValid() ? parsed : null;
    },
    [isMoment, format]
  );

  const focusSegment = useCallback(
    (index: number, keepOffset = false) => {
      if (index < 0 || index >= segments.length) return;
      if (!keepOffset) caretOffsetRef.current = 0;
      activeSegRef.current = index;
      const seg = segments[index];
      const input = inputRef.current?.input;
      if (input) {
        input.focus();
        input.setSelectionRange(seg.start, seg.end);
      }
    },
    [segments]
  );

  // 文本变化后 input.value 会被重写并丢掉选区,这里恢复当前活动段的选区
  useLayoutEffect(() => {
    const idx = activeSegRef.current;
    if (idx < 0) return;
    const seg = segments[idx];
    const input = inputRef.current?.input;
    if (!seg || !input) return;
    input.focus();
    input.setSelectionRange(seg.start, seg.end);
  }, [segments]);

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
    if (segments.length === 0) return -1;
    if (activeSegRef.current >= 0 && activeSegRef.current < segments.length) {
      return activeSegRef.current;
    }
    const caret = inputRef.current?.input?.selectionStart ?? 0;
    const idx = segments.findIndex(seg => caret >= seg.start && caret <= seg.end);
    return idx >= 0 ? idx : 0;
  }, [segments]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      const caret = inputRef.current?.input?.selectionStart ?? 0;
      const idx = segments.findIndex(seg => caret >= seg.start && caret <= seg.end);
      if (idx >= 0) {
        setTimeout(() => focusSegment(idx), 0);
      }
    },
    [focusSegment, segments]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey || e.metaKey) return;

      // 方向键:在段间移动
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (segments.length > 0) {
          e.preventDefault();
          const cur = resolveActiveSegIndex();
          const next =
            e.key === 'ArrowRight' ? Math.min(cur + 1, segments.length - 1) : Math.max(cur - 1, 0);
          focusSegment(next);
        }
        return;
      }

      // 数字输入:按段写入(覆盖式),支持首位定值跳段与溢出推入
      if (/^\d$/.test(e.key)) {
        e.preventDefault();
        const idx = resolveActiveSegIndex();
        if (idx < 0) return;
        const res = applyDigit(displayValue, segments, idx, e.key, caretOffsetRef.current);
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
          const nextRes = applyDigit(curRes.text, segments, curIdx, curRes.overflowDigit, 0);
          if (!nextRes) break;
          curRes = nextRes;
        }
        updateDraft(curRes.text);
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
        if (idx >= 0 && segments[idx]) {
          e.preventDefault();
          updateDraft(clearSegment(displayValue, segments[idx]));
          focusSegment(idx);
        }
        return;
      }

      // 其余可打印字符 → 阻止,保持段结构
      if (e.key.length === 1) {
        e.preventDefault();
        return;
      }

      // Enter:确认当前输入框 —— 提交草稿并失焦(输入内容生效)。
      // preventDefault 同时告知面板层「这次回车已被消费」,不会再触发整体确认;
      // 失焦后无输入框处于输入态,此时再次回车由面板层整体确认(confirmAll)
      if (e.key === 'Enter') {
        e.preventDefault();
        const draft = draftTextRef.current;
        // 先清空草稿再 blur:blur 处理器据此判断无需再提交,避免同一次回车提交两次
        updateDraft(null);
        if (draft !== null) {
          commitDraft(draft);
        }
        activeSegRef.current = -1;
        caretOffsetRef.current = 0;
        inputRef.current?.input?.blur();
        return;
      }
    },
    [displayValue, segments, focusSegment, resolveActiveSegIndex, commitDraft, updateDraft]
  );

  const handleBlur = useCallback(() => {
    const draft = draftTextRef.current;
    updateDraft(null);
    if (draft !== null) {
      commitDraft(draft);
    }
    activeSegRef.current = -1;
    caretOffsetRef.current = 0;
  }, [commitDraft, updateDraft]);

  return (
    <Input
      ref={inputRef}
      // 只读:整串内容由按键处理逐段写入,禁止浏览器直接改写 input.value
      readOnly
      value={displayValue}
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
