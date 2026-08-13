import React from 'react';
import { render } from '@testing-library/react';
import { Space } from '@oceanbase/design';

describe('Space', () => {
  it('render with gap fallback css variables in unsupported browsers', () => {
    const { container } = render(
      <Space>
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const space = container.querySelector('.ant-space');
    expect(space?.className).toContain('not-support-gap');
    // antd Space 自带 -horizontal 类，兜底规则 `.ant-space-not-support-gap.ant-space-horizontal` 应可命中
    expect(space?.matches('.ant-space-not-support-gap.ant-space-horizontal')).toBe(true);
    // jsdom 下 detectFlexGapSupported 返回 false，兜底 CSS 变量应注入内联样式
    // antd Space 默认 size 为 small，对应 token.paddingXS（8px）
    expect((space as HTMLElement).style.getPropertyValue('--space-gap-row')).toBe('8px');
    expect((space as HTMLElement).style.getPropertyValue('--space-gap-column')).toBe('8px');
  });

  it('render wrap class for gap fallback', () => {
    const { container } = render(
      <Space wrap>
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const space = container.querySelector('.ant-space');
    // wrap 类由本组件显式注入，兜底规则 `.ant-space-not-support-gap.ant-space-wrap` 应可命中
    expect(space?.matches('.ant-space-not-support-gap.ant-space-wrap')).toBe(true);
  });

  it('parse size array to row and column css variables', () => {
    // antd Space size 数组顺序为 [horizontal, vertical]，对应 CSS gap 的 [column, row]
    const { container } = render(
      <Space size={[16, 8]}>
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const space = container.querySelector('.ant-space');
    expect((space as HTMLElement).style.getPropertyValue('--space-gap-row')).toBe('8px');
    expect((space as HTMLElement).style.getPropertyValue('--space-gap-column')).toBe('16px');
  });
});
