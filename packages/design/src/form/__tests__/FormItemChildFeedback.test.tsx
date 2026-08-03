import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from '@oceanbase/design';
import { useFormItemChildFeedback } from '../FormItemChildFeedback';

function ChildWithFeedback({ message }: { message: string }) {
  const childFeedback = useFormItemChildFeedback();

  useEffect(() => {
    if (!childFeedback) return;
    childFeedback.setFeedback({ help: message, validateStatus: 'error' });
    return () => childFeedback.setFeedback(null);
  }, [childFeedback, message]);

  return <input aria-label="child-input" />;
}

describe('Form.Item child feedback', () => {
  it('merges child feedback into explain', () => {
    render(
      <Form>
        <Form.Item label="Test" name="test">
          <ChildWithFeedback message="Child help message" />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Child help message')).toBeTruthy();
  });

  it('prefers child feedback over static help', () => {
    render(
      <Form>
        <Form.Item label="Test" name="test" help="Static help">
          <ChildWithFeedback message="Child help message" />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Child help message')).toBeTruthy();
    expect(screen.queryByText('Static help')).toBeFalsy();
  });
});
