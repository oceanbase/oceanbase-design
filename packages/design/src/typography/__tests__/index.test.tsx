import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip, Typography } from '@oceanbase/design';

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
