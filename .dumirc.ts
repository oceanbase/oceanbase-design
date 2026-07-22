import fs from 'fs';
import path from 'path';
import { defineConfig } from 'dumi';
import AntdAliasWebpackPlugin from './antd-alias-webpack-plugin';
import rehypePlugin from './.dumi/rehypePlugin';
import remarkPlugin from './.dumi/remarkPlugin';
import { localizedSidebars } from './.dumi/sidebar-locales';

export default defineConfig({
  mfsu: {
    // to make AntdAliasWebpackPlugin work
    exclude: ['antd-token-previewer'],
  },
  // 默认重定向到子包的 src 文件夹
  // ref: https://d.umijs.org/config#monoreporedirect
  monorepoRedirect: {
    useRootProject: true,
  },
  // umi.server.js build error, disable it for now
  // ssr: process.env.NODE_ENV === 'production' ? {} : false,
  hash: true,
  crossorigin: {},
  // ref: https://d.umijs.org/config#sitemap
  sitemap: {
    hostname: 'https://design.oceanbase.com',
  },
  extraRehypePlugins: [rehypePlugin],
  extraRemarkPlugins: [remarkPlugin],
  plugins: ['./.dumi/theme/plugins/llms.ts', './.dumi/theme/plugins/zh-cn-routes.ts'],
  extraBabelPresets: [require.resolve('@emotion/babel-preset-css-prop')],
  extraBabelPlugins: ['react-inline-svg-unique-id'],
  chainWebpack: config => {
    const esPath = path.join(__dirname, 'packages/design/es');
    const libPath = path.join(__dirname, 'packages/design/es');
    // AntdAliasWebpackPlugin depends es and lib of @oceanbase/design
    if (fs.existsSync(esPath) && fs.existsSync(libPath)) {
      config.plugin('antd-alias').use(AntdAliasWebpackPlugin);
    }
    return config;
  },
  outputPath: 'site',
  define: {
    'process.env.VERCEL_ANALYTICS_ID': process.env.VERCEL_ANALYTICS_ID,
  },
  analytics: {
    ga_v2: 'G-81Y5XPZY2E',
  },
  headScripts: [
    // Microsoft clarity script
    `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "n5kn7gme0s");`,
  ],
  metas: [
    {
      property: 'og:site_name',
      content: 'OceanBase Design',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content:
        'https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*8zHZT7CORL0AAAAAQCAAAAgAemfOAQ/original',
    },
    {
      property: 'og:description',
      content: '🌈 基于 Ant Design 进行延展和二次开发的企业级设计系统',
    },
    {
      name: 'keywords',
      content:
        'OceanBase,oceanbase,OceanBase Design,oceanbase design,ui,react,component,library,typescript,chart',
    },
    {
      name: 'description',
      content:
        '🌈 基于 Ant Design 进行延展和二次开发的企业级设计系统，帮助设计开发者快速搭建具备「专业感」的产品',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#0D6CF2',
    },
    {
      name: 'google-site-verification',
      content: '6w1DTgL9q7k3aVfHCgHYkMedx7Av5yqiWoaELwfTofk',
    },
    {
      name: 'baidu-site-verification',
      content: 'codeva-7qwXtDi3fM',
    },
  ],
  // 默认英文在根路径，仅中文带 /zh-CN 前缀（第一个 locale 必须 base: '/' 避免 useLocaleDocRoutes 报错）
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文', base: '/zh-CN' },
  ],
  resolve: {
    docDirs: [
      { type: 'doc', dir: 'docs' },
      { type: 'doc', dir: 'docs/design' },
      { type: 'doc', dir: 'docs/ui' },
      { type: 'doc', dir: 'docs/charts' },
    ],
    atomDirs: [
      { type: 'component', dir: 'packages/design/src' },
      { type: 'biz-component', dir: 'packages/ui/src' },
      { type: 'chart', dir: 'packages/charts/src' },
    ],
    codeBlockMode: 'passive',
  },
  alias: {
    // 需要将子路径前移，否则会优先匹配到父路径导致子路径匹配异常
    '@oceanbase/design/es': path.join(__dirname, 'packages/design/src'),
    '@oceanbase/design/locale': path.join(__dirname, 'packages/design/src/locale'),
    '@oceanbase/design': path.join(__dirname, 'packages/design/src'),
    // for @import in less
    '~@oceanbase/design/es': path.join(__dirname, 'packages/design/src'),
    '@oceanbase/icons': path.join(__dirname, 'packages/icons/src'),
    '@oceanbase/ui': path.join(__dirname, 'packages/ui/src'),
    '@oceanbase/ui/es': path.join(__dirname, 'packages/ui/src'),
    '@oceanbase/ui/locale': path.join(__dirname, 'packages/ui/src/locale'),
    '@oceanbase/charts': path.join(__dirname, 'packages/charts/src'),
    '@oceanbase/charts/es': path.join(__dirname, 'packages/charts/src'),
    '@oceanbase/util': path.join(__dirname, 'packages/util/src'),
  },
  favicons: ['/assets/oceanbase_logo.svg'],
  themeConfig: {
    sidebar: localizedSidebars,
  },
});
