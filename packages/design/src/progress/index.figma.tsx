// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Progress } from '@oceanbase/design';

/**
 * Code Connect — Progress（Figma「Process」· 2245:3617：type、status）。
 * Page: "↵Progress"
 * 预览根尺寸与白底见 `demo/index.figma.tsx`（§3.4a）。
 */

// Figma: "Process" · 2245:3617
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-3617&m=dev
figma.connect(Progress, '<FIGMA_OCEANBASE_PROCESS>', {
  props: {
    type: figma.enum('type', {
      Circle: 'circle',
      Line: 'line',
      LineMini: 'line',
    }),
    status: figma.enum('status', {
      going: 'active',
      success: 'success',
      error: 'exception',
    }),
    percent: figma.enum('type', {
      Circle: figma.enum('status', {
        going: 68,
        success: 100,
        error: 100,
      }),
      Line: figma.enum('status', {
        going: 50,
        success: 100,
        error: 100,
      }),
      LineMini: figma.enum('status', {
        going: 50,
        success: 100,
        error: 100,
      }),
    }),
    size: figma.enum('type', {
      Circle: 48,
      Line: 'default',
      LineMini: 'small',
    }),
  },
  example: ({ type, status, percent, size }) => (
    <Progress type={type} percent={percent} status={status} showInfo size={size} />
  ),
});
