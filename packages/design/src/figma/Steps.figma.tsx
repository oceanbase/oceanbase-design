// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Steps } from '@oceanbase/design';

/**
 * Code Connect — Steps（StepItem 三态 + Steps 四步组合，与设计稿一致）。
 * Figma `status=current` 对应 antd `Steps.Step` 的 `status="process"`。
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
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Steps current={0}>
        <Steps.Step title="Node" status={status} />
      </Steps>
    </div>
  ),
});

// Figma: "Steps" · 5026:8410
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-8410&m=dev
figma.connect(Steps, '<FIGMA_OCEANBASE_STEPS>', {
  props: {},
  example: () => (
    <div
      style={{
        padding: 24,
        background: '#141414',
        boxSizing: 'border-box',
      }}
    >
      <Steps>
        <Steps.Step title="Node" status="finish" />
        <Steps.Step title="Node" status="process" />
        <Steps.Step title="Node" status="wait" />
        <Steps.Step title="Node" status="wait" />
      </Steps>
    </div>
  ),
});
