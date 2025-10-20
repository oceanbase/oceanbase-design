import { createStyles } from 'antd-style';

const useStyle1 = createStyles((
  {
    token
  }
) => {
  return {
    main: {
      background: token.colorInfo,
      fontSize: token.fontSize,
      boxShadow: `0 1px 2px 0 ${token.colorFillQuaternary}, 0 1px 6px -1px ${token.colorFillQuaternary}, 0 2px 4px 0 ${token.colorFillQuaternary}`,
    },
  };
});

const useStyle2 = createStyles(({
  token
}) => {
  return {
    main: {
      background: token.colorInfo,
      fontSize: token.fontSize,
    },
  };
});

const useStyle3 = createStyles(({ token }) => {
  return {
    main: {
      background: token.colorInfo,
      fontSize: token.fontSizeSM,
    },
  };
});

export { useStyle1, useStyle2, useStyle3 };
