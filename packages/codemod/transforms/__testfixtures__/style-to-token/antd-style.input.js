import { createStyles } from 'antd-style';

const useStyle1 = createStyles(() => {
  return {
    main: {
      background: '#1890ff',
    },
  };
});

const useStyle2 = createStyles(({}) => {
  return {
    main: {
      background: '#1890ff',
    },
  };
});

const useStyle3 = createStyles(({ token }) => {
  return {
    main: {
      background: '#1890ff',
    },
  };
});

export { useStyle1, useStyle2, useStyle3 };
