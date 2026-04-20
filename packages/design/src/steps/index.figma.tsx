// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Steps } from '@oceanbase/design';

/**
 * Code Connect — Steps / Steps.Step（2348:4030 StepItem、5026:8410 Steps）。
 * Figma `status=current` → antd `process`（§2.1 非原生布尔用 enum 分支）。
 *
 * StepItem：`status` 与稿面对齐；`title` 曾用 `figma.string('title')`，校验报稿面无该属性，故示例标题暂用字面量 `Node`（与 Playground 一致）。若设计稿恢复/暴露可绑定的文本层名，再改回 `figma.string` / `figma.textContent`（见 MCP `get_context_for_code_connect`）。
 *
 * Steps（四步）：`title-1`…`title-4` 在稿面组件上不存在，无法做逐段 `figma.string`；按 §3.3 将整段 Steps 作为单一 `root` 映射，文案占位 `Node`。
 * 预览根布局见 `demo/*.figma.tsx`（§3.4a）；映射不挂 `style` / `className` / `styles`（§3.4c）。
 */

// Figma: "StepItem" · 2348:4030
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-4030&m=dev
figma.connect(Steps.Step, '<FIGMA_OCEANBASE_STEPITEM>', {
  props: {
    status: figma.enum('status', {
      wait: 'wait',
      finish: 'finish',
      current: 'process',
    }),
  },
  example: ({ status }) => (
    <Steps current={0}>
      <Steps.Step title="Node" status={status} />
    </Steps>
  ),
});

// Figma: "Steps" · 5026:8410
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-8410&m=dev
figma.connect(Steps, '<FIGMA_OCEANBASE_STEPS>', {
  props: {
    root: (
      <Steps>
        <Steps.Step title="Node" status="finish" />
        <Steps.Step title="Node" status="process" />
        <Steps.Step title="Node" status="wait" />
        <Steps.Step title="Node" status="wait" />
      </Steps>
    ),
  },
  example: ({ root }) => <div>{root}</div>,
});
