import { DownOutlined, ObTenantOutlined } from '@oceanbase/icons';
import { Badge, Button, Checkbox, Progress, Space, Tag, Typography } from '@oceanbase/design';
import React from 'react';

/** 与 `../index.figma.tsx` FIGMA_OCEANBASE_TABLECELL 中 `element` 枚举一致 */
export type ElementType = 'Default' | 'Tag' | 'Status' | 'Process' | 'Actions';

const downIcon = <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />;
const tenantIcon = <ObTenantOutlined style={{ fontSize: 14, color: '#595959' }} />;

/** 表格单元格内复选框：阻止事件冒泡到 Table 行/表头，避免点击无效 */
function CellCheckbox() {
  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return <Checkbox onClick={stop} onMouseDown={stop} />;
}

/**
 * Default 单元格：按 unfold × checkbox × icon × desc **语义**线性组合，保证面板开关均有可见反馈。
 * 说明：`index.figma.tsx` 嵌套树在 unfold=true 时部分 checkbox 真假分支 JSX 相同，严格复刻会导致
 * 「checkbox 开关无效果」；演示页以语义为准，完整 Code Connect 仍以 `index.figma.tsx` 为准。
 */
export function buildDefaultCell(
  unfold: boolean,
  checkbox: boolean,
  icon: boolean,
  desc: boolean,
  title: string,
  descText: string
): React.ReactNode {
  const titleNode = <Typography.Text>{title}</Typography.Text>;
  const descSecondary = <Typography.Text type="secondary">{descText}</Typography.Text>;
  const vertical = (
    <Space direction="vertical" size={0}>
      {titleNode}
      {descSecondary}
    </Space>
  );
  const textBlock = desc ? vertical : titleNode;

  return (
    <Space size={4} align="start">
      {unfold ? downIcon : null}
      {checkbox ? <CellCheckbox /> : null}
      {icon ? tenantIcon : null}
      {textBlock}
    </Space>
  );
}

export function buildFigmaTableCell(
  element: ElementType,
  unfold: boolean,
  checkbox: boolean,
  icon: boolean,
  desc: boolean,
  title: string,
  descText: string
): React.ReactNode {
  switch (element) {
    case 'Default':
      return buildDefaultCell(unfold, checkbox, icon, desc, title, descText);
    case 'Tag':
      return (
        <Space size={4}>
          <span style={{ display: 'none' }} aria-hidden>
            {title}
          </span>
          <span style={{ display: 'none' }} aria-hidden>
            {descText}
          </span>
          <Tag color="error">tag</Tag>
          <Tag color="success">tag</Tag>
          <Tag color="processing">tag</Tag>
        </Space>
      );
    case 'Status':
      return (
        <Space size={8} align="center">
          <span style={{ display: 'none' }} aria-hidden>
            {title}
          </span>
          <span style={{ display: 'none' }} aria-hidden>
            {descText}
          </span>
          <Badge status="processing" text="status" />
        </Space>
      );
    case 'Process':
      return (
        <Space size={8} align="center">
          <span style={{ display: 'none' }} aria-hidden>
            {title}
          </span>
          <span style={{ display: 'none' }} aria-hidden>
            {descText}
          </span>
          <Progress percent={50} showInfo={false} style={{ width: 120 }} />
          <Typography.Text>50%</Typography.Text>
        </Space>
      );
    case 'Actions':
      return (
        <Space size={8}>
          <span style={{ display: 'none' }} aria-hidden>
            {title}
          </span>
          <span style={{ display: 'none' }} aria-hidden>
            {descText}
          </span>
          <Button type="primary" ghost>
            Button
          </Button>
          <Button>Button</Button>
          <Button icon={<Typography.Text>⋯</Typography.Text>} />
        </Space>
      );
    default:
      return null;
  }
}
