import { useFilterContext } from '../FilterContext';

/**
 * 判断 Filter 组件是否处于折叠模式
 * 支持通过 context 或 prop 来判断
 * @param isCollapsedProp 通过 prop 传入的 _isCollapsed 值
 * @returns 是否处于折叠模式
 */
export function useFilterCollapsed(isCollapsedProp = false): boolean {
  const { isCollapsed: isCollapsedFromContext } = useFilterContext();
  return isCollapsedFromContext || isCollapsedProp;
}

export default useFilterCollapsed;
