import { useCallback } from 'react';
import type { CascaderOption } from '../types';
import type { FilterButtonRef } from '../../FilterButton';

/**
 * 管理级联选择器的所有回调函数
 */
export const useCascaderCallbacks = (
  currentValue: string[][],
  setValue: (value: string[][]) => void,
  options: CascaderOption[],
  multiple: boolean,
  filterButtonRef: React.RefObject<FilterButtonRef>,
  setOpenPopoverKey: (key: string | null) => void
) => {
  const handleChange = useCallback(
    (parentValue: string, childValue: string) => {
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      if (parentOption?.disabled || childOption?.disabled) {
        return;
      }

      if (multiple) {
        const existingIndex = currentValue.findIndex(
          item => item[0] === parentValue && item[1] === childValue
        );

        let newValueList: string[][];
        if (existingIndex !== -1) {
          newValueList = currentValue.filter((_, index) => index !== existingIndex);
        } else {
          newValueList = [...currentValue, [parentValue, childValue]];
        }
        setValue(newValueList);
      } else {
        const isCurrentSelected =
          currentValue.length === 1 &&
          currentValue[0][0] === parentValue &&
          currentValue[0][1] === childValue;

        let newValueList: string[][];
        if (isCurrentSelected) {
          newValueList = [];
        } else {
          newValueList = [[parentValue, childValue]];
        }
        setValue(newValueList);
        setOpenPopoverKey(null);
        setTimeout(() => {
          filterButtonRef.current?.closePopover();
        }, 0);
      }
    },
    [currentValue, multiple, setValue, options, filterButtonRef, setOpenPopoverKey]
  );

  const clearByParent = useCallback(
    (parentValue: string) => {
      const newValueList = currentValue.filter(item => item[0] !== parentValue);
      setValue(newValueList);
    },
    [currentValue, setValue]
  );

  const handleClear = useCallback(() => {
    setValue([]);
  }, [setValue]);

  const selectAllChildren = useCallback(
    (option: CascaderOption) => {
      if (option.disabled) {
        return;
      }
      const otherValues = currentValue.filter(item => item[0] !== option.value);
      const allChildValues =
        option.children
          ?.filter(child => !child.disabled)
          .map(child => [option.value, child.value]) || [];
      const newValueList = [...otherValues, ...allChildValues];
      setValue(newValueList);
    },
    [currentValue, setValue]
  );

  // 移除某个选中的值
  const handleRemoveTag = useCallback(
    (tagValue: string) => {
      // tagValue 格式：path1::path2::path3::index
      const parts = tagValue.split('::');
      if (parts.length >= 2) {
        const pathParts = parts.slice(0, -1); // 移除最后的 index

        const newValueList = currentValue.filter(item => {
          if (item.length !== pathParts.length) return true;
          return !item.every((val, idx) => val === pathParts[idx]);
        });
        setValue(newValueList);
      }
    },
    [currentValue, setValue]
  );

  return {
    handleChange,
    clearByParent,
    handleClear,
    selectAllChildren,
    handleRemoveTag,
  };
};
