// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Badge, Breadcrumb, Button, Space, Typography } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Breadcrumb"
 * Stubs use figma.connect(<></>, …); swap in your component and refine prop mappings.
 */

// Figma: "Breadcrumb" · 5029:8008
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5029-8008&m=dev
figma.connect(Breadcrumb, '<FIGMA_OCEANBASE_BREADCRUMB>', {
  props: {
    items: [
      {
        title: (
          <Space direction="horizontal" size={6}>
            <Typography.Text type="secondary">Org-name</Typography.Text>
          </Space>
        ),
      },
      {
        title: (
          <Space direction="horizontal" size={6}>
            <Typography.Text type="secondary">Project-name</Typography.Text>
          </Space>
        ),
      },
      {
        title: (
          <Space direction="horizontal" size={6}>
            <Badge status="error" />
            <Typography.Text type="secondary">Instance-name</Typography.Text>
          </Space>
        ),
      },
      {
        title: (
          <Space direction="horizontal" size={6}>
            <Badge status="error" />
            <Typography.Text strong>Tenant-name</Typography.Text>
          </Space>
        ),
      },
    ],
  },
  example: ({ items }) => <Breadcrumb separator="/" items={items} />,
});

// Figma: "BreadcrumbItem" · 5026:8135
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-8135&m=dev
figma.connect(Breadcrumb.Item, '<FIGMA_OCEANBASE_BREADCRUMBITEM>', {
  props: {
    separator: figma.boolean('divider', {
      true: '/',
      false: '',
    }),
    inlineDivider: figma.boolean('divider', {
      true: <Typography.Text type="secondary">/</Typography.Text>,
      false: <></>,
    }),
    statusBadge: figma.boolean('badge', {
      true: <Badge status="error" />,
      false: <></>,
    }),
    actionButton: figma.boolean('action', {
      true: (
        <Button type="default" variant="outlined" size="small">
          Connect
        </Button>
      ),
      false: <></>,
    }),
    labelText: figma.enum('status', {
      default: <Typography.Text type="secondary">{figma.textContent('name')}</Typography.Text>,
      selected: <Typography.Text strong>{figma.textContent('name')}</Typography.Text>,
    }),
  },
  example: ({ separator, inlineDivider, statusBadge, actionButton, labelText }) => (
    <Breadcrumb
      separator={separator}
      items={[
        {
          title: (
            <Space direction="horizontal" size={6}>
              {statusBadge}
              {labelText}
              {inlineDivider}
              {actionButton}
            </Space>
          ),
        },
      ]}
    />
  ),
});
