import React from 'react';
import { render } from '@testing-library/react';
import ContentWithQuestion from '..';

describe('ContentWithQuestion', () => {
  it('渲染正常', async () => {
    const { getByTestId } = render(<ContentWithQuestion content="hello" />);
    expect(getByTestId('content').textContent).toEqual('hello');
    // expect(getByTestId('icon')).not.toBeNull();
  });
});
