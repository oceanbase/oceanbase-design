// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Tooltip } from '@oceanbase/design';

/**
 * Code Connect — Tooltip（placement、文案与 5025:6082 一致）。
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
  },
  example: ({ title, placement }) => (
    <div
      style={{
        padding: 24,
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxSizing: 'border-box',
      }}
    >
      <Tooltip title={title} placement={placement} open>
        <span style={{ color: '#1677ff', cursor: 'default' }}>Trigger</span>
      </Tooltip>
    </div>
  ),
});
