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
  },
};

export default compactTheme;
