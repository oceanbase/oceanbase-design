import React from 'react';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import { Button, ConfigProvider } from '@oceanbase/design';

/**
 * WCAG 2.1 关键路径冒烟：默认 ConfigProvider + 主按钮在 jsdom 下应无 serious/critical 级 axe 违规。
 * 全量站点扫描见文档站 CI 规划；此处覆盖设计体系入口与 antd 封装组合。
 */
describe('a11y smoke (axe)', () => {
  it('ConfigProvider + primary Button has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <Button type="primary">Submit</Button>
      </ConfigProvider>
    );
    const results = await axe.run(container, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
    });
    const impactful = results.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );
    expect(impactful, JSON.stringify(impactful, null, 2)).toEqual([]);
  });
});
