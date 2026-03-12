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

// 分隔符（根据语言模式动态决定）
const getRangeSeparator = (isCn: boolean) => (isCn ? ' ~ ' : ' - ');

// 段落配置表
const SEGMENT_CONFIG: Record<string, { type: SegmentType; min: number; max: number }> = {
  YYYY: { type: 'year', min: 1900, max: 2100 },
  MM: { type: 'month', min: 1, max: 12 },
  MMM: { type: 'month', min: 1, max: 12 },
  DD: { type: 'day', min: 1, max: 31 },
  HH: { type: 'hour', min: 0, max: 23 },
  mm: { type: 'minute', min: 0, max: 59 },
  ss: { type: 'second', min: 0, max: 59 },
};

// 月份缩写映射
const MONTH_ABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// 粘贴支持的分隔符
const PASTE_SEPARATORS = [' ~ ', '~', ' - ', ' – ', ' — '] as const;

// 月份总数
const MONTH_COUNT = 12;

/**
 * 查找月份缩写的索引
 */
const findMonthIndex = (monthStr: string): number => {
  return MONTH_ABBR.findIndex(abbr => abbr.toLowerCase() === monthStr.toLowerCase());
};

/**
 * 格式化月份显示值（MMM格式）
 */
const formatMonthDisplay = (value: string, isValid: boolean): string => {
  if (isValid && value.length === 3) {
    const monthIndex = findMonthIndex(value);
    return monthIndex !== -1 ? MONTH_ABBR[monthIndex] : value;
  }
  return value.toLowerCase().padEnd(3, ' ').slice(0, 3);
};

/**
 * 使用正确的 locale 解析日期
 * 注意：dayjs 或 moment 的 locale 应该在组件初始化时已经设置好
 * 这里只需要根据 format 动态解析即可
 */
const parseDateWithLocale = (
  dateStr: string,
  format: string,
  isMoment: boolean
): Dayjs | Moment | null => {
  if (isMoment) {
    return moment(dateStr, format, true);
  }
  // 使用当前已设置的 locale 解析
  return dayjs(dateStr, format, true);
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
  // 优先匹配 MMM，避免 MM 误匹配
  // 注意：顺序很重要，MMM 必须在 MM 之前，否则 MM 会匹配到 MMM 的开头
  const patterns = ['YYYY', 'MMM', 'MM', 'DD', 'HH', 'mm', 'ss'];

  // 记录已经使用的位置，避免重复匹配
  const usedPositions = new Set<number>();

  for (const pattern of patterns) {
    const formatIndex = format.indexOf(pattern);
    if (formatIndex === -1) continue;

    // 检查这个位置是否已经被使用（避免 MM 匹配到 MMM 的位置）
    if (usedPositions.has(formatIndex)) continue;

    // 标记这个位置已被使用
    usedPositions.add(formatIndex);

    const config = SEGMENT_CONFIG[pattern];
    const patternLength = pattern.length; // 动态计算 pattern 的长度
    const valueStart = formatIndex;
    const valueEnd = formatIndex + patternLength;

    let segmentValue = dateValue.substring(valueStart, valueEnd);

    // 如果是 MMM 格式，需要转换为数字月份以便编辑
    if (pattern === 'MMM') {
      const monthIndex = findMonthIndex(segmentValue);
      if (monthIndex !== -1) {
        segmentValue = String(monthIndex + 1).padStart(2, '0');
      }
    }

    segments.push({
      type: config.type,
      range: rangeType,
      start: offset + valueStart,
      end: offset + valueEnd,
      value: segmentValue,
      min: config.min,
      max: config.max,
      padLength: pattern === 'MMM' ? 2 : patternLength, // MMM 编辑时使用2位数字
    });
  }

  segments.sort((a, b) => a.start - b.start);
  return segments;
};

/**
 * 根据光标位置找到当前段落
 */
const findSegmentByPosition = (segments: Segment[], position: number): Segment | null => {
  // 优先查找包含光标位置的段落
  const exactMatch = segments.find(s => position >= s.start && position <= s.end);
  if (exactMatch) return exactMatch;

  // 如果没有精确匹配，查找最近的段落
  return segments.reduce<Segment | null>((closest, segment) => {
    if (!closest) return segment;
    const currentDistance = Math.min(
      Math.abs(position - segment.start),
      Math.abs(position - segment.end)
    );
    const closestDistance = Math.min(
      Math.abs(position - closest.start),
      Math.abs(position - closest.end)
    );
    return currentDistance < closestDistance ? segment : closest;
  }, null);
};

/**
 * 获取相邻段落（下一个或上一个）
 */
const getAdjacentSegment = (
  segments: Segment[],
  currentSegment: Segment,
  direction: 'next' | 'prev'
): Segment | null => {
  // 只考虑同一个 range 内的 segments，并排序
  const sameRangeSegments = segments
    .filter(s => s.range === currentSegment.range)
    .sort((a, b) => a.start - b.start);

  // 使用 start 和 end 位置来精确查找当前 segment
  const currentIndex = sameRangeSegments.findIndex(
    s =>
      s.start === currentSegment.start &&
      s.end === currentSegment.end &&
      s.type === currentSegment.type
  );

  if (currentIndex === -1) return null;

  let targetSegment: Segment | null = null;
  if (direction === 'next') {
    targetSegment =
      currentIndex < sameRangeSegments.length - 1 ? sameRangeSegments[currentIndex + 1] : null;
  } else {
    targetSegment = currentIndex > 0 ? sameRangeSegments[currentIndex - 1] : null;
  }

  // 从原始 segments 数组中查找并返回相同的 segment 对象
  if (targetSegment) {
    return (
      segments.find(
        s =>
          s.start === targetSegment!.start &&
          s.end === targetSegment!.end &&
          s.range === targetSegment!.range &&
          s.type === targetSegment!.type
      ) || targetSegment
    );
  }

  return null;
};

/**
 * 获取跨 range 的 segment（当当前 range 内没有下一个/上一个 segment 时）
 */
const getCrossRangeSegment = (
  segments: Segment[],
  currentSegment: Segment,
  direction: 'next' | 'prev'
): Segment | null => {
  if (direction === 'next' && currentSegment.range === 'start') {
    // 从开始时间的最后一个 segment 切换到结束时间的第一个 segment
    const endSegments = segments.filter(s => s.range === 'end').sort((a, b) => a.start - b.start);
    return endSegments.length > 0 ? endSegments[0] : null;
  }

  if (direction === 'prev' && currentSegment.range === 'end') {
    // 从结束时间的第一个 segment 切换到开始时间的最后一个 segment
    const startSegments = segments
      .filter(s => s.range === 'start')
      .sort((a, b) => a.start - b.start);
    return startSegments.length > 0 ? startSegments[startSegments.length - 1] : null;
  }

  return null;
};

export const useSegmentedInput = (options: UseSegmentedInputOptions): UseSegmentedInputReturn => {
  const { value, onChange, format, baseFormat, isMoment = false, isCn = true, onClick } = options;

  const inputRef = useRef<InputRef>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [inputBuffer, setInputBuffer] = useState<string>('');
  const [currentSegmentKey, setCurrentSegmentKey] = useState<string | null>(null);
  // 保存初始值，用于失焦时恢复
  const initialValueRef = useRef<[Dayjs | Moment | null, Dayjs | Moment | null] | null>(null);
  // 临时显示值，用于输入过程中显示
  const [tempDisplayValue, setTempDisplayValue] = useState<string | null>(null);

  /**
   * 格式化日期值为字符串
   */
  const formatValue = useCallback(
    (v: Dayjs | Moment | null, includeTimezone: boolean = true): string => {
      if (!v) return '';
      const formatToUse = includeTimezone ? format : baseFormat;
      // 确保使用正确的 locale 格式化（特别是对于 MMM 格式）
      const localeName = isCn ? 'zh-cn' : 'en';
      if (isMoment) {
        return (v as Moment).locale(localeName).format(formatToUse);
      } else {
        return (v as Dayjs).locale(localeName).format(formatToUse);
      }
    },
    [format, baseFormat, isCn, isMoment]
  );

  // 开始时间不包含时区后缀，结束时间包含
  const startValue = useMemo(() => formatValue(value?.[0] ?? null, false), [value, formatValue]);
  const endValue = useMemo(() => formatValue(value?.[1] ?? null, true), [value, formatValue]);

  // 获取分隔符
  const rangeSeparator = useMemo(() => getRangeSeparator(isCn), [isCn]);

  // 合并后的显示值
  const displayValue = useMemo(() => {
    // 如果有临时显示值，优先使用临时值
    if (tempDisplayValue !== null) {
      return tempDisplayValue;
    }
    if (!startValue && !endValue) return '';
    return `${startValue}${rangeSeparator}${endValue}`;
  }, [startValue, endValue, tempDisplayValue, rangeSeparator]);

  // 解析所有段落
  const allSegments = useMemo(() => {
    const startSegments = parseDateTimeSegments(baseFormat, startValue, 'start', 0);
    const endOffset = startValue.length + rangeSeparator.length;
    const endSegments = parseDateTimeSegments(format, endValue, 'end', endOffset);
    return [...startSegments, ...endSegments];
  }, [baseFormat, format, startValue, endValue, rangeSeparator]);

  // 动态获取当前段落
  const currentSegment = useMemo(() => {
    if (!currentSegmentKey) return null;
    return allSegments.find(s => `${s.range}-${s.type}` === currentSegmentKey) || null;
  }, [currentSegmentKey, allSegments]);

  /**
   * 更新日期值（统一处理 MMM 和普通格式）
   */
  const updateDateValue = useCallback(
    (
      segment: Segment,
      segmentDisplayValue: string,
      formatToUse: string,
      currentDateValue: string,
      localStart: number,
      localEnd: number,
      isValid: boolean = true
    ) => {
      const newDateValue =
        currentDateValue.substring(0, localStart) +
        segmentDisplayValue +
        currentDateValue.substring(localEnd);

      if (!isValid) {
        // 输入过程中，更新临时显示值
        const which = segment.range;
        const separator = getRangeSeparator(isCn);
        const newDisplay =
          which === 'start'
            ? `${newDateValue}${separator}${endValue}`
            : `${startValue}${separator}${newDateValue}`;
        setTempDisplayValue(newDisplay);
        return;
      }

      // 输入有效，更新日期值
      // 使用 parseDateWithLocale 根据 format 动态解析（自动处理 MMM 格式）
      const newDate = parseDateWithLocale(newDateValue, formatToUse, isMoment);

      if (newDate && newDate.isValid()) {
        // 创建新的日期范围值
        const fallbackDate = newDate;
        const newRange: [Dayjs | Moment, Dayjs | Moment] =
          segment.range === 'start'
            ? [newDate, value?.[1] ?? fallbackDate]
            : [value?.[0] ?? fallbackDate, newDate];
        onChange?.(newRange as [Dayjs | Moment, Dayjs | Moment]);
        setTempDisplayValue(null);
      }
    },
    [startValue, endValue, value, onChange, isMoment, isCn]
  );

  /**
   * 更新日期值
   */
  const updateValue = useCallback(
    (segment: Segment, newSegmentValue: string, isValid: boolean = true) => {
      const which = segment.range;
      const formatToUse = which === 'start' ? baseFormat : format;
      const currentDateValue = which === 'start' ? startValue : endValue;
      const separator = getRangeSeparator(isCn);
      const baseOffset = which === 'start' ? 0 : startValue.length + separator.length;
      const localStart = segment.start - baseOffset;
      const localEnd = segment.end - baseOffset;

      const isMonthMMM = segment.type === 'month' && formatToUse.includes('MMM');
      const segmentDisplayValue = isMonthMMM
        ? formatMonthDisplay(
            newSegmentValue,
            isValid && findMonthIndex(newSegmentValue) !== -1 && newSegmentValue.length === 3
          )
        : newSegmentValue.padStart(segment.padLength, '0');

      // 对于 MMM 格式，如果输入未完成，标记为无效
      const finalIsValid = isMonthMMM
        ? isValid && findMonthIndex(newSegmentValue) !== -1 && newSegmentValue.length === 3
        : isValid;

      updateDateValue(
        segment,
        segmentDisplayValue,
        formatToUse,
        currentDateValue,
        localStart,
        localEnd,
        finalIsValid
      );
    },
    [startValue, endValue, baseFormat, format, updateDateValue, isCn]
  );

  /**
   * 保存初始值（如果尚未保存）
   */
  const saveInitialValue = useCallback(() => {
    if (!initialValueRef.current && value) {
      initialValueRef.current = [value[0], value[1]];
    }
  }, [value]);

  /**
   * 重置编辑状态
   */
  const resetEditingState = useCallback(() => {
    setIsEditing(false);
    setCurrentSegmentKey(null);
    setInputBuffer('');
    setTempDisplayValue(null);
    initialValueRef.current = null;
  }, []);

  // 选中指定段落
  const selectSegment = useCallback(
    (segment: Segment) => {
      if (inputRef.current && inputRef.current.input) {
        saveInitialValue();
        inputRef.current.focus();

        // 确保 segment 的位置不超过显示值的长度，并且 end > start
        const currentValue = inputRef.current.input.value || displayValue;
        const maxLength = currentValue.length;
        const safeStart = Math.max(0, Math.min(segment.start, maxLength));
        const safeEnd = Math.max(safeStart + 1, Math.min(segment.end, maxLength));

        // 确保选中的位置有效
        if (safeStart < maxLength && safeEnd <= maxLength && safeEnd > safeStart) {
          inputRef.current.input.setSelectionRange(safeStart, safeEnd);
          setCurrentSegmentKey(`${segment.range}-${segment.type}`);
          setInputBuffer('');
          setTempDisplayValue(null);
        }
      }
    },
    [saveInitialValue, displayValue]
  );

  // 处理单击事件
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsEditing(true);
      saveInitialValue();
      onClick?.();

      const cursorPos = inputRef.current?.input?.selectionStart || 0;
      const segment = findSegmentByPosition(allSegments, cursorPos);
      if (segment) {
        selectSegment(segment);
      }
    },
    [allSegments, selectSegment, onClick, saveInitialValue]
  );

  // 处理双击事件
  const handleDoubleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
    setCurrentSegmentKey(null);
    inputRef.current?.input?.select();
  }, []);

  /**
   * 处理月份 MMM 格式的字母输入
   */
  const handleMonthMMMInput = useCallback(
    (key: string) => {
      const newBuffer = (inputBuffer + key).toLowerCase().slice(0, 3);
      setInputBuffer(newBuffer);

      if (newBuffer.length === 3) {
        const monthIndex = findMonthIndex(newBuffer);
        if (monthIndex !== -1) {
          updateValue(currentSegment!, MONTH_ABBR[monthIndex], true);
          const nextSegment =
            getAdjacentSegment(allSegments, currentSegment!, 'next') ||
            getCrossRangeSegment(allSegments, currentSegment!, 'next');
          if (nextSegment) {
            setTimeout(() => selectSegment(nextSegment), 0);
          }
        } else {
          updateValue(currentSegment!, newBuffer, false);
        }
      } else {
        updateValue(currentSegment!, newBuffer, false);
      }
    },
    [inputBuffer, currentSegment, allSegments, selectSegment, updateValue]
  );

  /**
   * 处理数字输入
   */
  const handleNumericInput = useCallback(
    (key: string) => {
      const newBuffer = inputBuffer + key;
      setInputBuffer(newBuffer);

      const numValue = parseInt(newBuffer, 10);
      const shouldJump =
        newBuffer.length >= currentSegment!.padLength || numValue * 10 > currentSegment!.max;

      if (shouldJump) {
        const clampedValue = Math.max(currentSegment!.min, Math.min(currentSegment!.max, numValue));
        updateValue(currentSegment!, String(clampedValue), true);

        const nextSegment =
          getAdjacentSegment(allSegments, currentSegment!, 'next') ||
          getCrossRangeSegment(allSegments, currentSegment!, 'next');
        if (nextSegment) {
          setTimeout(() => selectSegment(nextSegment), 0);
        }
      } else {
        updateValue(currentSegment!, newBuffer, true);
      }
    },
    [inputBuffer, currentSegment, allSegments, selectSegment, updateValue]
  );

  /**
   * 从显示值中提取当前 segment 的值
   */
  const getCurrentSegmentValue = useCallback(
    (segment: Segment): string => {
      const currentDateValue = segment.range === 'start' ? startValue : endValue;
      const separator = getRangeSeparator(isCn);
      const baseOffset = segment.range === 'start' ? 0 : startValue.length + separator.length;
      const localStart = segment.start - baseOffset;
      const localEnd = segment.end - baseOffset;
      return currentDateValue.substring(localStart, localEnd);
    },
    [startValue, endValue, isCn]
  );

  /**
   * 获取月份索引（支持 MMM 格式和数字格式）
   */
  const getMonthIndex = useCallback((monthValue: string): number => {
    const monthIndex = findMonthIndex(monthValue);
    if (monthIndex !== -1) return monthIndex;

    const numValue = parseInt(monthValue, 10);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 12) {
      return numValue - 1;
    }

    return 0; // 默认值
  }, []);

  /**
   * 计算下一个数值（带循环）
   */
  const calculateNextValue = useCallback(
    (current: number, min: number, max: number, delta: number): number => {
      const newValue = current + delta;
      if (newValue > max) return min;
      if (newValue < min) return max;
      return newValue;
    },
    []
  );

  /**
   * 处理方向键（上下箭头）调整数值
   */
  const handleArrowUpDown = useCallback(
    (key: string, isMonthMMM: boolean, shiftKey: boolean = false) => {
      const segment = currentSegment!;
      const currentValue = getCurrentSegmentValue(segment);

      if (isMonthMMM) {
        const currentMonthIndex = getMonthIndex(currentValue);
        const step = shiftKey ? MONTH_COUNT : 1;
        const delta = key === 'ArrowUp' ? step : -step;
        const newIndex = (currentMonthIndex + delta + MONTH_COUNT) % MONTH_COUNT;
        updateValue(segment, MONTH_ABBR[newIndex], true);
      } else {
        const currentNum = parseInt(currentValue, 10);
        if (isNaN(currentNum)) {
          updateValue(segment, String(segment.min), true);
          return;
        }

        const delta = key === 'ArrowUp' ? 1 : -1;
        const newNum = calculateNextValue(currentNum, segment.min, segment.max, delta);
        updateValue(segment, String(newNum), true);
      }

      // 更新选中区域
      setTimeout(() => {
        if (inputRef.current?.input && currentSegmentKey) {
          const updatedSegment = allSegments.find(
            s => `${s.range}-${s.type}` === currentSegmentKey
          );
          if (updatedSegment) {
            inputRef.current.input.setSelectionRange(updatedSegment.start, updatedSegment.end);
          }
        }
      }, 0);
    },
    [
      currentSegment,
      currentSegmentKey,
      allSegments,
      getCurrentSegmentValue,
      getMonthIndex,
      calculateNextValue,
      updateValue,
    ]
  );

  /**
   * 处理删除键
   */
  const handleDeleteKey = useCallback(
    (isMonthMMM: boolean) => {
      if (isMonthMMM && inputBuffer) {
        const newBuffer = inputBuffer.slice(0, -1);
        setInputBuffer(newBuffer);
        if (newBuffer) {
          updateValue(currentSegment!, newBuffer, false);
        }
      }
    },
    [inputBuffer, currentSegment, updateValue]
  );

  // 处理键盘输入
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!currentSegment) return;

      const key = e.key;
      const which = currentSegment.range;
      const formatToUse = which === 'start' ? baseFormat : format;
      const isMonthMMM = currentSegment.type === 'month' && formatToUse.includes('MMM');

      // 处理字母输入（仅 MMM 格式）
      if (isMonthMMM && /^[a-zA-Z]$/.test(key)) {
        e.preventDefault();
        handleMonthMMMInput(key);
        return;
      }

      // 处理数字输入
      if (/^\d$/.test(key)) {
        if (isMonthMMM) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        handleNumericInput(key);
        return;
      }

      // 处理左右箭头
      if (key === 'ArrowLeft') {
        e.preventDefault();
        const prevSegment = getAdjacentSegment(allSegments, currentSegment, 'prev');
        if (prevSegment) {
          selectSegment(prevSegment);
        }
        return;
      }

      if (key === 'ArrowRight') {
        e.preventDefault();
        const nextSegment = getAdjacentSegment(allSegments, currentSegment, 'next');
        if (nextSegment) {
          selectSegment(nextSegment);
        }
        return;
      }

      // 处理上下箭头
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        e.preventDefault();
        handleArrowUpDown(key, isMonthMMM, e.shiftKey);
        return;
      }

      // 处理 Tab 键
      if (key === 'Tab') {
        e.preventDefault();
        const direction = e.shiftKey ? 'prev' : 'next';
        const nextSegment =
          getAdjacentSegment(allSegments, currentSegment, direction) ||
          getCrossRangeSegment(allSegments, currentSegment, direction);
        if (nextSegment) {
          selectSegment(nextSegment);
        }
        return;
      }

      // 处理删除键
      if (key === 'Backspace' || key === 'Delete') {
        e.preventDefault();
        handleDeleteKey(isMonthMMM);
        return;
      }

      // 阻止其他非法输入
      if (!isMonthMMM && !e.ctrlKey && !e.metaKey && key.length === 1 && !/\d/.test(key)) {
        e.preventDefault();
        return;
      }
    },
    [
      currentSegment,
      baseFormat,
      format,
      allSegments,
      selectSegment,
      handleMonthMMMInput,
      handleNumericInput,
      handleArrowUpDown,
      handleDeleteKey,
    ]
  );

  // 处理失焦事件
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (currentSegment && inputBuffer) {
        const which = currentSegment.range;
        const formatToUse = which === 'start' ? baseFormat : format;
        const isMonthMMM = currentSegment.type === 'month' && formatToUse.includes('MMM');

        if (isMonthMMM) {
          const monthIndex = findMonthIndex(inputBuffer);
          if (monthIndex !== -1) {
            updateValue(currentSegment, MONTH_ABBR[monthIndex], true);
          } else {
            // 输入无效，恢复到初始值
            if (initialValueRef.current && onChange) {
              onChange(initialValueRef.current as [Dayjs | Moment, Dayjs | Moment]);
            }
            resetEditingState();
            return;
          }
        } else {
          const numValue = parseInt(inputBuffer, 10);
          if (!isNaN(numValue)) {
            const clampedValue = Math.max(
              currentSegment.min,
              Math.min(currentSegment.max, numValue)
            );
            updateValue(currentSegment, String(clampedValue), true);
          }
        }
      }

      resetEditingState();
    },
    [currentSegment, inputBuffer, updateValue, onChange, format, baseFormat, resetEditingState]
  );

  /**
   * 解析粘贴的日期字符串
   * 使用 baseFormat 和 format 来解析，只要符合格式要求即可
   */
  const parsePastedDate = useCallback(
    (dateStr: string, rangeType: RangeType = 'start'): Dayjs | Moment | null => {
      // 先尝试使用对应 range 的格式
      const formatToUse = rangeType === 'start' ? baseFormat : format;
      const parsed = parseDateWithLocale(dateStr, formatToUse, isMoment);
      if (parsed?.isValid()) {
        return parsed;
      }

      // 如果失败，尝试另一个格式（可能粘贴的是完整格式的日期）
      const altFormat = rangeType === 'start' ? format : baseFormat;
      const altParsed = parseDateWithLocale(dateStr, altFormat, isMoment);
      if (altParsed?.isValid()) {
        return altParsed;
      }

      return null;
    },
    [isMoment, baseFormat, format]
  );

  /**
   * 处理粘贴事件
   */
  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text').trim();

      if (!pastedText) return;

      // 尝试分割开始和结束时间
      let startStr = '';
      let endStr = '';

      for (const sep of PASTE_SEPARATORS) {
        if (pastedText.includes(sep)) {
          const parts = pastedText.split(sep);
          if (parts.length === 2) {
            startStr = parts[0].trim();
            endStr = parts[1].trim();
            break;
          }
        }
      }

      // 如果没有找到分隔符，使用相同值作为开始和结束
      if (!startStr && !endStr) {
        startStr = pastedText;
        endStr = pastedText;
      }

      // 解析日期
      const parsedStart = parsePastedDate(startStr, 'start');
      const parsedEnd = parsePastedDate(endStr, 'end');

      // 更新值
      if (parsedStart && parsedEnd) {
        onChange?.([parsedStart, parsedEnd] as [Dayjs | Moment, Dayjs | Moment]);
      } else if (parsedStart) {
        onChange?.([parsedStart, value?.[1] ?? parsedStart] as [Dayjs | Moment, Dayjs | Moment]);
      } else if (parsedEnd) {
        onChange?.([value?.[0] ?? parsedEnd, parsedEnd] as [Dayjs | Moment, Dayjs | Moment]);
      }
    },
    [parsePastedDate, onChange, value]
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
