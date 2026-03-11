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
const SEGMENT_CONFIG: Record<
  string,
  { type: SegmentType; length: number; min: number; max: number }
> = {
  YYYY: { type: 'year', length: 4, min: 1900, max: 2100 },
  MM: { type: 'month', length: 2, min: 1, max: 12 },
  MMM: { type: 'month', length: 3, min: 1, max: 12 },
  DD: { type: 'day', length: 2, min: 1, max: 31 },
  HH: { type: 'hour', length: 2, min: 0, max: 23 },
  mm: { type: 'minute', length: 2, min: 0, max: 59 },
  ss: { type: 'second', length: 2, min: 0, max: 59 },
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

// 粘贴支持的日期格式
const PASTE_FORMATS = [
  'MMM DD, YYYY HH:mm:ss',
  'MMM DD, YYYY HH:mm',
  'YYYY-MM-DD HH:mm:ss',
  'YYYY-MM-DD HH:mm',
  'YYYY/MM/DD HH:mm:ss',
  'YYYY/MM/DD HH:mm',
  'MM/DD/YYYY HH:mm:ss',
  'MM/DD/YYYY HH:mm',
  'YYYY-MM-DD',
  'YYYY/MM/DD',
  'MM/DD/YYYY',
  'MMM DD, HH:mm:ss',
];

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
 * 将月份缩写转换为数字格式用于解析
 */
const convertMonthToNumber = (
  dateStr: string,
  format: string
): { parseFormat: string; parseValue: string } => {
  if (!format.includes('MMM')) {
    return { parseFormat: format, parseValue: dateStr };
  }
  const parseFormat = format.replace(/MMM/g, 'MM');
  const parseValue = dateStr.replace(/[A-Za-z]{3}/, match => {
    const monthIndex = findMonthIndex(match);
    return monthIndex !== -1 ? String(monthIndex + 1).padStart(2, '0') : match;
  });
  return { parseFormat, parseValue };
};

/**
 * 使用正确的 locale 解析日期
 */
const parseDateWithLocale = (
  dateStr: string,
  format: string,
  isMoment: boolean
): Dayjs | Moment | null => {
  const needsEnLocale = format.includes('MMM');

  if (isMoment) {
    const parsed = moment(dateStr, format, true);
    return needsEnLocale ? parsed.locale('en') : parsed;
  }

  if (needsEnLocale) {
    const currentLocale = dayjs.locale();
    try {
      dayjs.locale('en');
      return dayjs(dateStr, format, true);
    } finally {
      if (currentLocale) {
        dayjs.locale(currentLocale);
      }
    }
  }

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
    const valueStart = formatIndex;
    const valueEnd = formatIndex + config.length;

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
      padLength: pattern === 'MMM' ? 2 : config.length, // MMM 编辑时使用2位数字
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

      // 如果格式包含 MMM，需要根据 isCn 设置正确的 locale
      if (formatToUse.includes('MMM')) {
        const locale = isCn ? 'zh-cn' : 'en';
        if (isMoment) {
          return (v as Moment).locale(locale).format(formatToUse);
        } else {
          return (v as Dayjs).locale(locale).format(formatToUse);
        }
      }
      return v.format(formatToUse);
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
      const { parseFormat, parseValue } = convertMonthToNumber(newDateValue, formatToUse);
      const newDate = isMoment ? moment(parseValue, parseFormat) : dayjs(parseValue, parseFormat);

      if (newDate.isValid()) {
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
          const nextSegment = getAdjacentSegment(allSegments, currentSegment!, 'next');
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

        const nextSegment = getAdjacentSegment(allSegments, currentSegment!, 'next');
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
   * 处理方向键（上下箭头）调整数值
   */
  const handleArrowUpDown = useCallback(
    (key: string, isMonthMMM: boolean, shiftKey: boolean = false) => {
      if (isMonthMMM) {
        // 对于 MMM 格式，segment.value 可能是数字格式（01-12），需要从显示值中提取实际的月份字符串
        let currentMonthIndex = -1;

        // 尝试从显示值中提取月份字符串
        if (inputRef.current?.input) {
          const currentDisplayValue = inputRef.current.input.value || displayValue;
          const monthStr = currentDisplayValue.substring(
            currentSegment!.start,
            currentSegment!.end
          );
          currentMonthIndex = findMonthIndex(monthStr);
        }

        // 如果找不到，尝试从 segment.value 解析（可能是数字格式）
        if (currentMonthIndex === -1) {
          const numValue = parseInt(currentSegment!.value, 10);
          if (!isNaN(numValue) && numValue >= 1 && numValue <= 12) {
            currentMonthIndex = numValue - 1; // 转换为索引（0-11）
          }
        }

        // 如果仍然找不到，默认为 0（Jan）
        if (currentMonthIndex === -1) {
          currentMonthIndex = 0;
        }

        // 如果按住 Shift 键，切换一年（12个月），否则切换一个月
        const step = shiftKey ? MONTH_COUNT : 1;
        const newIndex =
          key === 'ArrowUp'
            ? (currentMonthIndex + step) % MONTH_COUNT
            : (currentMonthIndex - step + MONTH_COUNT) % MONTH_COUNT;
        updateValue(currentSegment!, MONTH_ABBR[newIndex], true);
      } else {
        const currentNum = parseInt(currentSegment!.value, 10);
        const delta = key === 'ArrowUp' ? 1 : -1;
        let newNum = currentNum + delta;

        if (newNum > currentSegment!.max) {
          newNum = currentSegment!.min;
        } else if (newNum < currentSegment!.min) {
          newNum = currentSegment!.max;
        }

        updateValue(currentSegment!, String(newNum), true);
      }

      setTimeout(() => {
        if (inputRef.current?.input && currentSegment) {
          inputRef.current.input.setSelectionRange(currentSegment.start, currentSegment.end);
        }
      }, 0);
    },
    [currentSegment, updateValue, displayValue]
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
        const nextSegment = getAdjacentSegment(
          allSegments,
          currentSegment,
          e.shiftKey ? 'prev' : 'next'
        );
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
   */
  const parsePastedDate = useCallback(
    (dateStr: string): Dayjs | Moment | null => {
      for (const fmt of PASTE_FORMATS) {
        const parsed = parseDateWithLocale(dateStr, fmt, isMoment);
        if (parsed?.isValid()) {
          return parsed;
        }
      }
      return null;
    },
    [isMoment]
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
      const parsedStart = parsePastedDate(startStr);
      const parsedEnd = parsePastedDate(endStr);

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
