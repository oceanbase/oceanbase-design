import {
  Ranger
} from '@oceanbase/ui';
import { Card, Button, Form, Input, Radio, ConfigProvider } from '@oceanbase/design';
import enUS from '@oceanbase/ui/locale/en-US';
import zhCN from '@oceanbase/ui/locale/zh-CN';
import React, { useState } from 'react';
import dayjs from 'dayjs';

const Page: React.FC = () => {
const [form] = Form.useForm();
  const { validateFields } = form;
  const [passed, setPassed] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
  };

  const onSubmit = () => {
    validateFields().then(values => {
      const { username, password } = values;
      alert(`表单校验通过 username：${username}, password：${password}`);
    });
  };

  const handleChange = ({ range }) => {
    if (range) {
      console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
      console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
    }
  };

  return (
    <>
    <Card title="Password & Ranger">
    <Form form={form} {...formItemLayout}  onValuesChange={handleChange}>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            validator: (rule, value, callback) => {
              if (value && !passed) {
                callback('密码设置不符合要求');
              } else {
                callback();
              }
            },
          },
        ]}
      >
        <Input.Password
          rules={true}
          onValidate={setPassed}
          generatePasswordRegex={
            /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[._+@#$%]){2,})[A-Za-z\d._+@#$%]{8,32}$/
          }
        />

      </Form.Item>
      <Form.Item
       name="range"
        label="密码"
       initialValue={[dayjs('2021/01/01'), dayjs('2021/05/01')]}>
        <Ranger
          selects={[
            Ranger.YESTERDAY,
            Ranger.TODAY,
            Ranger.TOMORROW,
            { name: '今年', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
          ]}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onSubmit}>
          提交
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </>
  )
};

const App: React.FC = () => {
  const [locale, setLocal] = useState(enUS);

  const changeLocale = e => {
    const localeValue = e.target.value;
    setLocal(localeValue);
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>Change locale of components:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};

export default App;
