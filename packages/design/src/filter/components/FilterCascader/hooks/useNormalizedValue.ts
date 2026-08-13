import { useCallback, useEffect, useState } from 'react';

/**
 * 管理级联选择器的值，处理单选/多选格式转换
 */
export const useNormalizedValue = (
  value: string[] | string[][] | undefined,
  onChange: ((value: string[]) => void) | ((value: string[][]) => void) | undefined,
  multiple: boolean
) => {
  const normalizeValue = useCallback(
    (val: string[] | string[][] | undefined): string[][] => {
      if (!val) return [];
      if (val.length === 0) return [];
      // 判断是否为单选格式 string[]
      if (!multiple && val.length > 0 && typeof val[0] === 'string') {
        return [val as string[]];
      }
      return val as string[][];
    },
    [multiple]
  );

  const denormalizeValue = useCallback(
    (val: string[][]): string[] | string[][] => {
      if (!multiple && val.length > 0) {
        return val[0]; // 单选模式返回 string[]
      }
      return val; // 多选模式返回 string[][]
    },
    [multiple]
  );

  // 使用受控状态 hook，内部统一使用 string[][] 格式
  const [internalValue, setInternalValue] = useState<string[][]>(() => normalizeValue(value));

  // 同步外部 value 到内部
  useEffect(() => {
    setInternalValue(normalizeValue(value));
  }, [value, normalizeValue]);

  // 内部 setValue 包装函数
  const setValue = useCallback(
    (newValue: string[][]) => {
      setInternalValue(newValue);
      if (onChange) {
        (onChange as any)(denormalizeValue(newValue));
      }
    },
    [onChange, denormalizeValue]
  );

  return { currentValue: internalValue, setValue };
};
