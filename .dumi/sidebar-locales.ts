/** Bilingual sidebar data — single source for en-US and zh-CN paths in .dumirc.ts */

export const ZH_CN_BASE = '/zh-CN';

type BilingualItem = { en: string; zh: string; link: string };
type BilingualGroup = { en: string; zh: string; children: BilingualItem[] };

function buildGroupedSidebar(
  basePath: string,
  groups: BilingualGroup[]
): Record<string, { title: string; children: { title: string; link: string }[] }[]> {
  return {
    [basePath]: groups.map(g => ({
      title: g.en,
      children: g.children.map(c => ({ title: c.en, link: c.link })),
    })),
    [`${ZH_CN_BASE}${basePath}`]: groups.map(g => ({
      title: g.zh,
      children: g.children.map(c => ({ title: c.zh, link: `${ZH_CN_BASE}${c.link}` })),
    })),
  };
}

function buildFlatSidebar(
  basePath: string,
  items: BilingualItem[]
): Record<string, { children: { title: string; link: string }[] }[]> {
  return {
    [basePath]: [{ children: items.map(c => ({ title: c.en, link: c.link })) }],
    [`${ZH_CN_BASE}${basePath}`]: [
      { children: items.map(c => ({ title: c.zh, link: `${ZH_CN_BASE}${c.link}` })) },
    ],
  };
}

const componentsGroups: BilingualGroup[] = [
  {
    en: 'General',
    zh: '通用',
    children: [
      { en: 'Button', zh: 'Button 按钮', link: '/components/button' },
      { en: 'Icon', zh: 'Icon 图标', link: '/components/icon' },
      { en: 'Typography', zh: 'Typography 排版', link: '/components/typography' },
    ],
  },
  {
    en: 'Navigation',
    zh: '导航',
    children: [
      { en: 'Anchor', zh: 'Anchor 锚点', link: '/components/anchor' },
      { en: 'Breadcrumb', zh: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
      { en: 'Dropdown', zh: 'Dropdown 下拉菜单', link: '/components/dropdown' },
      { en: 'Menu', zh: 'Menu 导航菜单', link: '/components/menu' },
      { en: 'Pagination', zh: 'Pagination 分页', link: '/components/pagination' },
      { en: 'Steps', zh: 'Steps 步骤条', link: '/components/steps' },
    ],
  },
  {
    en: 'Layout',
    zh: '布局',
    children: [
      { en: 'Divider', zh: 'Divider 分割线', link: '/components/divider' },
      { en: 'Grid', zh: 'Grid 栅格', link: '/components/grid' },
      { en: 'Space', zh: 'Space 间距', link: '/components/space' },
    ],
  },
  {
    en: 'Data Entry',
    zh: '数据录入',
    children: [
      { en: 'AutoComplete', zh: 'AutoComplete 自动完成', link: '/components/auto-complete' },
      { en: 'Cascader', zh: 'Cascader 级联选择', link: '/components/cascader' },
      { en: 'Form', zh: 'Form 表单', link: '/components/form' },
      { en: 'Input', zh: 'Input 输入框', link: '/components/input' },
      { en: 'InputNumber', zh: 'InputNumber 数字输入框', link: '/components/input-number' },
      { en: 'Radio', zh: 'Radio 单选框', link: '/components/radio' },
      { en: 'Checkbox', zh: 'Checkbox 多选框', link: '/components/checkbox' },
      { en: 'Switch', zh: 'Switch 开关', link: '/components/switch' },
      { en: 'Select', zh: 'Select 选择器', link: '/components/select' },
      { en: 'Filter', zh: 'Filter 筛选器', link: '/components/filter' },
      { en: 'Slider', zh: 'Slider 滑动输入条', link: '/components/slider' },
      { en: 'DatePicker', zh: 'DatePicker 日期选择框', link: '/components/date-picker' },
      { en: 'TimePicker', zh: 'TimePicker 时间选择器', link: '/components/time-picker' },
      { en: 'TreeSelect', zh: 'TreeSelect 树选择', link: '/components/tree-select' },
      { en: 'Transfer', zh: 'Transfer 穿梭框', link: '/components/transfer' },
      { en: 'Upload', zh: 'Upload 上传', link: '/components/upload' },
    ],
  },
  {
    en: 'Data Display',
    zh: '数据展示',
    children: [
      { en: 'Card', zh: 'Card 卡片', link: '/components/card' },
      { en: 'Collapse', zh: 'Collapse 折叠面板', link: '/components/collapse' },
      { en: 'Descriptions', zh: 'Descriptions 描述列表', link: '/components/descriptions' },
      { en: 'Empty', zh: 'Empty 空状态', link: '/components/empty' },
      { en: 'List', zh: 'List 列表', link: '/components/list' },
      { en: 'Popover', zh: 'Popover 气泡卡片', link: '/components/popover' },
      { en: 'Segmented', zh: 'Segmented 分段控制器', link: '/components/segmented' },
      { en: 'Table', zh: 'Table 表格', link: '/components/table' },
      { en: 'Tabs', zh: 'Tabs 标签页', link: '/components/tabs' },
      { en: 'Tag', zh: 'Tag 标签', link: '/components/tag' },
      { en: 'Tooltip', zh: 'Tooltip 文字提示', link: '/components/tooltip' },
      { en: 'Tree', zh: 'Tree 树形控件', link: '/components/tree' },
    ],
  },
  {
    en: 'Feedback',
    zh: '反馈',
    children: [
      { en: 'Alert', zh: 'Alert 警告提示', link: '/components/alert' },
      { en: 'Notification', zh: 'Notification 通知提醒框', link: '/components/notification' },
      { en: 'Modal', zh: 'Modal 对话框', link: '/components/modal' },
      { en: 'Drawer', zh: 'Drawer 抽屉', link: '/components/drawer' },
      { en: 'Popconfirm', zh: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
      { en: 'Progress', zh: 'Progress 进度条', link: '/components/progress' },
      { en: 'Result', zh: 'Result 结果', link: '/components/result' },
      { en: 'Skeleton', zh: 'Skeleton 骨架屏', link: '/components/skeleton' },
      { en: 'Spin', zh: 'Spin 加载中', link: '/components/spin' },
      { en: 'Badge', zh: 'Badge 徽标数', link: '/components/badge' },
    ],
  },
  {
    en: 'Other',
    zh: '基础能力',
    children: [
      {
        en: 'ConfigProvider',
        zh: 'ConfigProvider 全局化配置',
        link: '/components/config-provider',
      },
    ],
  },
];

const bizComponentsGroups: BilingualGroup[] = [
  {
    en: 'Layout',
    zh: '布局',
    children: [
      { en: 'BasicLayout', zh: 'BasicLayout 导航和布局', link: '/biz-components/basic-layout' },
      { en: 'PageContainer', zh: 'PageContainer 页容器', link: '/biz-components/page-container' },
      { en: 'PageLoading', zh: 'PageLoading 页面级加载', link: '/biz-components/page-loading' },
      {
        en: 'FooterToolbar',
        zh: 'FooterToolbar 底部操作栏',
        link: '/biz-components/footer-toolbar',
      },
      { en: 'Login', zh: 'Login 登录页', link: '/biz-components/login' },
      { en: 'Welcome', zh: 'Welcome 欢迎页', link: '/biz-components/welcome' },
    ],
  },
  {
    en: 'ProComponents',
    zh: 'ProComponents 组件',
    children: [
      { en: 'ProCard', zh: 'ProCard 高级卡片', link: '/biz-components/pro-card' },
      { en: 'ProTable', zh: 'ProTable 高级表格', link: '/biz-components/pro-table' },
      { en: 'LightFilter', zh: 'LightFilter 轻量筛选', link: '/biz-components/light-filter' },
    ],
  },
  {
    en: 'Other',
    zh: '其他',
    children: [
      { en: 'Action', zh: 'Action 操作项', link: '/biz-components/action' },
      {
        en: 'ContentWithQuestion',
        zh: 'ContentWithQuestion 问号旁提示',
        link: '/biz-components/content-with-question',
      },
      {
        en: 'ContentWithIcon',
        zh: 'ContentWithIcon 文字旁提示',
        link: '/biz-components/content-with-icon',
      },
      {
        en: 'DateRanger',
        zh: 'DateRanger 日期时间选择 (新版)',
        link: '/biz-components/date-ranger',
      },
      { en: 'Ranger', zh: 'Ranger 日期时间选择', link: '/biz-components/ranger' },
      { en: 'TreeSearch', zh: 'TreeSearch 树搜索', link: '/biz-components/tree-search' },
      { en: 'Password', zh: 'Password 密码输入框', link: '/biz-components/password' },
      { en: 'Boundary', zh: 'Boundary 错误兜底', link: '/biz-components/boundary' },
      { en: 'Dialog', zh: 'Dialog 嵌入弹窗', link: '/biz-components/dialog' },
      { en: 'DocDialog', zh: 'DocDialog 文档嵌入弹窗', link: '/biz-components/doc-dialog' },
      { en: 'Lottie', zh: 'Lottie 动效', link: '/biz-components/lottie' },
      {
        en: 'BatchOperationBar',
        zh: 'BatchOperationBar 批量操作栏',
        link: '/biz-components/batch-operation-bar',
      },
      {
        en: 'BackgroundTaskManager',
        zh: 'BackgroundTaskManager 后台任务管理器',
        link: '/biz-components/background-task-manager',
      },
      { en: 'TagSelect', zh: 'TagSelect 标签式单选/多选', link: '/biz-components/tag-select' },
    ],
  },
];

const chartsItems: BilingualItem[] = [
  { en: 'Stat', zh: 'Stat 数字统计', link: '/charts/stat' },
  { en: 'Score', zh: 'Score 得分图', link: '/charts/score' },
  { en: 'Line', zh: 'Line 折线图', link: '/charts/line' },
  { en: 'Area', zh: 'Area 面积图', link: '/charts/area' },
  { en: 'Bar', zh: 'Bar 条形图', link: '/charts/bar' },
  { en: 'Column', zh: 'Column 柱状图', link: '/charts/column' },
  { en: 'Histogram', zh: 'Histogram 直方图', link: '/charts/histogram' },
  { en: 'DualAxes', zh: 'DualAxes 双轴图', link: '/charts/dual-axes' },
  { en: 'Pie', zh: 'Pie 饼图&环图', link: '/charts/pie' },
  { en: 'Gauge', zh: 'Gauge 仪表盘', link: '/charts/gauge' },
  { en: 'Liquid', zh: 'Liquid 水波图', link: '/charts/liquid' },
  { en: 'Tiny', zh: 'Tiny 迷你图', link: '/charts/tiny' },
];

export const localizedSidebars = {
  ...buildGroupedSidebar('/components', componentsGroups),
  ...buildGroupedSidebar('/biz-components', bizComponentsGroups),
  ...buildFlatSidebar('/charts', chartsItems),
};
