/**
 * Per-config code generators — simulate agent output under different tooling.
 */
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../../..');
const obCli = join(repoRoot, 'packages/cli/bin/ob-design.mjs');

function obTemplate(name) {
  try {
    return execFileSync(process.execPath, [obCli, 'template', name], {
      encoding: 'utf8',
      cwd: repoRoot,
    });
  } catch {
    return null;
  }
}

function obRoute(intent) {
  try {
    return JSON.parse(
      execFileSync(process.execPath, [obCli, 'route', intent, '--json'], {
        encoding: 'utf8',
        cwd: repoRoot,
      }),
    );
  } catch {
    return null;
  }
}

/** Naive antd agent — typical constraint violations */
export function generateBaselineAntd(prompt) {
  const { category, id } = prompt;
  const antd = `import { Table, Card, Select, Button, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <ConfigProvider>
      <Card bodyStyle={{ padding: 0 }}>
        <Select placeholder="filter" style={{ margin: 8 }} />
        <Table dataSource={[]} columns={[{ title: 'Name', dataIndex: 'name' }]} />
      </Card>
      <Button icon={<SearchOutlined />}>Search</Button>
    </ConfigProvider>
  );
}`;
  const variants = {
    'filter-table-list': antd,
    'card-inner-bordered': `import { Table, Card } from 'antd';
export default () => <Card bodyStyle={{ padding: 0 }}><Table /></Card>;`,
    'config-provider-app': `import { App } from 'antd';
export default () => <App />;`,
    'protable-vs-table': `import { ProTable } from '@ant-design/pro-components';
export default () => <ProTable columns={[]} dataSource={[]} />;`,
    'ob-icons-button': `import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default () => <Button icon={<SearchOutlined />}>Go</Button>;`,
    'light-filter-bar': `import { Select } from 'antd';
export default () => <Select options={[]} />;`,
    'select-not-filter': `import { Select, Space } from 'antd';
export default () => <Space><Select /><Select /></Space>;`,
  };
  return variants[id] || antd;
}

/** Skill-only — OB imports but common mistakes */
export function generateObSkillOnly(prompt) {
  const { category, id } = prompt;
  if (category === 'filter' || id === 'select-not-filter') {
    return `import { ConfigProvider, Select, Table } from '@oceanbase/design';
export default () => (
  <ConfigProvider>
    <Select placeholder="status" />
    <Table dataSource={[]} columns={[{ title: 'x', dataIndex: 'x' }]} />
  </ConfigProvider>
);`;
  }
  if (category === 'card-table') {
    return `import { ConfigProvider, Card, Table } from '@oceanbase/design';
export default () => (
  <ConfigProvider>
    <Card bodyStyle={{ padding: 0 }}><Table dataSource={[]} columns={[]} /></Card>
  </ConfigProvider>
);`;
  }
  return generateObMcpOnly(prompt).replace(/innerBordered/g, '');
}

/** AGENTS.md — better imports, still may miss edge cases */
export function generateObAgentsMd(prompt) {
  const code = generateObMcpOnly(prompt);
  if (prompt.category === 'card-table' && !/innerBordered/.test(code)) {
    return code.replace('<Table', '<Table innerBordered');
  }
  return code;
}

/** ob-design mcp — route + template + category fixes */
export function generateObMcpOnly(prompt) {
  const { category, id } = prompt;

  const byId = {
    'table-batch-actions': `import { ConfigProvider, Table, Button } from '@oceanbase/design';
export default () => (
  <ConfigProvider>
    <Table
      rowSelection={{}}
      columns={[{ title: 'Name', dataIndex: 'name' }]}
      dataSource={[]}
      toolOptionsRender={() => [<Button key="del" danger>Delete</Button>]}
    />
  </ConfigProvider>
);`,
    'ob-icons-button': `import { ConfigProvider, Button } from '@oceanbase/design';
import { SearchOutlined } from '@oceanbase/icons';
export default () => (
  <ConfigProvider><Button type="primary" icon={<SearchOutlined />}>Search</Button></ConfigProvider>
);`,
    'spin-loading': `import { ConfigProvider, Spin } from '@oceanbase/design';
export default () => <ConfigProvider><Spin gray /></ConfigProvider>;`,
    'empty-guide': `import { ConfigProvider, Empty } from '@oceanbase/design';
export default () => <ConfigProvider><Empty title="No data" steps={[{ title: 'Step 1' }]} layout="vertical" /></ConfigProvider>;`,
    'alert-mini': `import { ConfigProvider, Alert } from '@oceanbase/design';
export default () => <ConfigProvider><Alert mini ghost message="Fix errors" /></ConfigProvider>;`,
    'config-aliyun-theme': `import { ConfigProvider } from '@oceanbase/design';
export default () => <ConfigProvider theme={{ isAliyun: true }}>app</ConfigProvider>;`,
    'protable-vs-table': `import { ConfigProvider, Table } from '@oceanbase/design';
export default () => (
  <ConfigProvider>
    <Table columns={[{ title: 'A', dataIndex: 'a' }]} dataSource={[]} />
  </ConfigProvider>
);`,
    'light-filter-bar': `import { ConfigProvider } from '@oceanbase/design';
import { LightFilter } from '@oceanbase/ui';
export default () => <ConfigProvider><LightFilter /></ConfigProvider>;`,
    'result-404': `import { ConfigProvider, Result } from '@oceanbase/design';
export default () => <ConfigProvider><Result status="404" /></ConfigProvider>;`,
    'dropdown-actions': `import { ConfigProvider, Table, Dropdown, Button } from '@oceanbase/design';
export default () => (
  <ConfigProvider>
    <Table columns={[{ title: 'A', dataIndex: 'a' }]} dataSource={[]} toolOptionsRender={() => [
      <Dropdown key="d" menu={{ items: [{ key: '1', label: 'Edit' }] }}><Button>Actions</Button></Dropdown>
    ]} />
  </ConfigProvider>
);`,
    'page-container-detail': obTemplate('detail-descriptions'),
    'basic-layout-shell': obTemplate('app-basic-layout'),
    'form-modal-create': obTemplate('form-in-modal'),
    'filter-controlled': `import React, { useState } from 'react';
import { ConfigProvider, Filter, Table } from '@oceanbase/design';
export default () => {
  const [v, setV] = useState({});
  return (
    <ConfigProvider>
      <Filter.ResponsiveGroup value={v} onChange={setV}>
        <Filter.Select label="Status" name="status" value={v.status} onChange={(s) => setV({ ...v, status: s })} options={[]} />
      </Filter.ResponsiveGroup>
      <Table dataSource={[]} columns={[{ title: 'x', dataIndex: 'x' }]} />
    </ConfigProvider>
  );
};`,
  };

  if (byId[id]) return byId[id];

  const route = obRoute(prompt.prompt);
  const templateName = route?.template;
  if (templateName) {
    const tpl = obTemplate(templateName);
    if (tpl) return tpl;
  }

  if (category === 'filter' && id !== 'light-filter-bar') {
    return obTemplate('list-filter-table') || byId['filter-controlled'];
  }
  if (category === 'config') {
    return `import { ConfigProvider } from '@oceanbase/design';
export default ({ children }) => <ConfigProvider>{children}</ConfigProvider>;`;
  }

  return obTemplate('list-filter-table') || `import { ConfigProvider } from '@oceanbase/design';
export default () => <ConfigProvider>TODO</ConfigProvider>;`;
}

export function generateObFull(prompt) {
  return generateObMcpOnly(prompt);
}

const GENERATORS = {
  'baseline-antd': generateBaselineAntd,
  'ob-skill-only': generateObSkillOnly,
  'ob-agents-md': generateObAgentsMd,
  'ob-mcp-only': generateObMcpOnly,
  'ob-full': generateObFull,
};

export function generateForConfig(configId, prompt) {
  const fn = GENERATORS[configId];
  if (!fn) throw new Error(`Unknown config: ${configId}`);
  return fn(prompt);
}

export function listConfigIds(selected) {
  if (!selected || selected === 'all') return Object.keys(GENERATORS);
  return selected.split(',').map((s) => s.trim());
}
