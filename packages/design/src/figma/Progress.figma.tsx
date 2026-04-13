// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Progress } from '@oceanbase/design';

/**
 * Code Connect — Progress（Figma「Process」· 2245:3617：status、type）。
 * Page: "↵Progress"
 */

// Figma: "Process" · 2245:3617
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-3617&m=dev
figma.connect(Progress, '<FIGMA_OCEANBASE_PROCESS>', {
  props: {
    root: figma.enum('type', {
      Circle: figma.enum('status', {
        going: <Progress type="circle" percent={68} status="active" showInfo size={48} />,
        success: <Progress type="circle" percent={100} status="success" showInfo size={48} />,
        error: <Progress type="circle" percent={100} status="exception" showInfo size={48} />,
      }),
      Line: figma.enum('status', {
        going: <Progress type="line" percent={50} status="active" showInfo />,
        success: <Progress type="line" percent={100} status="success" showInfo />,
        error: <Progress type="line" percent={100} status="exception" showInfo />,
      }),
      LineMini: figma.enum('status', {
        going: <Progress type="line" percent={50} status="active" showInfo size="small" />,
        success: <Progress type="line" percent={100} status="success" showInfo size="small" />,
        error: <Progress type="line" percent={100} status="exception" showInfo size="small" />,
      }),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
