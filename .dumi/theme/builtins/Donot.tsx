import React from 'react';
import { css } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

export interface DonotProps {
  title: React.ReactNode;
  filename?: string;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    do: css`
      font-size: 20px;
      color: ${token.colorErrorText};
    `,
  };
};

export default function Do({}: DonotProps) {
  const styles = useStyle();

  return <span css={styles.do}>Don't</span>;
}
