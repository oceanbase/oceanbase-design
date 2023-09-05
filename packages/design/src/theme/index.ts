import { theme } from 'antd';

export * from 'antd/es/theme/internal';
export * from 'antd/es/theme';

const defaultSeed = {
  ...theme.defaultSeed,
  /* Color */
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
  /* Font */
  // `Helvetica Neue For Number`: Number Font, defined in @font-face of genComponentStyleHook
  // `Source Sans Pro`: English Font, defined in @font-face of genComponentStyleHook
  // `PingFang SC`: Chinese Font, defined in @font-face of genComponentStyleHook
  fontFamily: `'Helvetica Neue For Number', 'Source Sans Pro', 'PingFang SC', ${theme.defaultSeed.fontFamily}`,
  fontFamilyCode: `Menlo, ${theme.defaultSeed.fontFamilyCode}`,
};

// should use reference assign instead of clone assign
const defaultConfig = theme.defaultConfig;
defaultConfig.token = defaultSeed;

export default {
  ...theme,
  defaultSeed,
  defaultConfig,
  components: {
    InputNumber: {
      handleVisible: true as true,
    },
  },
};
