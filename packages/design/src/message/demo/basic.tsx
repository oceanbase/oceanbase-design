import { Button, Space, message } from '@oceanbase/design';

export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          message.info('This is a info message');
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          message.success('This is a success message');
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          message.error('This is an error message');
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          message.warning('This is a warning message');
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          message.loading('This is a loading message');
        }}
      >
        Loading
      </Button>
    </Space>
  );
};
