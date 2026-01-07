import type { FC } from 'react';
import Badge from '../../badge';
import theme from '../../theme';

interface CountNumberProps {
  count?: number;
  total?: number;
  className?: string;
}

const CountNumber: FC<CountNumberProps> = ({ count, total, className }) => {
  const { token } = theme.useToken();
  return count > 0 ? (
    <Badge
      color={token.colorFillSecondary}
      count={total ? `${count}/${total}` : `${count}`}
      styles={{
        indicator: {
          borderColor: token.colorFillSecondary,
          color: token.colorTextSecondary,
        },
      }}
      className={className}
    />
  ) : null;
};

export default CountNumber;
