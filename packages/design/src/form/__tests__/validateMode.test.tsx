import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Button, ConfigProvider, Form, Input } from '@oceanbase/design';

const requiredRule = { required: true, message: 'Name is required' };
const minLengthRule = { min: 5, message: 'Name must be at least 5 characters' };

const getNameInput = (container: HTMLElement) =>
  container.querySelector('#name') as HTMLInputElement;

const getSubmitButton = (container: HTMLElement) =>
  container.querySelector('button[type="submit"]') as HTMLButtonElement;

const hasFieldError = (container: HTMLElement) =>
  Boolean(container.querySelector('.ant-form-item-explain-error'));

/**
 * Reflects the field's validation state without waiting for the animated error message to mount
 * (`ant-form-item-explain-error` is rendered by `rc-motion` several tasks later).
 */
const hasFieldErrorClass = (container: HTMLElement) =>
  Boolean(container.querySelector('.ant-form-item-has-error'));

/**
 * Flush the revalidation injected by `onFieldsChange`. It is scheduled in a `queueMicrotask` and
 * settles in later microtasks, so a negative assertion ("no error") must flush first — otherwise it
 * passes even when revalidation was triggered. Verified sufficient by the assertions below.
 */
const flushRevalidation = () =>
  act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

const FormWithName: React.FC<React.ComponentProps<typeof Form>> = props => (
  <Form {...props}>
    <Form.Item label="Name" name="name" rules={[requiredRule]}>
      <Input id="name" />
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form>
);

describe('Form validateMode', () => {
  it('default onSubmit should not show error while typing', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    fireEvent.blur(input);
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);
  });

  it('default onSubmit should not show error when clearing value before submit', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'valid name' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    fireEvent.change(input, { target: { value: '' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);
  });

  it('default onSubmit should show error after submit', async () => {
    const { container } = render(<FormWithName />);
    fireEvent.click(getSubmitButton(container));

    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('onSubmit + reValidateMode onChange should clear error when fixed without re-submit', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('onSubmit + reValidateMode onChange should show error again when value cleared after fix', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('onSubmit should revalidate on change after successful submit', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'valid name' } });
    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('validateMode onChange should show error while typing', async () => {
    const { container } = render(
      <Form validateMode="onChange">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('validateMode onBlur should show error on blur', async () => {
    const { container } = render(<FormWithName validateMode="onBlur" reValidateMode="onBlur" />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: '' } });
    expect(hasFieldError(container)).toBe(false);

    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    expect(hasFieldError(container)).toBe(true);

    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('validateMode onTouched should not validate on change before blur', async () => {
    const { container } = render(
      <Form validateMode="onTouched">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    // Still no validation on a later change: only a blur marks the field as touched.
    fireEvent.change(input, { target: { value: 'ab' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);
  });

  it('validateMode onTouched should validate on change after blur', async () => {
    const { container } = render(
      <Form validateMode="onTouched">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('validateMode onTouched should validate on change after blur even when blur passed', async () => {
    const { container } = render(
      <Form validateMode="onTouched">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'valid name' } });
    fireEvent.blur(input);
    expect(hasFieldError(container)).toBe(false);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('validateMode onTouched should show error when clearing value after blur error', async () => {
    const { container } = render(
      <Form validateMode="onTouched">
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('explicit validateTrigger should bypass validateMode injection', async () => {
    const { container } = render(
      <Form validateTrigger="onChange">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('Form validateMode should override ConfigProvider', async () => {
    const { container } = render(
      <ConfigProvider form={{ validateMode: 'onSubmit' }}>
        <Form validateMode="onChange">
          <Form.Item label="Name" name="name" rules={[minLengthRule]}>
            <Input id="name" />
          </Form.Item>
        </Form>
      </ConfigProvider>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('ConfigProvider should apply default validateMode onSubmit', async () => {
    const { container } = render(
      <ConfigProvider>
        <FormWithName />
      </ConfigProvider>
    );

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('ConfigProvider form.validateMode onChange should apply globally', async () => {
    const { container } = render(
      <ConfigProvider form={{ validateMode: 'onChange' }}>
        <Form>
          <Form.Item label="Name" name="name" rules={[minLengthRule]}>
            <Input id="name" />
          </Form.Item>
        </Form>
      </ConfigProvider>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('validateMode all should validate on change and blur', async () => {
    const { container } = render(
      <Form validateMode="all">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('validateMode onBlur + reValidateMode onChange should clear error on change after blur', async () => {
    const { container } = render(
      <Form validateMode="onBlur" reValidateMode="onChange">
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    fireEvent.change(input, { target: { value: '' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);
  });

  it('reValidateMode onSubmit should keep error until next submit', async () => {
    const { container } = render(<FormWithName reValidateMode="onSubmit" />);
    const input = getNameInput(container);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    expect(hasFieldError(container)).toBe(true);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('after submit should only revalidate the changed field', async () => {
    const { container } = render(
      <Form>
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <Input id="name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[requiredRule]}>
          <Input id="email" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
    const nameInput = getNameInput(container);
    const emailInput = container.querySelector('#email') as HTMLInputElement;

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(container.querySelectorAll('.ant-form-item-explain-error').length).toBe(2);
    });

    fireEvent.change(nameInput, { target: { value: 'valid name' } });
    await waitFor(() => {
      const errors = container.querySelectorAll('.ant-form-item-explain-error');
      expect(errors.length).toBe(1);
      expect(
        emailInput.closest('.ant-form-item')?.querySelector('.ant-form-item-explain-error')
      ).toBeTruthy();
    });
  });

  it('validateMode onTouched + reValidateMode onSubmit should validate on change before submit', async () => {
    const { container } = render(
      <Form validateMode="onTouched" reValidateMode="onSubmit">
        <Form.Item label="Name" name="name" rules={[minLengthRule]}>
          <Input id="name" />
        </Form.Item>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });

  it('validateMode onTouched + reValidateMode onSubmit should not revalidate on change after submit', async () => {
    const { container } = render(
      <Form validateMode="onTouched" reValidateMode="onSubmit">
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <Input id="name" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
    const input = getNameInput(container);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(true);
  });

  it('ConfigProvider form.reValidateMode onSubmit should apply globally', async () => {
    const { container } = render(
      <ConfigProvider form={{ reValidateMode: 'onSubmit' }}>
        <FormWithName />
      </ConfigProvider>
    );
    const input = getNameInput(container);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.change(input, { target: { value: 'valid name' } });
    expect(hasFieldError(container)).toBe(true);
  });

  it('partial resetFields after submit should keep submitted state', async () => {
    const Demo: React.FC = () => {
      const [form] = Form.useForm();
      return (
        <Form form={form}>
          <Form.Item label="Name" name="name" rules={[requiredRule]}>
            <Input id="name" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[requiredRule]}>
            <Input id="email" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" onClick={() => form.resetFields(['name'])}>
            Reset name
          </Button>
        </Form>
      );
    };

    const { container } = render(<Demo />);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(container.querySelectorAll('.ant-form-item-explain-error').length).toBe(2);
    });

    fireEvent.click(container.querySelectorAll('button')[1] as HTMLButtonElement);
    await waitFor(() => {
      expect(
        getNameInput(container)
          .closest('.ant-form-item')
          ?.classList.contains('ant-form-item-has-error')
      ).toBe(false);
    });

    const nameInputAfterReset = getNameInput(container);
    fireEvent.change(nameInputAfterReset, { target: { value: 'valid name' } });
    await waitFor(() => {
      expect(
        nameInputAfterReset.closest('.ant-form-item')?.classList.contains('ant-form-item-has-error')
      ).toBe(false);
    });

    fireEvent.change(nameInputAfterReset, { target: { value: '' } });
    await waitFor(() => {
      expect(
        nameInputAfterReset.closest('.ant-form-item')?.classList.contains('ant-form-item-has-error')
      ).toBe(true);
    });
  });

  it('validateMode onTouched should not revalidate on change after resetFields', async () => {
    const Demo: React.FC = () => {
      const [form] = Form.useForm();
      return (
        <Form form={form} validateMode="onTouched">
          <Form.Item label="Name" name="name" rules={[minLengthRule]}>
            <Input id="name" />
          </Form.Item>
          <Button type="default" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Form>
      );
    };

    const { container } = render(<Demo />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.blur(input);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.click(container.querySelector('button') as HTMLButtonElement);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    // `resetFields()` remounts the input, so re-query instead of reusing the stale node.
    const inputAfterReset = getNameInput(container);
    fireEvent.change(inputAfterReset, { target: { value: 'b' } });
    // After a full reset the field counts as untouched, so an invalid value must not revalidate.
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    // Positive control: the same flush does observe a validation once the field is touched again.
    fireEvent.blur(inputAfterReset);
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(true);
  });

  it('should not revalidate on change after resetFields when the Form remounts', async () => {
    // A `Form` may unmount and remount (Modal / Drawer / Tab) while the consumer keeps the same
    // `Form.useForm()` instance, so the reset tracking must follow the instance, not the mount.
    const Demo: React.FC = () => {
      const [form] = Form.useForm();
      const [visible, setVisible] = React.useState(true);
      return (
        <div>
          <Button type="default" onClick={() => setVisible(v => !v)}>
            Toggle
          </Button>
          {visible && (
            <Form form={form} validateMode="onTouched">
              <Form.Item label="Name" name="name" rules={[minLengthRule]}>
                <Input id="name" />
              </Form.Item>
              <Button type="default" onClick={() => form.resetFields()}>
                Reset
              </Button>
            </Form>
          )}
        </div>
      );
    };

    const { container } = render(<Demo />);
    const toggle = container.querySelector('button') as HTMLButtonElement;

    fireEvent.click(toggle);
    await flushRevalidation();
    expect(getNameInput(container)).toBeNull();
    fireEvent.click(toggle);
    await flushRevalidation();

    // Touch the remounted field so it is recorded, then reset it.
    fireEvent.change(getNameInput(container), { target: { value: 'a' } });
    fireEvent.blur(getNameInput(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.click(container.querySelectorAll('button')[1] as HTMLButtonElement);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    // `resetFields()` remounts the input, so re-query instead of reusing the stale node.
    fireEvent.change(getNameInput(container), { target: { value: 'b' } });
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(false);

    // Positive control: the same flush does observe a validation once the field is touched again.
    fireEvent.blur(getNameInput(container));
    await flushRevalidation();
    expect(hasFieldErrorClass(container)).toBe(true);
  });

  it('should revalidate the first change after a partial resetFields', async () => {
    const Demo: React.FC = () => {
      const [form] = Form.useForm();
      return (
        <Form form={form}>
          <Form.Item label="Name" name="name" rules={[requiredRule, minLengthRule]}>
            <Input id="name" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" onClick={() => form.resetFields(['name'])}>
            Reset name
          </Button>
        </Form>
      );
    };

    const { container } = render(<Demo />);

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    // A partial reset clears the field and keeps the submit state.
    fireEvent.click(container.querySelectorAll('button')[1] as HTMLButtonElement);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });

    // The first change after the reset must still be treated as a change and revalidate.
    fireEvent.change(getNameInput(container), { target: { value: 'a' } });
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });
  });

  it('should not break onValuesChange when a changed value is circular', async () => {
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    let received: Record<string, unknown> | undefined;

    const CyclicControl: React.FC<{ onChange?: (value: unknown) => void }> = ({ onChange }) => (
      <button type="button" onClick={() => onChange?.(cyclic)}>
        set cyclic
      </button>
    );

    const { container } = render(
      <Form
        onValuesChange={changedValues => {
          received = changedValues;
        }}
      >
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <Input id="name" />
        </Form.Item>
        <Form.Item name="payload">
          <CyclicControl />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );

    // Submit first so the injected revalidation is active when the value changes.
    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    const control = container.querySelector('button[type="button"]') as HTMLButtonElement;
    expect(() => fireEvent.click(control)).not.toThrow();
    expect(received).toEqual({ payload: cyclic });
  });

  it('should clear the error of a field whose value is a plain object', async () => {
    const ObjectValueControl: React.FC<{
      value?: unknown;
      onChange?: (value: unknown) => void;
    }> = ({ onChange }) => (
      <button type="button" onClick={() => onChange?.({ value: 'valid name', label: 'Valid' })}>
        pick
      </button>
    );

    const { container } = render(
      <Form>
        <Form.Item label="Name" name="name" rules={[requiredRule]}>
          <ObjectValueControl />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );

    fireEvent.click(getSubmitButton(container));
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(true);
    });

    fireEvent.click(container.querySelector('button[type="button"]') as HTMLButtonElement);
    await waitFor(() => {
      expect(hasFieldError(container)).toBe(false);
    });
  });
});
