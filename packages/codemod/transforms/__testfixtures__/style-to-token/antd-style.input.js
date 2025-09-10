import { createStyles } from 'antd-style';

const useStyle1 = createStyles(() => {
  return {
    main: {
      background: '#1890ff',
      fontSize: 14,
    },
  };
});

const useStyle2 = createStyles(({}) => {
  return {
    main: {
      background: '#1890ff',
      fontSize: '14px',
    },
  };
});

const useStyle3 = createStyles(({ token }) => {
  return {
    main: {
      background: '#1890ff',
      fontSize: 12,
    },
  };
});

export { useStyle1, useStyle2, useStyle3 };
