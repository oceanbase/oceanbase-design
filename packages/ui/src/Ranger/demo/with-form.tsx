import { Form } from '@oceanbase/design';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  const handleChange = ({ range }) => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };
  const [form] = Form.useForm();

  return (
    <Form form={form} onValuesChange={handleChange}>
      <Form.Item name="range" initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}>
        <Ranger
          selects={[
            Ranger.YESTERDAY,
            Ranger.TODAY,
            Ranger.TOMORROW,
            { name: '今年', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
          ]}
        />
      </Form.Item>
    </Form>
  );
};
