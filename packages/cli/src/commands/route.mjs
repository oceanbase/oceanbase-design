const ROUTES = [
  {
    patterns: [/表格|列表|筛选|filter|table|list/i],
    name: 'list-filter-table',
    components: ['PageContainer', 'Filter', 'Table', 'Card'],
    constraints: ['filter-not-select-for-bar', 'card-table-inner-bordered', 'config-provider-root'],
    packages: ['@oceanbase/design', '@oceanbase/ui'],
  },
  {
    patterns: [/详情|描述|detail|description/i],
    name: 'detail-descriptions',
    components: ['PageContainer', 'Descriptions', 'Card'],
    constraints: ['config-provider-root'],
    packages: ['@oceanbase/design', '@oceanbase/ui'],
  },
  {
    patterns: [/布局|layout|菜单|sidebar|导航/i],
    name: 'app-basic-layout',
    components: ['ConfigProvider', 'BasicLayout', 'PageContainer'],
    constraints: ['config-provider-root'],
    packages: ['@oceanbase/design', '@oceanbase/ui'],
  },
  {
    patterns: [/表单|弹窗|modal|form/i],
    name: 'form-in-modal',
    components: ['Form', 'Modal', 'Button'],
    constraints: ['config-provider-root', 'import-design-not-antd'],
    packages: ['@oceanbase/design'],
  },
  {
    patterns: [/protable|高级表格|request/i],
    name: 'pro-table-page',
    components: ['PageContainer', 'ProTable', 'LightFilter'],
    constraints: ['table-over-protable', 'config-provider-root'],
    packages: ['@oceanbase/ui', '@oceanbase/design'],
  },
];

export function routeCommand(intent, { dense, json }) {
  const match =
    ROUTES.find((r) => r.patterns.some((p) => p.test(intent))) || ROUTES[0];

  const result = {
    intent,
    template: match.name,
    components: match.components,
    constraints: match.constraints,
    packages: match.packages,
    next: match.components.map((c) => `ob_info ${c}`),
  };

  if (json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  if (dense) {
    console.log(`${result.template}: ${result.components.join(' + ')}`);
    return;
  }
  console.log(JSON.stringify(result, null, 2));
}
