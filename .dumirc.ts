import path from 'path';
import { defineConfig } from 'dumi';

export default defineConfig({
  mfsu: {},
  // 默认重定向到子包的 src 文件夹
  // ref: https://d.umijs.org/config#monoreporedirect
  monorepoRedirect: {},
  ssr: process.env.NODE_ENV === 'production' ? {} : false,
  hash: true,
  crossorigin: {},
  // ref: https://d.umijs.org/config#sitemap
  sitemap: {
    hostname: 'https://design.oceanbase.com',
  },
  extraBabelPresets: [require.resolve('@emotion/babel-preset-css-prop')],
  outputPath: 'site',
  analytics: {
    ga_v2: 'G-81Y5XPZY2E',
  },
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
    '@oceanbase/design': path.join(__dirname, 'packages/design/src'),
    '@oceanbase/design/es': path.join(__dirname, 'packages/design/src'),
    '@oceanbase/design/locale': path.join(__dirname, 'packages/design/src/locale'),
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
          ],
        },
        {
          title: '数据录入',
          children: [
            { title: 'Form 表单', link: '/components/form' },
            { title: 'InputNumber 数字输入框', link: '/components/input-number' },
          ],
        },
        {
          title: '数据展示',
          children: [
            { title: 'Card 卡片', link: '/components/card' },
            { title: 'Descriptions 描述列表', link: '/components/descriptions' },
            { title: 'Table 表格', link: '/components/table' },
            { title: 'Tabs 标签页', link: '/components/tabs' },
            { title: 'Tooltip 文字提示', link: '/components/tooltip' },
          ],
        },
        {
          title: '反馈',
          children: [
            { title: 'Alert 警告提示', link: '/components/alert' },
            { title: 'Message 全局提示', link: '/components/message' },
            { title: 'Modal 对话框', link: '/components/modal' },
            { title: 'Notification 通知提醒框', link: '/components/notification' },
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
            // { title: 'NavMenu', link: '/biz-components/nav-menu' },
            { title: 'Welcome 欢迎页', link: '/biz-components/welcome' },
          ],
        },
        {
          title: '可视化',
          children: [
            { title: 'TaskGraph 任务流程图', link: '/biz-components/task-graph' },
            { title: 'GraphToolbar 图工具栏', link: '/biz-components/graph-toolbar' },
          ],
        },
        {
          title: '其他',
          children: [
            { title: 'Action 操作项', link: '/biz-components/action' },
            {
              title: 'ContentWithQuestion 文字旁提示',
              link: '/biz-components/content-with-question',
            },
            { title: 'Ranger 日期快速选择', link: '/biz-components/ranger' },
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
            { title: 'SideTip 悬浮操作按钮', link: '/biz-components/side-tip' },
            { title: 'FullscreenBox 全屏盒子', link: '/biz-components/fullscreen-box' },
            { title: 'Highlight 代码高亮', link: '/biz-components/highlight' },
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
              title: 'Pie 饼图&环图',
              link: '/charts/pie',
            },
            {
              title: 'DualAxes 双轴图',
              link: '/charts/dual-axes',
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
