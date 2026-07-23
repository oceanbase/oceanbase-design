// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Button, Tooltip } from '@oceanbase/design';

/**
 * Code Connect — Tooltip（placement、文案与 5025:6082 一致）。
 * 预览根布局与背景见 `demo/index.figma.tsx`（§3.4a）；稿面静态展示用 `open`。
 */

// Figma: "Tooltip" · 5025:6082
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-6082&m=dev
figma.connect(Tooltip, '<FIGMA_OCEANBASE_TOOLTIP>', {
  props: {
    title: figma.string('text'),
    placement: figma.enum('placement', {
      topright: 'topRight',
      topleft: 'topLeft',
      bottom: 'bottom',
      bottomright: 'bottomRight',
      bottomleft: 'bottomLeft',
      right: 'right',
      righttop: 'rightTop',
      top: 'top',
      rightbottom: 'rightBottom',
      left: 'left',
      lefttop: 'leftTop',
      leftbottom: 'leftBottom',
    }),
    open: true,
  },
  example: ({ title, placement, open }) => (
    <Tooltip title={title} placement={placement} open={open}>
      <Button type="link">Trigger</Button>
    </Tooltip>
  ),
});
