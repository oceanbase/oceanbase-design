# OceanBase Design — For Agents

> Static entry for AI tools. Full guide: [/docs/react/for-agents](/docs/react/for-agents)

## Copy this prompt

```text
你正在开发使用 @oceanbase/design 的 React 项目。写代码前请阅读：
https://design.oceanbase.com/docs/react/for-agents.md
https://github.com/oceanbase/oceanbase-design/blob/master/skills/oceanbase-design-usage/SKILL.md

规则：只使用 ob-design mcp（ob_info 等），禁止 antd MCP；从 @oceanbase/design、@oceanbase/icons 引入；筛选用 Filter.*；Card+Table 用 innerBordered；根节点 ConfigProvider。

npx openskills install oceanbase/oceanbase-design/skills/oceanbase-design-usage
npm install -g @oceanbase/design-cli
ob-design setup --client cursor
```

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

全局安装后：

```json
{
  "mcpServers": {
    "oceanbase-design": {
      "command": "ob-design",
      "args": ["mcp"]
    }
  }
}
```

未全局安装时：

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
