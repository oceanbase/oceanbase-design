---
title: 迁移指南
order: 12
group: 基础组件
---

从 antd、obui、techui 等迁移到 OceanBase Design 的 CLI 与 codemod 指南。Agent 接入见 [For Agents](/docs/react/for-agents)。

## ob-design migrate（推荐）

```bash
ob-design migrate ./src
ob-design migrate ./src --dry
```

未全局安装时：`npx @oceanbase/design-cli migrate ./src`

内部调用 `@oceanbase/codemod`，并在项目根目录生成 `migration-report.json`。

## @oceanbase/codemod

```bash
npx @oceanbase/codemod@^1.0.0-alpha.0 ./src
```

### 常用 transformer

| Transformer                               | 说明                           |
| ----------------------------------------- | ------------------------------ |
| antd-to-oceanbase-design                  | antd → @oceanbase/design       |
| techui-and-pro-components-to-oceanbase-ui | pro-components → @oceanbase/ui |
| obutil-to-oceanbase-util                  | obutil → @oceanbase/util       |
| style-to-token                            | antd useToken → design theme   |

仅运行部分 transformer：

```bash
npx @oceanbase/codemod@^1.0.0-alpha.0 . --transformer=antd-to-oceanbase-design
```

## 迁移后核对

1. 根节点 `ConfigProvider`（@oceanbase/design）
2. 图标改为 `@oceanbase/icons`
3. 筛选用 `Filter.*`
4. `ob-design lint ./src` 静态检查
5. `ob-design doctor` 依赖与健康检查

详见 Skill [codemod 要点](https://github.com/oceanbase/oceanbase-design/blob/master/skills/oceanbase-design/references/codemod.md) 与 [For Agents](/docs/react/for-agents)。
