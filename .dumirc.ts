import fs from 'fs';
import path from 'path';
import { defineConfig } from 'dumi';
import AntdAliasWebpackPlugin from './antd-alias-webpack-plugin';
import rehypePlugin from './.dumi/rehypePlugin';
import remarkPlugin from './.dumi/remarkPlugin';

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
        'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
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
  favicons: [
    'https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original',
  ],
  themeConfig: {
    sidebar: {
      '/components': [
        {
          title: '通用',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Icon 图标', link: '/components/icon' },
            { title: 'Typography 排版', link: '/components/typography' },
          ],
        },
        {
          title: '导航',
          children: [
            { title: 'Anchor 锚点', link: '/components/anchor' },
            { title: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { title: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { title: 'Menu 导航菜单', link: '/components/menu' },
            { title: 'Pagination 分页', link: '/components/pagination' },
            { title: 'Steps 步骤条', link: '/components/steps' },
          ],
        },
        {
          title: '布局',
          children: [
            { title: 'Divider 分割线', link: '/components/divider' },
            { title: 'Grid 栅格', link: '/components/grid' },
            { title: 'Space 间距', link: '/components/space' },
          ],
        },
        {
          title: '数据录入',
          children: [
            { title: 'AutoComplete 自动完成', link: '/components/auto-complete' },
            { title: 'Cascader 级联选择', link: '/components/cascader' },
            { title: 'Form 表单', link: '/components/form' },
            { title: 'Input 输入框', link: '/components/input' },
            { title: 'InputNumber 数字输入框', link: '/components/input-number' },
            { title: 'Radio 单选框', link: '/components/radio' },
            { title: 'Checkbox 多选框', link: '/components/checkbox' },
            { title: 'Switch 开关', link: '/components/switch' },
            { title: 'Select 选择器', link: '/components/select' },
            { title: 'Filter 筛选器', link: '/components/filter' },
            { title: 'Slider 滑动输入条', link: '/components/slider' },
            { title: 'DatePicker 日期选择框', link: '/components/date-picker' },
            { title: 'TimePicker 时间选择器', link: '/components/time-picker' },
            { title: 'TreeSelect 树选择', link: '/components/tree-select' },
            { title: 'Tansfer 穿梭框', link: '/components/transfer' },
            { title: 'Upload 上传', link: '/components/upload' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Card 卡片', link: '/components/card' },
            { title: 'Collapse 折叠面板', link: '/components/collapse' },
            { title: 'Descriptions 描述列表', link: '/components/descriptions' },
            { title: 'Empty 空状态', link: '/components/empty' },
            { title: 'List 列表', link: '/components/list' },
            { title: 'Popover 气泡卡片', link: '/components/popover' },
            {
              title: 'Segmented 分段控制器',
              link: '/components/segmented',
            },
            { title: 'Table 表格', link: '/components/table' },
            { title: 'Tabs 标签页', link: '/components/tabs' },
            { title: 'Tag 标签', link: '/components/tag' },
            { title: 'Tooltip 文字提示', link: '/components/tooltip' },
            { title: 'Tree 树形控件', link: '/components/tree' },
          ],
        },
        {
          title: '反馈',
          children: [
            { title: 'Alert 警告提示', link: '/components/alert' },
            { title: 'Message 全局提示', link: '/components/message' },
            { title: 'Modal 对话框', link: '/components/modal' },
            { title: 'Drawer 抽屉', link: '/components/drawer' },
            { title: 'Notification 通知提醒框', link: '/components/notification' },
            { title: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
            { title: 'Progress 进度条', link: '/components/progress' },
            { title: 'Result 结果', link: '/components/result' },
            { title: 'Skeleton 骨架屏', link: '/components/skeleton' },
            { title: 'Spin 加载中', link: '/components/spin' },
            { title: 'Badge 徽标数', link: '/components/badge' },
          ],
        },
        {
          title: '基础能力',
          children: [{ title: 'ConfigProvider 全局化配置', link: '/components/config-provider' }],
        },
      ],
      '/biz-components': [
        {
          title: '布局',
          children: [
            { title: 'BasicLayout 导航和布局', link: '/biz-components/basic-layout' },
            { title: 'PageContainer 页容器', link: '/biz-components/page-container' },
            { title: 'PageLoading 页面级加载', link: '/biz-components/page-loading' },
            { title: 'FooterToolbar 底部操作栏', link: '/biz-components/footer-toolbar' },
            { title: 'Login 登录页', link: '/biz-components/login' },
            // { title: 'NavMenu', link: '/biz-components/nav-menu' },
            { title: 'Welcome 欢迎页', link: '/biz-components/welcome' },
          ],
        },
        {
          title: 'ProComponents 组件',
          children: [
            { title: 'ProCard 高级卡片', link: '/biz-components/pro-card' },
            { title: 'ProTable 高级表格', link: '/biz-components/pro-table' },
            { title: 'LightFilter 轻量筛选', link: '/biz-components/light-filter' },
          ],
        },
        {
          title: '其他',
          children: [
            { title: 'Action 操作项', link: '/biz-components/action' },
            {
              title: 'ContentWithQuestion 问号旁提示',
              link: '/biz-components/content-with-question',
            },
            {
              title: 'ContentWithIcon 文字旁提示',
              link: '/biz-components/content-with-icon',
            },
            { title: 'DateRanger 日期时间选择 (新版)', link: '/biz-components/date-ranger' },
            { title: 'Ranger 日期时间选择', link: '/biz-components/ranger' },
            { title: 'TreeSearch 树搜索', link: '/biz-components/tree-search' },
            { title: 'Password 密码输入框', link: '/biz-components/password' },
            { title: 'Boundary 错误兜底', link: '/biz-components/boundary' },
            { title: 'Dialog 嵌入弹窗', link: '/biz-components/dialog' },
            { title: 'DocDialog 文档嵌入弹窗', link: '/biz-components/doc-dialog' },
            { title: 'Lottie 动效', link: '/biz-components/lottie' },
            { title: 'BatchOperationBar 批量操作栏', link: '/biz-components/batch-operation-bar' },
            {
              title: 'BackgroundTaskManager 后台任务管理器',
              link: '/biz-components/background-task-manager',
            },
            { title: 'TagSelect 标签式单选/多选', link: '/biz-components/tag-select' },
          ],
        },
      ],
      '/charts': [
        {
          children: [
            {
              title: 'Stat 数字统计',
              link: '/charts/stat',
            },
            {
              title: 'Score 得分图',
              link: '/charts/score',
            },
            {
              title: 'Line 折线图',
              link: '/charts/line',
            },
            {
              title: 'Area 面积图',
              link: '/charts/area',
            },
            {
              title: 'Bar 条形图',
              link: '/charts/bar',
            },
            {
              title: 'Column 柱状图',
              link: '/charts/column',
            },
            {
              title: 'Histogram 直方图',
              link: '/charts/histogram',
            },
            {
              title: 'DualAxes 双轴图',
              link: '/charts/dual-axes',
            },
            {
              title: 'Pie 饼图&环图',
              link: '/charts/pie',
            },
            {
              title: 'Gauge 仪表盘',
              link: '/charts/gauge',
            },
            {
              title: 'Liquid 水波图',
              link: '/charts/liquid',
            },
            {
              title: 'Tiny 迷你图',
              link: '/charts/tiny',
            },
          ],
        },
      ],
    },
  },
});
