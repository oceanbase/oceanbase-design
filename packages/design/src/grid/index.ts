import Col from './col';
import useInternalBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import Row from './row';

// Do not export params
function useBreakpoint() {
  return useInternalBreakpoint();
}

export type { ColProps, ColSize } from 'antd/es/grid/col';
export type { RowProps } from 'antd/es/grid/row';
export { Row, Col };

export default { useBreakpoint };
