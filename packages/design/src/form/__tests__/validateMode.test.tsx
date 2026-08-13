import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Button, ConfigProvider, Form, Input } from '@oceanbase/design';

const requiredRule = { required: true, message: 'Name is required' };
const minLengthRule = { min: 5, message: 'Name must be at least 5 characters' };

const getNameInput = (container: HTMLElement) =>
  container.querySelector('#name') as HTMLInputElement;

const getSubmitButton = (container: HTMLElement) =>
  container.querySelector('button[type="submit"]') as HTMLButtonElement;

const hasFieldError = (container: HTMLElement) =>
  Boolean(container.querySelector('.ant-form-item-explain-error'));

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
    expect(hasFieldError(container)).toBe(false);

    fireEvent.blur(input);
    expect(hasFieldError(container)).toBe(false);
  });

  it('default onSubmit should not show error when clearing value before submit', async () => {
    const { container } = render(<FormWithName />);
    const input = getNameInput(container);

    fireEvent.change(input, { target: { value: 'valid name' } });
    expect(hasFieldError(container)).toBe(false);

    fireEvent.change(input, { target: { value: '' } });
    expect(hasFieldError(container)).toBe(false);
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
    expect(hasFieldError(container)).toBe(false);
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
    expect(hasFieldError(container)).toBe(false);

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
    expect(hasFieldError(container)).toBe(false);
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
    expect(hasFieldError(container)).toBe(true);
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

    fireEvent.change(input, { target: { value: 'b' } });
    expect(hasFieldError(container)).toBe(false);
  });
});
