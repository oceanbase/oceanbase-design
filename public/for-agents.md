# OceanBase Design — For Agents

> Static entry for AI tools. Full guide: [/docs/react/for-agents](/docs/react/for-agents)

## Copy this prompt

```text
你正在开发使用 @oceanbase/design 的 React 项目。写代码前请阅读：
/docs/react/for-agents.md
https://github.com/oceanbase/oceanbase-design/blob/master/skills/oceanbase-design-usage/SKILL.md

规则：只使用 ob-design mcp（ob_info 等），禁止 antd MCP；从 @oceanbase/design、@oceanbase/icons 引入；筛选用 Filter.*；Card+Table 用 innerBordered；根节点 ConfigProvider。

npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
npx @oceanbase/design-cli setup --client cursor
```

> 上列路径以站点根为基准。Agent 抓取时请拼接当前 origin（本地 `http://localhost:8000`，生产 `https://design.oceanbase.com`）。

## Resources

| Resource | Path |
| --- | --- |
| For Agents | `/docs/react/for-agents.md` |
| LLMs.txt | `/llms.txt` |
| design.md | `/design.md` |
| llms-full.txt | `/llms-full.txt` |
| Constraints | `/llms-ob-constraints.txt` |
| MCP guide | `/docs/react/mcp.md` |
| CLI guide | `/docs/react/cli.md` |

## MCP

```json
{
  "mcpServers": {
    "oceanbase-design": {
      "command": "npx",
      "args": ["-y", "@oceanbase/design-cli", "mcp"]
    }
  }
}
```
