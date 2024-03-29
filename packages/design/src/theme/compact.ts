import { theme } from 'antd';
import themeConfig from './index';

const compactTheme = {
  token: theme.getDesignToken({
    algorithm: theme.compactAlgorithm,
    token: themeConfig.defaultSeed,
  }),
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
