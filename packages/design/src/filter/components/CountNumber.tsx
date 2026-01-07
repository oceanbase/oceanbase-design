import type { FC } from 'react';
import classNames from 'classnames';
import useFilterStyle, { getFilterCls } from '../style';

interface CountNumberProps {
  count?: number;
  total?: number;
  className?: string;
}

const CountNumber: FC<CountNumberProps> = ({ count, total, className }) => {
  const { prefixCls } = useFilterStyle();

  return (
    <div
      className={classNames(className || getFilterCls(prefixCls, 'count'))}
      style={total ? { width: '26px' } : undefined}
    >
      {total ? `${count}/${total}` : count}
    </div>
  );
};

export default CountNumber;
