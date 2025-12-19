import { Badge, theme } from '@oceanbase/design';
import type { FC } from 'react';

interface CountNumberProps {
  count?: number;
  total?: number;
}

const CountNumber: FC<CountNumberProps> = ({ count, total }) => {
  const { token } = theme.useToken();
  return count && count > 0 ? (
    <Badge
      color={token.colorFillSecondary}
      count={total ? `${count}/${total}` : count}
      styles={{
        indicator: {
          borderColor: token.colorFillSecondary,
          color: token.colorTextSecondary,
        },
      }}
    />
  ) : null;
};

export default CountNumber;
