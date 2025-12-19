import { theme } from '@oceanbase/design';
import type { FC } from 'react';
import React from 'react';

interface CountNumberProps {
  count?: number;
  total?: number;
}

const CountNumber: FC<CountNumberProps> = ({ count, total }) => {
  const { token } = theme.useToken();
  return count && count > 0 ? (
    <span
      style={{
        fontSize: 10,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px 4px',
        borderRadius: token.borderRadiusLG,
        color: token.colorTextSecondary,
        background: token.colorFillSecondary,
        height: 14,
        marginBottom: 3,
      }}
    >
      {total ? `${count}/${total}` : count}
    </span>
  ) : null;
};

export default CountNumber;
