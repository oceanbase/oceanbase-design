import theme from './index';

const compactTheme = {
  token: theme.defaultSeed,
  components: {
    InputNumber: {
      handleVisible: true,
    },
    Table: {
      cellPaddingBlock: 8,
      cellPaddingBlockMD: 4,
      cellPaddingBlockSM: 0,
    },
  },
};

export default compactTheme;
