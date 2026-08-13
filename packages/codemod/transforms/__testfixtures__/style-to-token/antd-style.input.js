import { createStyles } from 'antd-style';

const useStyle1 = createStyles(() => {
  return {
    main: {
      background: '#1890ff',
      fontSize: 14,
      boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px ${token.colorFillQuaternary}, 0 2px 4px 0 rgba(0, 0, 0, 0.02)`,
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
