import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Space, Typography } from '@oceanbase/design';
import type { SpaceProps } from 'antd/es/space';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_BUTTON_GROUP>` 的 `props` / `example` 一致。
 * Figma 组件名为 Button Group；代码侧用 `Space` 排布（与 Code Connect 第二条 connect 一致）。
 */

type GroupTypeKey = 'default' | 'text' | 'expand';
type GroupLayoutKey = 'lefttoright' | 'righttoleft';
type GroupSizeKey = 'medium' | 'small';

function deriveSpaceSize(figmaSize: GroupSizeKey): SpaceProps['size'] {
  return figmaSize === 'small' ? 'small' : 'middle';
}

function deriveGroupStyle(layout: GroupLayoutKey): CSSProperties | undefined {
  return layout === 'righttoleft' ? { direction: 'rtl' } : undefined;
}

/** 与 `index.figma.tsx` 中 `children` 各分支 JSX 一致 */
function deriveGroupChildren(
  type: GroupTypeKey,
  layout: GroupLayoutKey,
  size: GroupSizeKey
): React.ReactNode {
  const sm = size === 'small';
  const middle = !sm;

  if (type === 'default') {
    if (layout === 'lefttoright') {
      if (middle) {
        return (
          <>
            <Button type="primary" size="middle">
              Button
            </Button>
            <Button type="default" color="primary" variant="outlined" size="middle">
              Button
            </Button>
            <Button type="default" size="middle">
              Button
            </Button>
            <Button type="default" size="middle" icon={<EllipsisOutlined />} />
          </>
        );
      }
      return (
        <>
          <Button type="primary" size="small">
            Button
          </Button>
          <Button type="default" color="primary" variant="outlined" size="small">
            Button
          </Button>
          <Button type="default" size="small">
            Button
          </Button>
          <Button type="default" size="small" icon={<EllipsisOutlined />} />
        </>
      );
    }
    if (middle) {
      return (
        <>
          <Button type="default" size="middle">
            Button
          </Button>
          <Button type="default" color="primary" variant="outlined" size="middle">
            Button
          </Button>
          <Button type="primary" size="middle">
            Button
          </Button>
          <Button type="default" size="middle" icon={<EllipsisOutlined />} />
        </>
      );
    }
    return (
      <>
        <Button type="default" size="small">
          Button
        </Button>
        <Button type="default" color="primary" variant="outlined" size="small">
          Button
        </Button>
        <Button type="primary" size="small">
          Button
        </Button>
        <Button type="default" size="small" icon={<EllipsisOutlined />} />
      </>
    );
  }

  if (type === 'text') {
    if (layout === 'lefttoright') {
      if (middle) {
        return (
          <>
            <Button type="text" size="middle" icon={<DownOutlined />} iconPosition="end">
              Button
            </Button>
            <Button type="text" size="middle">
              Button
            </Button>
            <Button type="text" size="middle" icon={<EllipsisOutlined />} />
          </>
        );
      }
      return (
        <>
          <Button type="text" size="small" icon={<DownOutlined />} iconPosition="end">
            Button
          </Button>
          <Button type="text" size="small">
            Button
          </Button>
          <Button type="text" size="small" icon={<EllipsisOutlined />} />
        </>
      );
    }
    if (middle) {
      return (
        <>
          <Button type="text" size="middle" icon={<DownOutlined />} iconPosition="end">
            Button
          </Button>
          <Button type="text" size="middle">
            Button
          </Button>
          <Button type="text" size="middle" icon={<EllipsisOutlined />} />
        </>
      );
    }
    return (
      <>
        <Button type="text" size="small" icon={<DownOutlined />} iconPosition="end">
          Button
        </Button>
        <Button type="text" size="small">
          Button
        </Button>
        <Button type="text" size="small" icon={<EllipsisOutlined />} />
      </>
    );
  }

  /* expand */
  if (layout === 'lefttoright') {
    if (middle) {
      return (
        <>
          <Button.Group size="middle">
            <Button type="primary" size="middle">
              Button
            </Button>
            <Button type="primary" size="middle" icon={<DownOutlined />} />
          </Button.Group>
          <Button type="default" size="middle">
            Button
          </Button>
          <Button type="default" size="middle" icon={<EllipsisOutlined />} />
        </>
      );
    }
    return (
      <>
        <Button.Group size="small">
          <Button type="primary" size="small">
            Button
          </Button>
          <Button type="primary" size="small" icon={<DownOutlined />} />
        </Button.Group>
        <Button type="default" size="small">
          Button
        </Button>
        <Button type="default" size="small" icon={<EllipsisOutlined />} />
      </>
    );
  }

  if (middle) {
    return (
      <>
        <Button type="default" size="middle">
          Button
        </Button>
        <Button type="default" color="primary" variant="outlined" size="middle">
          Button
        </Button>
        <Button.Group size="middle">
          <Button type="primary" size="middle">
            Button
          </Button>
          <Button type="primary" size="middle" icon={<DownOutlined />} />
        </Button.Group>
        <Button type="default" size="middle" icon={<EllipsisOutlined />} />
      </>
    );
  }
  return (
    <>
      <Button type="default" size="small">
        Button
      </Button>
      <Button.Group size="small">
        <Button type="primary" size="small">
          Button
        </Button>
        <Button type="primary" size="small" icon={<DownOutlined />} />
      </Button.Group>
      <Button type="default" size="small" icon={<EllipsisOutlined />} />
    </>
  );
}

/** 与 `index.figma.tsx` 中 `example` 一致 */
function FigmaButtonGroupExample({
  size,
  groupStyle,
  children,
}: {
  size: SpaceProps['size'];
  groupStyle: CSSProperties | undefined;
  children: React.ReactNode;
}) {
  return (
    <Space size={size} style={groupStyle}>
      {children}
    </Space>
  );
}

const App: React.FC = () => {
  const [groupType, setGroupType] = useState<GroupTypeKey>('default');
  const [layout, setLayout] = useState<GroupLayoutKey>('lefttoright');
  const [figmaSize, setFigmaSize] = useState<GroupSizeKey>('medium');

  const spaceSize = useMemo(() => deriveSpaceSize(figmaSize), [figmaSize]);
  const groupStyle = useMemo(() => deriveGroupStyle(layout), [layout]);
  const children = useMemo(
    () => deriveGroupChildren(groupType, layout, figmaSize),
    [groupType, layout, figmaSize]
  );

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 360,
        border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaButtonGroupExample size={spaceSize} groupStyle={groupStyle}>
          {children}
        </FigmaButtonGroupExample>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Button Group
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={groupType}
              onChange={v => setGroupType(v as GroupTypeKey)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'text', label: 'text' },
                { value: 'expand', label: 'expand' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>layout</div>
            <Select
              style={{ width: '100%' }}
              value={layout}
              onChange={v => setLayout(v as GroupLayoutKey)}
              options={[
                { value: 'lefttoright', label: 'lefttoright' },
                { value: 'righttoleft', label: 'righttoleft' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={figmaSize}
              onChange={v => setFigmaSize(v as GroupSizeKey)}
              options={[
                { value: 'medium', label: 'medium' },
                { value: 'small', label: 'small' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
