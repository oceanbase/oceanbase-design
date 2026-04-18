// @ts-nocheck

import { figma } from '@figma/code-connect';
// Popconfirm 稿面与 antd 默认警告图标一致；@oceanbase/icons 无 ExclamationCircleFilled 语义等价导出（§1）。
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Popconfirm } from '@oceanbase/design';

/**
 * Code Connect — Popconfirm（5026:7212：`placement`、`text`→title）。
 * 预览根布局与稿面像素见 `demo/index.figma.tsx`（§3.4a）；稿面静态展示用 `open: true`。
 */

// Figma: "Popconfirm" · 5026:7212
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7212&m=dev
figma.connect(Popconfirm, '<FIGMA_OCEANBASE_POPCONFIRM>', {
  props: {
    title: figma.string('text'),
    placement: figma.enum('placement', {
      topright: 'topRight',
      topleft: 'topLeft',
      bottomright: 'bottomRight',
      bottomleft: 'bottomLeft',
      right: 'right',
      righttop: 'rightTop',
      righbottom: 'rightBottom',
      left: 'left',
      lefttop: 'leftTop',
      leftbottom: 'leftBottom',
      bottom: 'bottom',
      top: 'top',
    }),
    okText: 'Confirm',
    cancelText: 'Cancel',
    icon: <ExclamationCircleFilled />,
    open: true,
  },
  example: ({ title, placement, okText, cancelText, icon, open }) => (
    <Popconfirm
      title={title}
      placement={placement}
      okText={okText}
      cancelText={cancelText}
      icon={icon}
      open={open}
    >
      <Button type="primary">Button</Button>
    </Popconfirm>
  ),
});
