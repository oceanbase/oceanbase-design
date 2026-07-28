import { Button, Space, message } from '@oceanbase/design';

export default () => {
  return (
    <Space wrap>
      <Button onClick={() => message.info('This is a info message')}>message.info</Button>
      <Button onClick={() => message.success('This is a success message')}>message.success</Button>
      <Button onClick={() => message.error('This is an error message')}>message.error</Button>
      <Button onClick={() => message.warning('This is a warning message')}>message.warning</Button>
      <Button onClick={() => message.loading('This is a loading message')}>message.loading</Button>
    </Space>
  );
};
