import React from 'react';
import { css } from '@emotion/react';
import useSiteToken from '../../hooks/useSiteToken';

export interface CautionProps {
  title: React.ReactNode;
  filename?: string;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    do: css`
      font-size: 20px;
      color: ${token.colorWarningText};
    `,
  };
};

export default function Caution({}: CautionProps) {
  const styles = useStyle();

  return <div css={styles.do}>Caution</div>;
}
