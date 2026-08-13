import React, { useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '@oceanbase/design';
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

function FeedbackToggleWrapper({ showFeedback }: { showFeedback: boolean }) {
  return (
    <Form>
      <Form.Item label="Test" name="test" help="Static help">
        {showFeedback ? (
          <ChildWithFeedback message="Child help message" />
        ) : (
          <input aria-label="plain-input" />
        )}
      </Form.Item>
    </Form>
  );
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

  it('keeps static help when child does not report feedback', () => {
    render(
      <Form>
        <Form.Item label="Test" name="test" help="Static help">
          <input aria-label="plain-input" />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Static help')).toBeTruthy();
  });

  it('restores static help after child feedback is cleared', () => {
    const { rerender } = render(<FeedbackToggleWrapper showFeedback={true} />);

    expect(screen.getByText('Child help message')).toBeTruthy();

    rerender(<FeedbackToggleWrapper showFeedback={false} />);

    expect(screen.getByText('Static help')).toBeTruthy();
    expect(screen.queryByText('Child help message')).toBeFalsy();
  });

  it('supports function children without wrapping provider', () => {
    render(
      <Form initialValues={{ other: 'value' }}>
        <Form.Item label="Test" shouldUpdate>
          {() => <input data-testid="render-prop-input" readOnly value="rendered" />}
        </Form.Item>
      </Form>
    );

    expect(screen.getByTestId('render-prop-input')).toBeTruthy();
    expect(screen.getByDisplayValue('rendered')).toBeTruthy();
  });

  it('applies child validateStatus to form item', () => {
    const { container } = render(
      <Form>
        <Form.Item label="Test" name="test">
          <ChildWithFeedback message="Child help message" />
        </Form.Item>
      </Form>
    );

    expect(container.querySelector('.ant-form-item-has-error')).toBeTruthy();
  });
});

describe('Form.Item regression: existing usage without child feedback', () => {
  it('renders Input inside Form.Item as before', () => {
    render(
      <Form>
        <Form.Item label="Name" name="name">
          <Input aria-label="name-input" />
        </Form.Item>
      </Form>
    );

    expect(screen.getByLabelText('name-input')).toBeTruthy();
  });

  it('keeps field id on control for label association', () => {
    render(
      <Form>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
      </Form>
    );

    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'name');
  });

  it('keeps validateStatus from Form.Item props', () => {
    const { container } = render(
      <Form>
        <Form.Item label="Name" name="name" help="Warning text" validateStatus="warning">
          <Input />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Warning text')).toBeTruthy();
    expect(container.querySelector('.ant-form-item-has-warning')).toBeTruthy();
    expect(container.querySelector('.ant-form-item-has-error')).toBeFalsy();
  });

  it('keeps extra below the control', () => {
    render(
      <Form>
        <Form.Item label="Name" name="name" extra="Extra hint">
          <Input />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Extra hint')).toBeTruthy();
  });

  it('keeps rules validation errors in explain', async () => {
    const user = userEvent.setup();

    render(
      <Form>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input />
        </Form.Item>
        <button type="submit">Submit</button>
      </Form>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeTruthy();
    });
  });

  it('does not override props when child feedback is cleared to null', () => {
    function ClearingChild() {
      const childFeedback = useFormItemChildFeedback();

      useEffect(() => {
        childFeedback?.setFeedback({ help: 'Transient help', validateStatus: 'error' });
        childFeedback?.setFeedback(null);
      }, [childFeedback]);

      return <Input />;
    }

    const { container } = render(
      <Form>
        <Form.Item label="Name" name="name" help="Static help" validateStatus="warning">
          <ClearingChild />
        </Form.Item>
      </Form>
    );

    expect(screen.getByText('Static help')).toBeTruthy();
    expect(container.querySelector('.ant-form-item-has-warning')).toBeTruthy();
    expect(container.querySelector('.ant-form-item-has-error')).toBeFalsy();
  });
});
