# 组件映射链接（Figma ↔ 文档站 Playground）

把 **`figma.connect` 占位键** 对应的 Figma 组件节点挂上文档站 **「组件映射」Tab** 的 URL，方便从稿面跳回交互预览。

---

## 怎么做

1. **生成 JSON**  
   在项目根目录执行：

   ```bash
   pnpm generate:playground-connect-map
   ```

   产出 **`figma/playground-connect-map.json`**：`占位键 → 文档站 URL`（如 `https://design.oceanbase.com/components/<slug>?tab=playground`）。

2. **按 JSON 逐条在 Figma 里写入**  
   对 **每一条** 键值对：
   - 用 **同一占位键** 在 **`figma/figma.config.json`** 的 **`codeConnect.documentUrlSubstitutions`** 里找到对应 Figma 链接，解析 **`fileKey`** 和 **`node-id`**（`5025-6647` → Plugin API 里写成 `5025:6647`）。
   - 用 Figma MCP **`use_figma`**（需先按 figma-use 技能）执行一次：在对应节点上设置 **`documentationLinks`**（以及可选 **`descriptionMarkdown`**）为 JSON 里的 **那条 URL**。

   **一条 JSON 对应一次 `use_figma`，不要**再写仓库里的额外脚本或临时文件。

3. **完成**  
   全部条目执行完后，设计稿上的组件节点与文档站 **组件映射** 即对齐。

---

## 注意

- **不要**改 `*.figma.tsx` 去给 `figma.connect` 加链接字段（避免影响 `figma connect parse`）。
- 链接只写在 **Figma 节点**上；若节点是 **引用库** 里的主组件，要到 **库源文件** 里改对应主组件。
