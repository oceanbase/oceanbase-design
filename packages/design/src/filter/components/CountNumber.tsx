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
    <div className={classNames(className || getFilterCls(prefixCls, 'count'))}>
      {total ? `${count}/${total}` : count}
    </div>
  );
  // const { token } = theme.useToken();
  // return count > 0 ? (
  //   <Badge
  //     color={token.colorFillSecondary}
  //     count={total ? `${count}/${total}` : `${count}`}
  //     styles={{
  //       indicator: {
  //         borderColor: token.colorFillSecondary,
  //         color: token.colorTextSecondary,
  //       },
  //     }}
  //     className={className}
  //   />
  // ) : null;
};

export default CountNumber;
