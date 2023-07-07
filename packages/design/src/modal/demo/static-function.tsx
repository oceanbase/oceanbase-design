import { Button, ConfigProvider, Modal, Space, theme } from '@oceanbase/design';

export default () => {
  // 在应用外围包裹一次 ConfigProvider 即可
  return (
    <ConfigProvider theme={theme}>
      <Space>
        <Button
          onClick={() => {
            Modal.confirm({
              title: 'This is a confirm modal',
              content: (
                <div>
                  <p>some messages...some messages...</p>
                  <p>some messages...some messages...</p>
                </div>
              ),
              onOk() {},
            });
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => {
            Modal.info({
              title: 'This is a info message',
              content: (
                <div>
                  <p>some messages...some messages...</p>
                  <p>some messages...some messages...</p>
                </div>
              ),
              onOk() {},
            });
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            Modal.success({
              content: 'some messages...some messages...',
            });
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            Modal.error({
              title: 'This is an error message',
              content: 'some messages...some messages...',
            });
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            Modal.warning({
              title: 'This is a warning message',
              content: 'some messages...some messages...',
            });
          }}
        >
          Warning
        </Button>
      </Space>
    </ConfigProvider>
  );
};
