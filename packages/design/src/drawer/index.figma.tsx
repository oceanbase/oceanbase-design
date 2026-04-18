// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Button, Descriptions, Drawer, Form, Input, Space } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Drawer"
 */

// Figma: "Drawer" · 2351:3603
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2351-3603&m=dev
figma.connect(Drawer, '<FIGMA_OCEANBASE_DRAWER>', {
  props: {
    preview: figma.enum('footer', {
      false: (
        <Drawer open width={520} placement="right" title="Title" onClose={() => {}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Descriptions
              title={
                <span
                  style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}
                >
                  Title
                </span>
              }
              column={1}
              layout="horizontal"
              bordered={false}
              items={[
                { key: '1', label: 'label', children: 'caption' },
                { key: '2', label: 'label', children: 'caption' },
                { key: '3', label: 'label', children: 'caption' },
              ]}
              style={{ width: '100%' }}
              labelStyle={{
                color: '#5c6b8a',
                fontSize: 14,
                lineHeight: '20px',
                whiteSpace: 'nowrap',
              }}
              contentStyle={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}
            />
            <Descriptions
              title={
                <span
                  style={{ fontSize: 14, fontWeight: 500, color: '#132039', lineHeight: '20px' }}
                >
                  Title
                </span>
              }
              column={1}
              layout="horizontal"
              bordered={false}
              items={[
                { key: 'a', label: 'label', children: 'caption' },
                { key: 'b', label: 'label', children: 'caption' },
                { key: 'c', label: 'label', children: 'caption' },
              ]}
              style={{ width: '100%' }}
              labelStyle={{
                color: '#5c6b8a',
                fontSize: 14,
                lineHeight: '20px',
                whiteSpace: 'nowrap',
              }}
              contentStyle={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}
            />
          </div>
        </Drawer>
      ),
      true: (
        <Drawer
          open
          width={520}
          placement="right"
          title="Title"
          onClose={() => {}}
          footer={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
            </Space>
          }
        >
          <Form layout="vertical" style={{ width: '100%' }}>
            {Array.from({ length: 9 }, (_, i) => (
              <Form.Item key={'drawer-form-' + i} label="Label">
                <Input placeholder="Enter" />
              </Form.Item>
            ))}
          </Form>
        </Drawer>
      ),
    }),
  },
  example: ({ preview }) => <div>{preview}</div>,
});
