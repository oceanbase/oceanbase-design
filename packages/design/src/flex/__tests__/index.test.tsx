import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from '@oceanbase/design';

describe('Flex', () => {
  it('render with gap fallback class in unsupported browsers', () => {
    const { container } = render(
      <Flex gap="middle">
        <span>1</span>
        <span>2</span>
      </Flex>
    );
    // jsdom 下 detectFlexGapSupported 返回 false，应挂降级类
    const flex = container.querySelector('div');
    expect(flex?.className).toContain('not-support-gap');
    // horizontal 类需显式存在，否则兜底 margin 规则 `.ant-flex-not-support-gap.ant-flex-horizontal` 无法命中
    expect(flex?.className).toContain('horizontal');
    expect(flex?.matches('.ant-flex-not-support-gap.ant-flex-horizontal')).toBe(true);
    // 兜底 CSS 变量应注入内联样式
    expect((flex as HTMLElement).style.getPropertyValue('--flex-gap-column')).not.toBe('');
    expect((flex as HTMLElement).style.getPropertyValue('--flex-gap-row')).not.toBe('');
  });

  it('render vertical class for gap fallback', () => {
    const { container } = render(
      <Flex gap="middle" vertical>
        <span>1</span>
        <span>2</span>
      </Flex>
    );
    const flex = container.querySelector('div');
    expect(flex?.className).toContain('vertical');
    expect(flex?.matches('.ant-flex-not-support-gap.ant-flex-vertical')).toBe(true);
  });

  it('render wrap class for gap fallback', () => {
    const { container } = render(
      <Flex gap="middle" wrap>
        <span>1</span>
        <span>2</span>
      </Flex>
    );
    const flex = container.querySelector('div');
    expect(flex?.className).toContain('wrap');
    expect(flex?.matches('.ant-flex-not-support-gap.ant-flex-wrap.ant-flex-horizontal')).toBe(true);
  });

  it('parse gap double value string to row and column css variables', () => {
    const { container } = render(
      <Flex gap="8px 16px">
        <span>1</span>
        <span>2</span>
      </Flex>
    );
    const flex = container.querySelector('div');
    expect((flex as HTMLElement).style.getPropertyValue('--flex-gap-row')).toBe('8px');
    expect((flex as HTMLElement).style.getPropertyValue('--flex-gap-column')).toBe('16px');
  });

  it('parse preset gap size to token values', () => {
    const { container } = render(
      <Flex gap="small">
        <span>1</span>
        <span>2</span>
      </Flex>
    );
    const flex = container.querySelector('div');
    expect((flex as HTMLElement).style.getPropertyValue('--flex-gap-column')).toBe('8px');
  });
});
