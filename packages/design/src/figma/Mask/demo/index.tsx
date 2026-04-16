import { Col, InputNumber, Row, Space, Spin, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的 props / example 一致。
 * `children` 内联宽高默认与映射字面量 1440×900 相同，可通过右侧数字微调预览区域。
 */

/** 与 Figma / `index.figma.tsx` 中 `props.indicator` 一致 */
const FIGMA_HIDDEN_INDICATOR = <span style={{ display: 'none' }} aria-hidden />;

/** 与 figma.connect `example` 相同的拼装方式 */
function FigmaMaskExample(props: {
  spinning: boolean;
  gray: boolean;
  indicator: React.ReactNode;
  children: React.ReactNode;
}) {
  const { spinning, gray, indicator, children } = props;
  return (
    <Spin spinning={spinning} gray={gray} indicator={indicator}>
      {children}
    </Spin>
  );
}

const App: React.FC = () => {
  const [spinning, setSpinning] = useState(true);
  const [gray, setGray] = useState(true);
  /** 与映射中 `children` 的 width / height 初始值一致 */
  const [areaW, setAreaW] = useState(1440);
  const [areaH, setAreaH] = useState(900);

  const children = useMemo(
    () => (
      <div
        style={{
          position: 'relative',
          width: areaW,
          height: areaH,
          overflow: 'hidden',
        }}
      />
    ),
    [areaW, areaH]
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
          overflow: 'auto',
        }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <FigmaMaskExample spinning={spinning} gray={gray} indicator={FIGMA_HIDDEN_INDICATOR}>
            {children}
          </FigmaMaskExample>
        </div>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Mask（Spin 蒙层）
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>spinning</span>
            <Switch checked={spinning} onChange={setSpinning} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>gray</span>
            <Switch checked={gray} onChange={setGray} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>children 宽（默认 1440）</div>
            <InputNumber
              style={{ width: '100%' }}
              min={1}
              value={areaW}
              onChange={v => typeof v === 'number' && setAreaW(v)}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>children 高（默认 900）</div>
            <InputNumber
              style={{ width: '100%' }}
              min={1}
              value={areaH}
              onChange={v => typeof v === 'number' && setAreaH(v)}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
