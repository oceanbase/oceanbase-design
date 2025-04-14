import React, { useRef, useState } from 'react';
import { Button, Divider, Space, Tour } from '@oceanbase/design';
import type { TourProps } from '@oceanbase/design';
import { EllipsisOutlined, CaretDownFilled } from '@oceanbase/icons';

const App: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*7THaSpOUY30AAAAAAAAAAAAAemfOAQ/original" />
      ),
      target: () => ref1.current,
      prevButtonProps: {
        children: '详细介绍',
      },
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      cover: (
        <img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*jbw4RqDFh-MAAAAAAAAAAAAAemfOAQ/original" />
      ),
      target: () => ref2.current,
      prevButtonProps: {
        children: '详细介绍',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      cover: (
        <img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*0o9HR46hwggAAAAAAAAAAAAAemfOAQ/original" />
      ),
      target: () => ref3.current,
      prevButtonProps: {
        children: '详细介绍',
      },
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(!open)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        mask={false}
        arrow={false}
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        closeIcon={<CaretDownFilled />}
      />
    </>
  );
};

export default App;
