import type { CascaderOption } from '../types';

/**
 * 根据路径查找选项
 */
export const findOptionByPath = (
  options: CascaderOption[],
  path: string[]
): CascaderOption | null => {
  if (!path || path.length === 0) return null;

  let currentOptions = options;
  let currentOption: CascaderOption | null = null;

  for (const pathValue of path) {
    const found = currentOptions.find(opt => opt.value === pathValue);
    if (!found) return null;
    currentOption = found;
    currentOptions = found.children || [];
  }

  return currentOption;
};

/**
 * 根据路径获取当前层级的选项列表
 */
export const getCurrentLevelOptions = (
  options: CascaderOption[],
  path: string[]
): CascaderOption[] => {
  if (path.length === 0) return options;

  let currentOptions = options;
  for (const pathValue of path) {
    const found = currentOptions.find(opt => opt.value === pathValue);
    if (!found || !found.children) return [];
    currentOptions = found.children;
  }
  return currentOptions;
};

/**
 * 检查路径是否在选中值中
 */
export const hasSelectedInPath = (
  currentValue: string[][],
  currentPath: string[]
): boolean => {
  return currentValue.some(selectedPath => {
    if (selectedPath.length < currentPath.length) return false;
    return currentPath.every((val, idx) => selectedPath[idx] === val);
  });
};

/**
 * 检查路径是否完全匹配
 */
export const isExactMatch = (currentValue: string[][], currentPath: string[]): boolean => {
  return currentValue.some(
    selectedPath =>
      selectedPath.length === currentPath.length &&
      selectedPath.every((val, idx) => val === currentPath[idx])
  );
};
