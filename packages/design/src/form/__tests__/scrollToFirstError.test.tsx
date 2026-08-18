import React, { useEffect } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ConfigProvider, Drawer, Form, Input, Modal } from '@oceanbase/design';
import type { FormInstance } from '@oceanbase/design';
import { describe, expect, it, vi } from 'vitest';

const requiredRule = { required: true, message: 'Name is required' };

const FormWithInstance: React.FC<
  React.ComponentProps<typeof Form> & {
    onMount?: (form: FormInstance) => void;
  }
> = ({ onMount, ...props }) => {
  const [form] = Form.useForm();
  onMount?.(form);
  return (
    <Form form={form} {...props}>
      <Form.Item label="Name" name="name" rules={[requiredRule]}>
        <Input id="name" />
      </Form.Item>
    </Form>
  );
};

describe('Form scrollToFirstError on validateFields', () => {
  it('should scroll to first error field when validateFields fails with scrollToFirstError', async () => {
    let form!: FormInstance;
    render(<FormWithInstance scrollToFirstError onMount={f => (form = f)} />);

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith(['name'], undefined);
  });

  it('should pass options to scrollToField when scrollToFirstError is an object', async () => {
    let form!: FormInstance;
    render(<FormWithInstance scrollToFirstError={{ block: 'center' }} onMount={f => (form = f)} />);

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith(['name'], { block: 'center' });
  });

  it('should scroll by default when scrollToFirstError is not configured', async () => {
    let form!: FormInstance;
    render(<FormWithInstance onMount={f => (form = f)} />);

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith(['name'], undefined);
  });

  it('should not scroll when scrollToFirstError is false', async () => {
    let form!: FormInstance;
    render(<FormWithInstance scrollToFirstError={false} onMount={f => (form = f)} />);

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('should not scroll when ConfigProvider disables scrollToFirstError', async () => {
    let form!: FormInstance;
    render(
      <ConfigProvider form={{ scrollToFirstError: false }}>
        <FormWithInstance onMount={f => (form = f)} />
      </ConfigProvider>
    );

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('should scroll exactly once on submit failure (antd path unchanged)', async () => {
    let form!: FormInstance;
    render(<FormWithInstance scrollToFirstError onMount={f => (form = f)} />);

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    form.submit();

    await waitFor(() => {
      expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
    expect(scrollSpy).toHaveBeenCalledWith(['name'], { block: 'nearest' });
  });

  it('should not scroll on internal revalidate after blur (onTouched)', async () => {
    let form!: FormInstance;
    const { container } = render(
      <FormWithInstance validateMode="onTouched" scrollToFirstError onMount={f => (form = f)} />
    );

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});
    const input = container.querySelector('#name') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);
    await waitFor(() => {
      expect(input.closest('.ant-form-item')?.classList.contains('ant-form-item-has-error')).toBe(
        true
      );
    });

    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(input.closest('.ant-form-item')?.classList.contains('ant-form-item-has-error')).toBe(
        true
      );
    });

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('should apply scrollToFirstError from ConfigProvider', async () => {
    let form!: FormInstance;
    render(
      <ConfigProvider form={{ scrollToFirstError: true }}>
        <FormWithInstance onMount={f => (form = f)} />
      </ConfigProvider>
    );

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith(['name'], undefined);
  });

  it('should prefer form prop over ConfigProvider', async () => {
    let form!: FormInstance;
    render(
      <ConfigProvider form={{ scrollToFirstError: true }}>
        <FormWithInstance scrollToFirstError={false} onMount={f => (form = f)} />
      </ConfigProvider>
    );

    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('should scroll to first error field when Modal onOk calls validateFields', async () => {
    let form!: FormInstance;
    const ModalForm: React.FC = () => {
      const [open, setOpen] = React.useState(false);
      useEffect(() => {
        setOpen(true);
      }, []);
      return (
        <Modal
          open={open}
          onOk={() => {
            form.validateFields().catch(() => {});
          }}
        >
          <FormWithInstance scrollToFirstError onMount={f => (form = f)} />
        </Modal>
      );
    };
    render(<ModalForm />);

    // Modal portal renders into document.body, so query there
    await waitFor(() => {
      expect(document.body.querySelector('.ant-modal-wrap')).toBeTruthy();
    });
    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    fireEvent.click(document.body.querySelector('.ant-btn-primary') as HTMLButtonElement);

    await waitFor(() => {
      expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
    expect(scrollSpy).toHaveBeenCalledWith(['name'], undefined);
  });

  it('should scroll to first error field when Drawer contains patched Form', async () => {
    let form!: FormInstance;
    const DrawerForm: React.FC = () => {
      const [open, setOpen] = React.useState(false);
      useEffect(() => {
        setOpen(true);
      }, []);
      return (
        <Drawer open={open}>
          <FormWithInstance scrollToFirstError onMount={f => (form = f)} />
        </Drawer>
      );
    };
    render(<DrawerForm />);

    // Drawer portal renders into document.body, so query there
    await waitFor(() => {
      expect(document.body.querySelector('.ant-drawer-content')).toBeTruthy();
    });
    const scrollSpy = vi.spyOn(form, 'scrollToField').mockImplementation(() => {});

    await form.validateFields().catch(() => {});

    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith(['name'], undefined);
  });
});
