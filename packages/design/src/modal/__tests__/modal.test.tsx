import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { Modal } from '@oceanbase/design';
import type { ModalProps } from '@oceanbase/design/es/modal';

const ModalTest: React.FC<ModalProps> = props => {
  const [open, setOpen] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      <div ref={container} />
      <Modal
        title="This is title"
        description="This is description"
        open={open}
        getContainer={container.current!}
        {...props}
      />
    </div>
  );
};

describe('Modal', () => {
  it('should hide footer dom when footer is null', () => {
    const { container, asFragment } = render(<ModalTest footer={null} />);
    expect(container.querySelector('.ant-modal-footer')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should hide footer dom when footer is false', () => {
    const { container, asFragment } = render(<ModalTest footer={false} />);
    expect(container.querySelector('.ant-modal-footer')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('extra prop should work', () => {
    const { container, asFragment } = render(<ModalTest extra={<a>extra</a>} />);
    expect(container.querySelector('.ant-modal-footer-content')).toBeTruthy();
    expect(container.querySelector('.ant-modal-footer-extra')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
