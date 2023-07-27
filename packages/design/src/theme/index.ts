import { theme } from 'antd';

export * from 'antd/es/theme/internal';
export * from 'antd/es/theme';

const defaultSeed = {
  ...theme.defaultSeed,
  colorPrimary: '#006AFF',
  colorInfo: '#006aff',
  colorSuccess: '#0ac185',
  colorWarning: '#ffac33',
  colorError: '#ff4b4b',
  borderRadius: 6,
  // 以下四种预设颜色和语义色保持一致
  blue: '#006aff',
  green: '#0ac185',
  yellow: '#ffac33',
  red: '#ff4b4b',
};

export default {
  ...theme,
  defaultSeed,
  defaultConfig: {
    ...theme.defaultConfig,
    defaultSeed,
  },
  components: {
    InputNumber: {
      handleVisible: true,
    },
  },
};
