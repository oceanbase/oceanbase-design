import { useRef, useCallback, useState, useMemo } from 'react';
import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import dayjs from 'dayjs';
import moment from 'moment';
import type { InputRef } from '@oceanbase/design';

// 日期时间段的类型定义
export type SegmentType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export type RangeType = 'start' | 'end';

export interface Segment {
  type: SegmentType;
  range: RangeType;
  start: number;
  end: number;
  value: string;
  min: number;
  max: number;
  padLength: number;
}

export interface UseSegmentedInputOptions {
  value?: [Dayjs | Moment | null, Dayjs | Moment | null];
  onChange?: (value: [Dayjs | Moment, Dayjs | Moment]) => void;
  format: string;
  baseFormat: string;
  isMoment?: boolean;
  isCn?: boolean;
  onClick?: () => void;
}

export interface UseSegmentedInputReturn {
  inputRef: React.RefObject<InputRef>;
  isEditing: boolean;
  displayValue: string;
  currentSegment: Segment | null;
  allSegments: Segment[];
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleDoubleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

// 分隔符
const RANGE_SEPARATOR = ' ~ ';

// 段落配置表
const SEGMENT_CONFIG: Record<
  string,
  { type: SegmentType; length: number; min: number; max: number }
> = {
  YYYY: { type: 'year', length: 4, min: 1900, max: 2100 },
  MM: { type: 'month', length: 2, min: 1, max: 12 },
  DD: { type: 'day', length: 2, min: 1, max: 31 },
  HH: { type: 'hour', length: 2, min: 0, max: 23 },
  mm: { type: 'minute', length: 2, min: 0, max: 59 },
  ss: { type: 'second', length: 2, min: 0, max: 59 },
};

// 解析单个日期时间字符串的段落 - 根据 format 动态计算
const parseDateTimeSegments = (
  format: string,
  dateValue: string,
  rangeType: RangeType,
  offset: number
): Segment[] => {
  if (!dateValue) return [];

  const segments: Segment[] = [];
  const patterns = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss'];

  for (const pattern of patterns) {
    const formatIndex = format.indexOf(pattern);
    if (formatIndex === -1) continue;

    const config = SEGMENT_CONFIG[pattern];
    const valueStart = formatIndex;
    const valueEnd = formatIndex + config.length;

    segments.push({
      type: config.type,
      range: rangeType,
      start: offset + valueStart,
      end: offset + valueEnd,
      value: dateValue.substring(valueStart, valueEnd),
      min: config.min,
      max: config.max,
      padLength: config.length,
    });
  }

  segments.sort((a, b) => a.start - b.start);
  return segments;
};

// 根据光标位置找到当前段落
const findSegmentByPosition = (segments: Segment[], position: number): Segment | null => {
  for (const segment of segments) {
    if (position >= segment.start && position <= segment.end) {
      return segment;
    }
  }
  let minDistance = Infinity;
  let closestSegment: Segment | null = null;
  for (const segment of segments) {
    const distance = Math.min(Math.abs(position - segment.start), Math.abs(position - segment.end));
    if (distance < minDistance) {
      minDistance = distance;
      closestSegment = segment;
    }
  }
  return closestSegment;
};

// 获取下一个段落
const getNextSegment = (segments: Segment[], currentSegment: Segment): Segment | null => {
  const currentIndex = segments.findIndex(
    s => s.range === currentSegment.range && s.type === currentSegment.type
  );
  if (currentIndex < segments.length - 1) {
    return segments[currentIndex + 1];
  }
  return null;
};

// 获取上一个段落
const getPrevSegment = (segments: Segment[], currentSegment: Segment): Segment | null => {
  const currentIndex = segments.findIndex(
    s => s.range === currentSegment.range && s.type === currentSegment.type
  );
  if (currentIndex > 0) {
    return segments[currentIndex - 1];
  }
  return null;
};

export const useSegmentedInput = (options: UseSegmentedInputOptions): UseSegmentedInputReturn => {
  const { value, onChange, format, baseFormat, isMoment = false, isCn = true, onClick } = options;

  const inputRef = useRef<InputRef>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [inputBuffer, setInputBuffer] = useState<string>('');
  const [currentSegmentKey, setCurrentSegmentKey] = useState<string | null>(null);

  // 格式化日期值为字符串
  const formatValue = useCallback(
    (v: Dayjs | Moment | null, includeTimezone: boolean = true): string => {
      if (!v) return '';
      const formatToUse = includeTimezone ? format : baseFormat;
      return v.format(formatToUse);
    },
    [format, baseFormat]
  );

  // 开始时间不包含时区后缀，结束时间包含
  const startValue = useMemo(() => formatValue(value?.[0] || null, false), [value, formatValue]);
  const endValue = useMemo(() => formatValue(value?.[1] || null, true), [value, formatValue]);

  // 合并后的显示值
  const displayValue = useMemo(() => {
    if (!startValue && !endValue) return '';
    return `${startValue}${RANGE_SEPARATOR}${endValue}`;
  }, [startValue, endValue]);

  // 解析所有段落
  const allSegments = useMemo(() => {
    const startSegments = parseDateTimeSegments(baseFormat, startValue, 'start', 0);
    const endOffset = startValue.length + RANGE_SEPARATOR.length;
    const endSegments = parseDateTimeSegments(format, endValue, 'end', endOffset);
    return [...startSegments, ...endSegments];
  }, [baseFormat, format, startValue, endValue]);

  // 动态获取当前段落
  const currentSegment = useMemo(() => {
    if (!currentSegmentKey) return null;
    return allSegments.find(s => `${s.range}-${s.type}` === currentSegmentKey) || null;
  }, [currentSegmentKey, allSegments]);

  // 创建新的日期对象
  const createDate = useCallback(
    (dateStr: string, rangeType: RangeType) => {
      const formatToUse = rangeType === 'start' ? baseFormat : format;
      if (isMoment) {
        return moment(dateStr, formatToUse);
      }
      return dayjs(dateStr, formatToUse);
    },
    [isMoment, format, baseFormat]
  );

  // 更新日期值
  const updateValue = useCallback(
    (segment: Segment, newSegmentValue: string) => {
      const which = segment.range;
      const currentDateValue = which === 'start' ? startValue : endValue;
      const paddedValue = newSegmentValue.padStart(segment.padLength, '0');

      const baseOffset = which === 'start' ? 0 : startValue.length + RANGE_SEPARATOR.length;
      const localStart = segment.start - baseOffset;
      const localEnd = segment.end - baseOffset;

      const newDateValue =
        currentDateValue.substring(0, localStart) +
        paddedValue +
        currentDateValue.substring(localEnd);

      const newDate = createDate(newDateValue, which);

      if (newDate.isValid()) {
        const newRange: [Dayjs | Moment, Dayjs | Moment] =
          which === 'start' ? [newDate, value?.[1] || newDate] : [value?.[0] || newDate, newDate];
        onChange?.(newRange as [Dayjs | Moment, Dayjs | Moment]);
      }
    },
    [startValue, endValue, value, onChange, createDate]
  );

  // 选中指定段落
  const selectSegment = useCallback((segment: Segment) => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current?.input?.setSelectionRange(segment.start, segment.end);

      setCurrentSegmentKey(`${segment.range}-${segment.type}`);
      setInputBuffer('');
    }
  }, []);

  // 处理单击事件
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsEditing(true);
      onClick?.();

      const cursorPos = inputRef.current?.input?.selectionStart || 0;
      const segment = findSegmentByPosition(allSegments, cursorPos);
      if (segment) {
        selectSegment(segment);
      }
    },
    [allSegments, selectSegment, onClick]
  );

  // 处理双击事件
  const handleDoubleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
    setCurrentSegmentKey(null);
    inputRef.current?.input?.select();
  }, []);

  // 处理键盘输入
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!currentSegment) return;

      const key = e.key;

      // 处理数字输入
      if (/^\d$/.test(key)) {
        e.preventDefault();
        const newBuffer = inputBuffer + key;
        setInputBuffer(newBuffer);

        const numValue = parseInt(newBuffer, 10);
        const shouldJump =
          newBuffer.length >= currentSegment.padLength || numValue * 10 > currentSegment.max;

        if (shouldJump) {
          const clampedValue = Math.max(currentSegment.min, Math.min(currentSegment.max, numValue));
          updateValue(currentSegment, String(clampedValue));

          const nextSegment = getNextSegment(allSegments, currentSegment);
          if (nextSegment) {
            setTimeout(() => selectSegment(nextSegment), 0);
          }
        } else {
          updateValue(currentSegment, newBuffer);
        }
        return;
      }

      // 处理左右箭头
      if (key === 'ArrowLeft') {
        e.preventDefault();
        const prevSegment = getPrevSegment(allSegments, currentSegment);
        if (prevSegment) {
          selectSegment(prevSegment);
        }
        return;
      }

      if (key === 'ArrowRight') {
        e.preventDefault();
        const nextSegment = getNextSegment(allSegments, currentSegment);
        if (nextSegment) {
          selectSegment(nextSegment);
        }
        return;
      }

      // 处理上下箭头调整数值
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        e.preventDefault();
        const currentNum = parseInt(currentSegment.value, 10);
        const delta = key === 'ArrowUp' ? 1 : -1;
        let newNum = currentNum + delta;

        if (newNum > currentSegment.max) {
          newNum = currentSegment.min;
        } else if (newNum < currentSegment.min) {
          newNum = currentSegment.max;
        }

        updateValue(currentSegment, String(newNum));

        setTimeout(() => {
          if (inputRef.current?.input && currentSegment) {
            inputRef.current.input.setSelectionRange(currentSegment.start, currentSegment.end);
          }
        }, 0);
        return;
      }

      // 处理 Tab 键
      if (key === 'Tab') {
        const nextSegment = e.shiftKey
          ? getPrevSegment(allSegments, currentSegment)
          : getNextSegment(allSegments, currentSegment);

        if (nextSegment) {
          e.preventDefault();
          selectSegment(nextSegment);
        }
        return;
      }

      // 阻止删除和其他非法输入
      if (
        key === 'Backspace' ||
        key === 'Delete' ||
        (!e.ctrlKey && !e.metaKey && key.length === 1 && !/\d/.test(key))
      ) {
        e.preventDefault();
        return;
      }
    },
    [currentSegment, inputBuffer, allSegments, selectSegment, updateValue]
  );

  // 处理失焦事件
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (currentSegment && inputBuffer) {
        const numValue = parseInt(inputBuffer, 10);
        const clampedValue = Math.max(currentSegment.min, Math.min(currentSegment.max, numValue));
        updateValue(currentSegment, String(clampedValue));
      }

      setIsEditing(false);
      setCurrentSegmentKey(null);
      setInputBuffer('');
    },
    [currentSegment, inputBuffer, updateValue]
  );

  // 处理粘贴事件
  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text').trim();

      if (!pastedText) return;

      const separators = [' ~ ', '~', ' - ', ' – ', ' — '];
      let startStr = '';
      let endStr = '';

      for (const sep of separators) {
        if (pastedText.includes(sep)) {
          const parts = pastedText.split(sep);
          if (parts.length === 2) {
            startStr = parts[0].trim();
            endStr = parts[1].trim();
            break;
          }
        }
      }

      if (!startStr && !endStr) {
        startStr = pastedText;
        endStr = pastedText;
      }

      const formats = [
        'YYYY-MM-DD HH:mm:ss',
        'YYYY-MM-DD HH:mm',
        'YYYY/MM/DD HH:mm:ss',
        'YYYY/MM/DD HH:mm',
        'MM/DD/YYYY HH:mm:ss',
        'MM/DD/YYYY HH:mm',
        'YYYY-MM-DD',
        'YYYY/MM/DD',
        'MM/DD/YYYY',
      ];

      let parsedStart: Dayjs | Moment | null = null;
      let parsedEnd: Dayjs | Moment | null = null;

      for (const fmt of formats) {
        const tryStart = isMoment ? moment(startStr, fmt, true) : dayjs(startStr, fmt, true);
        if (tryStart.isValid()) {
          parsedStart = tryStart;
          break;
        }
      }

      for (const fmt of formats) {
        const tryEnd = isMoment ? moment(endStr, fmt, true) : dayjs(endStr, fmt, true);
        if (tryEnd.isValid()) {
          parsedEnd = tryEnd;
          break;
        }
      }

      if (parsedStart && parsedEnd) {
        onChange?.([parsedStart, parsedEnd] as [Dayjs | Moment, Dayjs | Moment]);
      } else if (parsedStart) {
        onChange?.([parsedStart, value?.[1] || parsedStart] as [Dayjs | Moment, Dayjs | Moment]);
      } else if (parsedEnd) {
        onChange?.([value?.[0] || parsedEnd, parsedEnd] as [Dayjs | Moment, Dayjs | Moment]);
      }
    },
    [isMoment, onChange, value]
  );

  return {
    inputRef,
    isEditing,
    displayValue,
    currentSegment,
    allSegments,
    handleClick,
    handleDoubleClick,
    handleKeyDown,
    handleBlur,
    handlePaste,
  };
};

export default useSegmentedInput;
