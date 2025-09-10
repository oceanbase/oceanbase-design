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
