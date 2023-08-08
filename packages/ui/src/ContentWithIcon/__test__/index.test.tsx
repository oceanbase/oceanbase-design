import React from 'react';
import { render } from '@testing-library/react';
import ContentWithIcon from '..';

describe('ContentWithIcon', () => {
  it('渲染正常', async () => {
    const { getByTestId } = render(<ContentWithIcon content="hello" />);
    expect(getByTestId('content').textContent).toEqual('hello');
    // expect(getByTestId('icon')).not.toBeNull();
  });
});
