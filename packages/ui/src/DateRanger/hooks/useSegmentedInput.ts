import { useRef, useCallback, useState, useMemo, useEffect } from 'react';
import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import moment from 'moment';
import type { InputRef } from '@oceanbase/design';

export interface UseSegmentedInputOptions {
  value?: [Dayjs | Moment | null, Dayjs | Moment | null];
  onChange?: (value: [Dayjs | Moment, Dayjs | Moment]) => void;
  format: string;
  baseFormat: string;
  isMoment?: boolean;
  isCn?: boolean;
  onClick?: () => void;
  locale?: string;
  open?: boolean; // 面板是否打开
}

export interface UseSegmentedInputReturn {
  inputRef: React.RefObject<InputRef>;
  isEditing: boolean;
  displayValue: string;
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleDoubleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  confirmPastedValue: () => void;
  hasPastedValue: boolean; // 是否有粘贴值
  getPastedValue: () => [Dayjs | Moment, Dayjs | Moment] | null; // 获取粘贴值
}

// 常量
const RANGE_SEPARATORS = [' ~ ', '~', ' - ', ' – ', ' — '];
const TIMEZONE_PATTERN = /(\s*\(?(?:UTC|GMT)[+-]?\d*\)?)\s*$/i;

// 格式化日期值，确保使用正确的 locale
const formatDateValue = (
  date: Dayjs | Moment | null | undefined,
  formatStr: string,
  isMoment: boolean,
  isCn: boolean
): string => {
  if (!date) return '';

  const locale = isCn ? 'zh-cn' : 'en';

  if (isMoment || moment.isMoment(date)) {
    return (date as Moment).locale(locale).format(formatStr);
  } else {
    const dayjsInstance = dayjs.isDayjs(date) ? date : dayjs(date);
    return dayjsInstance.locale(locale).format(formatStr);
  }
};

// 解析粘贴文本，提取开始和结束时间字符串
const parsePastedText = (text: string): [string, string] => {
  for (const sep of RANGE_SEPARATORS) {
    if (text.includes(sep)) {
      const parts = text.split(sep);
      if (parts.length === 2) {
        return [parts[0].trim(), parts[1].trim()];
      }
    }
  }
  // 如果没有找到分隔符，使用整个文本作为开始和结束时间
  return [text, text];
};

// 解析日期字符串
const parseDateString = (dateStr: string, formatStr: string, isMoment: boolean): Dayjs | Moment => {
  const strictParsed = isMoment
    ? moment(dateStr, formatStr, true)
    : dayjs(dateStr, formatStr, true);

  // 如果严格解析失败，尝试宽松解析
  if (strictParsed.isValid()) {
    return strictParsed;
  }

  return isMoment ? moment(dateStr) : dayjs(dateStr);
};

export const useSegmentedInput = (options: UseSegmentedInputOptions): UseSegmentedInputReturn => {
  const {
    value,
    onChange,
    format,
    baseFormat,
    isMoment = false,
    isCn = true,
    onClick,
    open = false,
  } = options;

  const inputRef = useRef<InputRef>(null);
  const [isEditing, setIsEditing] = useState(false);
  // 粘贴值：仅作为预览，只有确认后才触发 onChange
  const [pastedValue, setPastedValue] = useState<[Dayjs | Moment, Dayjs | Moment] | null>(null);

  // 根据语言环境设置分隔符
  const rangeSeparator = useMemo(() => (isCn ? ' ~ ' : ' - '), [isCn]);

  // 显示值：有粘贴值时显示粘贴值（预览），否则显示原始 value
  const [displayValue, setDisplayValue] = useState<string>('');

  // 同步更新显示值
  useEffect(() => {
    const displayDate = pastedValue || value;
    const startDate = displayDate?.[0];
    const endDate = displayDate?.[1];

    const startValue = formatDateValue(startDate, baseFormat, isMoment, isCn);
    const endValue = formatDateValue(endDate, format, isMoment, isCn);

    if (!startValue && !endValue) {
      setDisplayValue('');
    } else {
      setDisplayValue(`${startValue}${rangeSeparator}${endValue}`);
    }
  }, [pastedValue, value, baseFormat, format, rangeSeparator, isMoment, isCn]);

  // 当 value 更新为 pastedValue 时，清除 pastedValue（说明确定按钮已生效）
  useEffect(() => {
    if (pastedValue && value) {
      const isSameAsPasted =
        pastedValue[0]?.valueOf() === value[0]?.valueOf() &&
        pastedValue[1]?.valueOf() === value[1]?.valueOf();

      if (isSameAsPasted) {
        setPastedValue(null);
        setIsEditing(false);
      }
    }
  }, [value, pastedValue]);

  // 确认粘贴：触发 onChange，清除粘贴状态
  const confirmPastedValue = useCallback(() => {
    if (pastedValue) {
      onChange?.(pastedValue);
      setPastedValue(null);
      setIsEditing(false);
    }
  }, [pastedValue, onChange]);

  // 取消粘贴：清除粘贴值，回到初始值
  const cancelPastedValue = useCallback(() => {
    setPastedValue(null);
    setIsEditing(false);
    inputRef.current?.input?.blur();
  }, []);

  // 单击获取焦点
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsEditing(true);
      // 让 input 获得焦点
      setTimeout(() => {
        inputRef.current?.input?.focus();
      }, 0);
      onClick?.();
    },
    [onClick]
  );

  // 双击获取焦点并全选
  const handleDoubleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsEditing(true);
    inputRef.current?.input?.select();
  }, []);

  // 面板打开时，让 input 获得焦点
  useEffect(() => {
    if (open) {
      // 延迟获取焦点，确保面板已渲染
      const timer = setTimeout(() => {
        inputRef.current?.input?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // 检查焦点是否在面板内（参考 ant-design 的实现）
  const isFocusInPanel = useCallback((relatedTarget: HTMLElement | null): boolean => {
    if (!relatedTarget) return false;
    const panelElement = document.querySelector(
      '.ant-picker-dropdown, .ant-dropdown, [class*="ranger-picker-panel"]'
    );
    return panelElement ? panelElement.contains(relatedTarget) : false;
  }, []);

  // 失去焦点处理（如果焦点在面板内，直接返回，不处理）
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = e.relatedTarget as HTMLElement;

      // 不强制重新获取焦点，允许用户在面板中的 input 正常编辑
      if (isFocusInPanel(relatedTarget)) {
        return;
      }

      // 焦点不在面板内，清除粘贴值
      // 但是，如果 value 已经更新为 pastedValue，说明确定按钮已经生效，不应该清除
      if (pastedValue) {
        // 检查 value 是否已经更新为 pastedValue
        const isValueUpdated =
          value &&
          pastedValue[0]?.valueOf() === value[0]?.valueOf() &&
          pastedValue[1]?.valueOf() === value[1]?.valueOf();

        // 只有当 value 还没有更新为 pastedValue 时，才清除 pastedValue
        // 这样可以避免在确定按钮点击后，失去焦点时清除已确认的值
        if (!isValueUpdated) {
          setPastedValue(null);
          setIsEditing(false);
        }
      }
    },
    [isFocusInPanel, pastedValue, value]
  );

  // 解析粘贴文本并设置预览值
  const processPaste = useCallback(
    async (pastedText: string) => {
      if (!pastedText.trim()) return;

      const [startStr, endStr] = parsePastedText(pastedText.trim());
      const formatWithoutTimezone = format.replace(TIMEZONE_PATTERN, '');
      const parsedStart = parseDateString(startStr, baseFormat, isMoment);
      const parsedEnd = parseDateString(endStr, formatWithoutTimezone, isMoment);

      if (parsedStart.isValid() && parsedEnd.isValid()) {
        setPastedValue([parsedStart, parsedEnd] as [Dayjs | Moment, Dayjs | Moment]);
        setIsEditing(true);
      }
    },
    [isMoment, format, baseFormat]
  );

  // 键盘事件：Ctrl+V 粘贴，Enter 确认，Escape 取消
  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Ctrl+V / Cmd+V 粘贴
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        e.preventDefault();
        try {
          const text = await navigator.clipboard.readText();
          await processPaste(text);
        } catch (error) {
          console.warn('Failed to read clipboard:', error);
        }
        return;
      }

      if (!pastedValue) return;

      // Enter 确认粘贴
      if (e.key === 'Enter') {
        e.preventDefault();
        confirmPastedValue();
      }
      // Escape 取消粘贴
      else if (e.key === 'Escape') {
        e.preventDefault();
        cancelPastedValue();
      }
    },
    [pastedValue, confirmPastedValue, cancelPastedValue, processPaste]
  );
  // 获取粘贴值
  const getPastedValue = useCallback(() => {
    return pastedValue;
  }, [pastedValue]);

  return {
    inputRef,
    isEditing,
    displayValue,
    handleClick,
    handleDoubleClick,
    handleBlur,
    handleKeyDown,
    confirmPastedValue,
    hasPastedValue: !!pastedValue,
    getPastedValue,
  };
};

export default useSegmentedInput;
