import { useCallback, useState } from 'react';

/**
 * 处理受控/非受控组件状态的通用 Hook
 * @param value 外部传入的受控值
 * @param defaultValue 默认值
 * @param onChange 值变化时的回调
 * @returns [currentValue, setValue, isControlled]
 */
export function useControlledState<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void
): [T, (value: T) => void, boolean] {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  // 使用受控值或内部值
  const currentValue = isControlled ? value : internalValue;

  // 统一的 setValue 方法
  const setValue = useCallback(
    (newValue: T) => {
      // 如果是非受控组件，更新内部状态
      if (!isControlled) {
        setInternalValue(newValue);
      }
      // 总是调用 onChange 回调
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return [currentValue, setValue, isControlled];
}

export default useControlledState;
