import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { Modal } from '@oceanbase/design';
import type { ModalProgressProps } from '@oceanbase/design/es/modal';

const ModalProgress: React.FC<ModalProgressProps> = props => {
  const [open, setOpen] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      <div ref={container} />
      <Modal.Progress
        title="This is title"
        description="This is description"
        open={open}
        getContainer={container.current!}
        {...props}
      />
    </div>
  );
};

describe('Modal.Progress', () => {
  it('render with progress.percent', () => {
    const { container, asFragment } = render(
      <ModalProgress
        progress={{
          percent: 60,
        }}
      />
    );
    // title
    expect(container.querySelector('.ant-modal-title').firstChild.textContent).toBe(
      'This is title'
    );
    // progress.percent
    expect(container.querySelector('.ant-modal-progress')).toBeTruthy();
    expect(container.querySelector('.ant-progress-circle')).toBeTruthy();
    expect(container.querySelector('.ant-progress-status-normal')).toBeTruthy();
    expect(container.querySelector('.ant-progress-show-info')).toBeTruthy();
    // description
    expect(container.querySelector('.ant-modal-progress-description')).toBeTruthy();
    expect(container.querySelector('.ant-modal-progress-description').firstChild.textContent).toBe(
      'This is description'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with progress.status', () => {
    const { container, asFragment } = render(
      <ModalProgress
        progress={{
          status: 'exception',
        }}
      />
    );
    // progress.status
    expect(container.querySelector('.ant-progress-status-exception')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render without description', () => {
    const { container, asFragment } = render(<ModalProgress description={null} />);
    // without description
    expect(container.querySelector('.ant-progress-progress-description')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with loading', () => {
    const { container, asFragment } = render(<ModalProgress loading={true} />);
    // loading
    expect(container.querySelector('.ant-modal-progress-loading')).toBeTruthy();
    // loading icon
    expect(container.querySelector('.anticon-loading')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
