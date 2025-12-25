import { useFilterContext } from '../FilterContext';

/**
 * 判断 Filter 组件是否处于 wrapped 状态
 * 支持通过 context 或 prop 来判断
 * @param isInWrap 通过 prop 传入的 _isInWrap 值
 * @returns 是否处于 wrapped 状态
 */
export function useFilterWrapped(isInWrap = false): boolean {
  const { isWrapped: isWrappedFromContext } = useFilterContext();
  return isWrappedFromContext || isInWrap;
}

export default useFilterWrapped;
