import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Tooltip, Typography } from '@oceanbase/design';

const { Text, Paragraph, Title, Link } = Typography;

const longText = 'Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.';

describe('Typography ellipsis', () => {
  it('enables ellipsis for Text', () => {
    const { container } = render(<Text ellipsis>{longText}</Text>);
    expect(container.querySelector('.ant-typography')).toBeTruthy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
  });

  it('enables ellipsis for Paragraph', () => {
    const { container } = render(<Paragraph ellipsis={{ rows: 2 }}>{longText}</Paragraph>);
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
  });

  it('enables ellipsis for Title', () => {
    const { container } = render(<Title ellipsis>{longText}</Title>);
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
  });

  it('enables ellipsis for Link', () => {
    const { container } = render(
      <Link ellipsis href="https://design.oceanbase.com">
        {longText}
      </Link>
    );
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
  });

  it('does not enable ellipsis by default', () => {
    const { container } = render(<Text>{longText}</Text>);
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
  });

  it('still works when children is already wrapped by Tooltip', () => {
    const { container } = render(
      <Text ellipsis>
        <Tooltip title="wrapped tooltip">
          <span>{longText}</span>
        </Tooltip>
      </Text>
    );
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
  });
});

describe('Typography copyable hover', () => {
  it('adds hover class when copyable.hover is enabled', () => {
    const { container } = render(<Text copyable={{ hover: true }}>copyable text</Text>);
    expect(container.querySelector('.ant-typography-copyable-hover')).toBeTruthy();
    expect(container.querySelector('.ant-typography-copy')).toBeTruthy();
  });

  it('does not add hover class by default', () => {
    const { container } = render(<Text copyable>copyable text</Text>);
    expect(container.querySelector('.ant-typography-copyable-hover')).toBeFalsy();
    expect(container.querySelector('.ant-typography-copy')).toBeTruthy();
  });

  it('does not add hover class for icon-only copyable', () => {
    const { container } = render(<Text copyable={{ text: 'text to be copied', hover: true }} />);
    expect(container.querySelector('.ant-typography-copyable-hover')).toBeFalsy();
    expect(container.querySelector('.ant-typography-copy')).toBeTruthy();
  });

  it('does not pass hover to DOM', () => {
    const { container } = render(<Text copyable={{ hover: true }}>copyable text</Text>);
    expect(container.querySelector('[hover]')).toBeFalsy();
  });

  it('supports hover for Paragraph, Title and Link', () => {
    const { container } = render(
      <>
        <Paragraph copyable={{ hover: true }}>paragraph</Paragraph>
        <Title copyable={{ hover: true }}>title</Title>
        <Link copyable={{ hover: true }} href="https://design.oceanbase.com">
          link
        </Link>
      </>
    );
    expect(container.querySelectorAll('.ant-typography-copyable-hover').length).toBe(3);
  });

  it('applies ConfigProvider typography.copyable.hover globally', () => {
    const { container } = render(
      <ConfigProvider typography={{ copyable: { hover: true } }}>
        <Text copyable>copyable text</Text>
        <Link copyable href="https://design.oceanbase.com">
          link
        </Link>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.ant-typography-copyable-hover').length).toBe(2);
  });

  it('allows component copyable.hover to override ConfigProvider', () => {
    const { container } = render(
      <ConfigProvider typography={{ copyable: { hover: true } }}>
        <Text copyable={{ hover: false }}>always visible</Text>
        <Text copyable>inherit global hover</Text>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.ant-typography-copyable-hover').length).toBe(1);
  });

  it('does not apply global hover for icon-only copyable', () => {
    const { container } = render(
      <ConfigProvider typography={{ copyable: { hover: true } }}>
        <Text copyable={{ text: 'text to be copied' }} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-typography-copyable-hover')).toBeFalsy();
    expect(container.querySelector('.ant-typography-copy')).toBeTruthy();
  });
});
