import React from 'react';
import { Form } from '@oceanbase/design';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  const handleChange = ({ range }) => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onValuesChange={handleChange}>
      <Form.Item
        name="range"
        initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}
        rules={[
          {
            validator(rule, value, callback) {
              if (Math.abs(value[0].diff(value[1])) > 24 * 60 * 60 * 1000) {
                callback('时间跨度不能超过一天');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <DateRanger />
      </Form.Item>
    </Form>
  );
};
