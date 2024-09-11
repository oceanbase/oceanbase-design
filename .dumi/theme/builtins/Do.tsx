import React from 'react';
import { css } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

export interface DoProps {
  title: React.ReactNode;
  filename?: string;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    do: css`
      font-size: 20px;
      color: ${token.colorSuccessText};
    `,
  };
};

export default function Do({}: DoProps) {
  const styles = useStyle();

  return <div css={styles.do}>Do</div>;
}
