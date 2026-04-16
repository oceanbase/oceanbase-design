// @ts-nocheck

import { figma } from '@figma/code-connect';
import { EllipsisCircleFilled } from '@oceanbase/icons';
import { Button, Result, Space } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Result"
 */

// Figma: "Result" · 5027:10867
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5027-10867&m=dev
figma.connect(Result, '<FIGMA_OCEANBASE_RESULT>', {
  props: {
    status: figma.enum('status', {
      success: 'success',
      error: 'error',
      warning: 'warning',
      processing: 'processing',
      '403': '403',
      '404': '404',
      '500': '500',
    }),
    title: figma.enum('status', {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      processing: 'Processing',
      '403': '403',
      '404': '404',
      '500': '500',
    }),
    subTitle: 'Here is the description.Here is the description.',
    extra: (
      <Space size={8}>
        <Button type="primary">Button</Button>
        <Button>Button</Button>
        <Button icon={<EllipsisCircleFilled style={{ fontSize: 16, color: '#132039' }} />} />
      </Space>
    ),
    style: { padding: 24, background: '#ffffff', width: '100%' },
  },
  example: ({ status, title, subTitle, extra, style }) => (
    <Result status={status} title={title} subTitle={subTitle} extra={extra} style={style} />
  ),
});

// Figma: "ResultEmpty" · 5027:11760
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5027-11760&m=dev
//
// §3.1 / §3.3 例外：同一 Figma「status」下「欢迎使用」需横向分栏，无法仅用 Result 的离散 props
// 表达；故保留按 status 分支的整段 UI 映射，由 example 一次渲染。
figma.connect(Result, '<FIGMA_OCEANBASE_RESULTEMPTY>', {
  props: {
    emptyNode: figma.enum('status', {
      页面无数据: (
        <Result
          icon={
            <div
              style={{
                width: 160,
                height: 160,
                margin: '0 auto',
                borderRadius: 8,
                background: 'linear-gradient(145deg, #e8eef8 0%, #f5f7fb 100%)',
              }}
            />
          }
          title="Create Instance"
          subTitle="Here is the description.Here is the description."
          extra={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
              <Button icon={<EllipsisCircleFilled style={{ fontSize: 16, color: '#132039' }} />} />
            </Space>
          }
          style={{ padding: 24, background: '#ffffff', width: 320, borderRadius: 8 }}
        />
      ),
      欢迎使用: (
        <div
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            padding: 24,
            background: '#ffffff',
            borderRadius: 8,
            width: 500,
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              flexShrink: 0,
              borderRadius: 15.48,
              background: '#0082ff',
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <Result
              title="Welcome"
              subTitle="Here is the description.Here is the description."
              extra={
                <Space size={8}>
                  <Button type="primary">Button</Button>
                  <Button>Button</Button>
                  <Button
                    icon={<EllipsisCircleFilled style={{ fontSize: 16, color: '#132039' }} />}
                  />
                </Space>
              }
              style={{ padding: 0, background: 'transparent' }}
            />
          </div>
        </div>
      ),
      区块无数据: (
        <Result
          icon={
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 4,
                background: '#e8eef8',
              }}
            />
          }
          title={
            <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>No data.</span>
          }
          style={{ padding: 8, width: 200, boxSizing: 'border-box' }}
        />
      ),
    }),
  },
  example: ({ emptyNode }) => <div>{emptyNode}</div>,
});
