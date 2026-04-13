// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { Button, Card } from '@oceanbase/design';

/**
 * Code Connect — Notification（5026:7081：type × actions 卡片；与设计稿控件名一致，含 Figma 拼写 ture）。
 * Page: "↵Notification"
 */

// Figma: "Notification" · 5026:7081
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7081&m=dev
figma.connect(Card, '<FIGMA_OCEANBASE_NOTIFICATION>', {
  props: {
    style: {
      width: 384,
      borderRadius: 8,
      boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)',
      background: '#ffffff',
      border: 'none',
    },
    styles: {
      body: {
        padding: 24,
      },
    },
    children: figma.enum('type', {
      default: figma.enum('actions', {
        ture: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {figma.string('title')}
                </span>
                <CloseOutlined style={{ fontSize: 16, color: '#8592ad', flexShrink: 0 }} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#8592ad',
                  lineHeight: '20px',
                  width: '100%',
                }}
              >
                {figma.string('description')}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
              <Button size="small">Cancel</Button>
              <Button type="primary" size="small">
                Confirm
              </Button>
            </div>
          </div>
        ),
        false: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#132039',
                  lineHeight: '24px',
                  minWidth: 0,
                }}
              >
                {figma.string('title')}
              </span>
              <CloseOutlined style={{ fontSize: 16, color: '#8592ad', flexShrink: 0 }} />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: '#8592ad',
                lineHeight: '20px',
                width: '100%',
              }}
            >
              {figma.string('description')}
            </p>
          </div>
        ),
      }),
      alert: figma.enum('actions', {
        ture: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
              <ExclamationCircleFilled
                style={{ fontSize: 24, color: '#f7a600', flexShrink: 0, marginTop: 2 }}
              />
              <div
                style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#132039',
                      lineHeight: '24px',
                      minWidth: 0,
                    }}
                  >
                    {figma.string('title')}
                  </span>
                  <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#8592ad',
                    lineHeight: '20px',
                    width: '100%',
                  }}
                >
                  {figma.string('description')}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
              <Button size="small">Cancel</Button>
              <Button type="primary" size="small">
                Confirm
              </Button>
            </div>
          </div>
        ),
        false: (
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
            <ExclamationCircleFilled
              style={{ fontSize: 24, color: '#f7a600', flexShrink: 0, marginTop: 2 }}
            />
            <div
              style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {figma.string('title')}
                </span>
                <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#8592ad',
                  lineHeight: '20px',
                  width: '100%',
                }}
              >
                {figma.string('description')}
              </p>
            </div>
          </div>
        ),
      }),
      success: figma.enum('actions', {
        ture: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
              <CheckCircleFilled
                style={{ fontSize: 24, color: '#29cc6a', flexShrink: 0, marginTop: 2 }}
              />
              <div
                style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#132039',
                      lineHeight: '24px',
                      minWidth: 0,
                    }}
                  >
                    {figma.string('title')}
                  </span>
                  <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#8592ad',
                    lineHeight: '20px',
                    width: '100%',
                  }}
                >
                  {figma.string('description')}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
              <Button size="small">Cancel</Button>
              <Button type="primary" size="small">
                Confirm
              </Button>
            </div>
          </div>
        ),
        false: (
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
            <CheckCircleFilled
              style={{ fontSize: 24, color: '#29cc6a', flexShrink: 0, marginTop: 2 }}
            />
            <div
              style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {figma.string('title')}
                </span>
                <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#8592ad',
                  lineHeight: '20px',
                  width: '100%',
                }}
              >
                {figma.string('description')}
              </p>
            </div>
          </div>
        ),
      }),
      error: figma.enum('actions', {
        ture: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
              <CloseCircleFilled
                style={{ fontSize: 24, color: '#eb4242', flexShrink: 0, marginTop: 2 }}
              />
              <div
                style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#132039',
                      lineHeight: '24px',
                      minWidth: 0,
                    }}
                  >
                    {figma.string('title')}
                  </span>
                  <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: '#8592ad',
                    lineHeight: '20px',
                    width: '100%',
                  }}
                >
                  {figma.string('description')}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, width: '100%' }}>
              <Button size="small">Cancel</Button>
              <Button type="primary" size="small">
                Confirm
              </Button>
            </div>
          </div>
        ),
        false: (
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', width: '100%' }}>
            <CloseCircleFilled
              style={{ fontSize: 24, color: '#eb4242', flexShrink: 0, marginTop: 2 }}
            />
            <div
              style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#132039',
                    lineHeight: '24px',
                    minWidth: 0,
                  }}
                >
                  {figma.string('title')}
                </span>
                <CloseOutlined style={{ fontSize: 16, color: '#132039', flexShrink: 0 }} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: '#8592ad',
                  lineHeight: '20px',
                  width: '100%',
                }}
              >
                {figma.string('description')}
              </p>
            </div>
          </div>
        ),
      }),
    }),
  },
  example: ({ style, styles, children }) => (
    <Card style={style} styles={styles} bordered={false}>
      {children}
    </Card>
  ),
});
