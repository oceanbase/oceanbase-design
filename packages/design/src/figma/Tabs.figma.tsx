// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Tabs } from '@oceanbase/design';

/**
 * Code Connect — Tabs / Tabs.TabPane（5025:2274、5025:2253）。
 * Figma `divider` 控件值为 typo「ture」与「false」，映射为 Tabs `divider` 布尔值。
 */

// Figma: "Tabs" · 5025:2274
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2274&m=dev
figma.connect(Tabs, '<FIGMA_OCEANBASE_TABS>', {
  props: {
    divider: figma.enum('divider', {
      ture: true,
      false: false,
    }),
  },
  example: ({ divider }) => (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Tabs divider={divider} defaultActiveKey="2">
        <Tabs.TabPane tab="Tab001" key="1" badge={99}>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab002" key="2" active>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab003" key="3" disabled>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab004" key="4">
          Content
        </Tabs.TabPane>
      </Tabs>
    </div>
  ),
});

// Figma: "TabsItem" · 5025:2253
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2253&m=dev
figma.connect(Tabs.TabPane, '<FIGMA_OCEANBASE_TABSITEM>', {
  props: {
    tabText: figma.string('text'),
    disabled: figma.enum('status', {
      default: figma.boolean('badge', {
        true: false,
        false: false,
      }),
      selected: figma.boolean('badge', {
        true: false,
        false: false,
      }),
      disabled: figma.boolean('badge', {
        true: true,
        false: true,
      }),
    }),
    active: figma.enum('status', {
      default: figma.boolean('badge', {
        true: false,
        false: false,
      }),
      selected: figma.boolean('badge', {
        true: true,
        false: true,
      }),
      disabled: figma.boolean('badge', {
        true: false,
        false: false,
      }),
    }),
    badgeCount: figma.enum('status', {
      default: figma.boolean('badge', {
        true: 99,
        false: undefined,
      }),
      selected: figma.boolean('badge', {
        true: 99,
        false: undefined,
      }),
      disabled: figma.boolean('badge', {
        true: 99,
        false: undefined,
      }),
    }),
  },
  example: ({ tabText, disabled, active, badgeCount }) => (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={tabText} key="1" disabled={disabled} active={active} badge={badgeCount}>
          Content
        </Tabs.TabPane>
      </Tabs>
    </div>
  ),
});
