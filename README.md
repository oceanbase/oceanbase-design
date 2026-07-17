[OceanBase Design](https://design.oceanbase.com) is an enterprise-class design system based on [Ant Design](https://ant.design) and extending it. Help OceanBase ecology and designers/developers building professional products.

## 📋 Documentation

- [https://design.oceanbase.com](https://design.oceanbase.com)

## 🔨 Usage

- [@oceanbase/design](https://design.oceanbase.com/docs/design-introduce)
- [@oceanbase/ui](https://design.oceanbase.com/docs/ui-introduce)
- [@oceanbase/icons](https://design.oceanbase.com/components/icon)
- [@oceanbase/charts](https://design.oceanbase.com/docs/charts-introduce)
- [@oceanbase/util](https://github.com/oceanbase/oceanbase-design/tree/master/packages/util)
- [@oceanbase/codemod](https://github.com/oceanbase/oceanbase-design/tree/master/packages/codemod)
- [@oceanbase/design-cli](https://github.com/oceanbase/oceanbase-design/tree/master/packages/cli) — Agent CLI & MCP（[文档](https://design.oceanbase.com/docs/react/cli)）

## 🤖 For AI Agents

| 文档 | 说明 |
| --- | --- |
| [For Agents](https://design.oceanbase.com/docs/react/for-agents) | 可复制 Prompt + 能力总览 |
| [LLMs.txt](https://design.oceanbase.com/docs/react/llms) | 结构化文档索引 |
| [MCP Server](https://design.oceanbase.com/docs/react/mcp) | `ob-design mcp` 配置与工具 |
| [CLI](https://design.oceanbase.com/docs/react/cli) | `ob-design` 命令参考 |
| [Agent Skills](https://design.oceanbase.com/docs/design/design-skills) | `oceanbase-design-usage` Skill |

```bash
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
```

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/oceanbase/oceanbase-design)

Or clone locally:

```bash
$ git clone git@github.com:oceanbase/oceanbase-design.git
$ cd oceanbase-design
$ npm install -g pnpm
$ pnpm install
$ pnpm run start
```

Open your browser and visit http://127.0.0.1:8000.

## 🔗 Links

- [Ant Design](https://ant.design)
- [Ant Design Pro Components](https://procomponents.ant.design)
- [Ant Design Charts](https://charts.ant.design)

## ⚖️ License

MIT © [OceanBase](https://github.com/oceanbase)

## Contributors

<a href="https://github.com/oceanbase/oceanbase-design/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oceanbase/oceanbase-design" />
</a>
