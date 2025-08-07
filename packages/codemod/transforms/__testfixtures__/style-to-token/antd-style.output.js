import { createStyles } from 'antd-style';

const useStyle1 = createStyles((
  {
    token
  }
) => {
  return {
    main: {
      background: token.colorInfo,
    },
  };
});

const useStyle2 = createStyles(({
  token
}) => {
  return {
    main: {
      background: token.colorInfo,
    },
  };
});

const useStyle3 = createStyles(({ token }) => {
  return {
    main: {
      background: token.colorInfo,
    },
  };
});

export { useStyle1, useStyle2, useStyle3 };
