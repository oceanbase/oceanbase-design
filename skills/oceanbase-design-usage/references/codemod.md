# @oceanbase/codemod 使用要点

## 定位

OceanBase Design 的**自动化迁移工具**，用于将存量项目从 antd、obui、techui、pro-components、ob-charts、obutil 等迁移到 `@oceanbase/design`、`@oceanbase/ui`、`@oceanbase/charts`、`@oceanbase/util`，以及将样式从 Less/Sass 迁移到 token 或 CSS 变量。

## 版本要求

请使用 **@oceanbase/codemod@^1.0.0-alpha.0**（即 >= 1.0.0-alpha.0 的兼容版本）。命令中显式指定版本：

```bash
# 使用 npx 并指定版本（推荐）
npx @oceanbase/codemod@^1.0.0-alpha.0 <path>

# 或在项目中安装
npm install -D @oceanbase/codemod@^1.0.0-alpha.0
# 然后执行
npx codemod <path>
```

旧版本可能缺少 transformer 或行为不一致，迁移前请确认版本。

## 何时使用

- **迁移/升级**：项目从 antd、@alipay/ob-ui 迁移到 @oceanbase/design，从 @alipay/tech-ui、@ant-design/pro-components 迁移到 @oceanbase/ui，从 @ant-design/charts、@alipay/ob-charts 迁移到 @oceanbase/charts。
- **样式迁移**：Less/Sass 中的变量迁移到 design token 或 CSS 变量（less-to-token、less-to-cssvar、sass-to-cssvar）；代码中的 antd style/useToken 迁移到 design 的 theme.useToken（style-to-token）。

## 基本用法

在**目标项目根目录**或**要迁移的目录**下执行，传入路径为当前目录或子目录。**命令中须指定版本 `@oceanbase/codemod@^1.0.0-alpha.0`**：

```bash
# 迁移当前目录
npx @oceanbase/codemod@^1.0.0-alpha.0 .

# 仅迁移 src 目录
npx @oceanbase/codemod@^1.0.0-alpha.0 ./src
```

- **默认会检查 git 工作区干净**（无未提交修改），否则会拒绝执行，避免误覆盖。确需跳过时使用 `--force`（谨慎使用）。
- 默认不执行 Prettier；若需自动格式化，传入 `--disablePrettier=false`。

## 内置 Transformer（按执行顺序）

| Transformer | 说明 | 默认执行 |
| --- | --- | --- |
| antd-and-ob-charts-to-oceanbase-charts | antd 图表、ob-charts → @oceanbase/charts | ✅ |
| antd-to-oceanbase-design | antd 组件/引用 → @oceanbase/design | ✅ |
| obui-to-oceanbase-design-and-ui | 旧 @oceanbase/ui (obui) → design + ui | ✅ |
| obutil-to-oceanbase-util | @oceanbase/obutil → @oceanbase/util | ✅ |
| techui-and-pro-components-to-oceanbase-ui | techui、pro-components → @oceanbase/ui | ✅ |
| style-to-token | antd style/useToken → design theme.useToken | ✅ |
| less-to-token | Less 变量 → design token 引用 | ✅ |
| less-to-cssvar | Less → CSS 变量（需显式指定） | 否 |
| sass-to-cssvar | Sass → CSS 变量（需显式指定） | 否 |

仅执行部分 transformer 时，使用 `--transformer`，多个用逗号分隔：

```bash
npx @oceanbase/codemod@^1.0.0-alpha.0 . --transformer=antd-to-oceanbase-design,obutil-to-oceanbase-util
npx @oceanbase/codemod@^1.0.0-alpha.0 . --transformer=less-to-cssvar --prefix=ant
```

## 常用选项

| 选项                      | 说明                                                          |
| ------------------------- | ------------------------------------------------------------- |
| `--force`                 | 跳过 git 工作区检查（慎用）                                   |
| `--transformer=t1,t2`     | 只运行指定的 transformer                                      |
| `--disablePrettier=false` | 运行后执行 Prettier 格式化                                    |
| `--cpus=N`                | 并行进程数（默认与 CPU 相关）                                 |
| `--prefix=ant`            | less-to-cssvar / sass-to-cssvar 的 CSS 变量前缀（默认 `ant`） |

less-to-cssvar 还支持 `--rename-to`、`--add-module` 等，详见包内文档或 `packages/codemod` 源码。

## 与 design 规范的关系

执行 codemod 后，迁移结果应满足本 skill 中的使用规范：从 `@oceanbase/design` 引入组件与 theme、根节点 ConfigProvider、表格用 Table、筛选用 Filter、图标用 @oceanbase/icons 等。迁移完成后建议按 [design 概述](design/00-overview.md) 与各 reference 做一次人工核对与修正。
