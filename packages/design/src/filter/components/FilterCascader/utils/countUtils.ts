import type { CascaderOption } from '../types';

/**
 * 递归统计所有叶子节点数量（只统计没有children的节点）
 */
export const countLeafNodes = (options: CascaderOption[]): number => {
  let count = 0;
  options.forEach(opt => {
    if (opt.children && opt.children.length > 0) {
      count += countLeafNodes(opt.children);
    } else {
      count += 1;
    }
  });
  return count;
};

/**
 * 收集所有叶子节点的完整路径
 */
export const collectLeafPaths = (
  options: CascaderOption[],
  basePath: string[]
): string[][] => {
  const paths: string[][] = [];
  options.forEach(opt => {
    const optPath = [...basePath, opt.value];
    if (opt.children && opt.children.length > 0) {
      paths.push(...collectLeafPaths(opt.children, optPath));
    } else {
      paths.push(optPath);
    }
  });
  return paths;
};

/**
 * 统计选中的子节点数量
 */
export const countSelectedChildren = (
  currentValue: string[][],
  currentPath: string[]
): number => {
  return currentValue.filter(selectedPath => {
    if (selectedPath.length <= currentPath.length) return false;
    return currentPath.every((val, idx) => selectedPath[idx] === val);
  }).length;
};
