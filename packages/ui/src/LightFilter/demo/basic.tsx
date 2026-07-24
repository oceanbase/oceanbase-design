import React from 'react';
import { Radio, TreeSelect } from '@oceanbase/design';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormTreeSelect,
} from '@oceanbase/ui';
import dayjs from 'dayjs';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={e => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          sex: 'man',
          name: 'Jack',
          range: [20, 80],
          slider: 20,
          date: '2020-08-19',
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async values => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="Gender"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: 'Male',
            woman: 'Female',
          }}
        />
        <ProFormSelect
          name="region"
          label="Region"
          mode="multiple"
          valueEnum={{
            beijing: 'Beijing',
            shanghai: 'Shanghai',
            hangzhou: 'Hangzhou',
            long: 'A long item to test overflow',
          }}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
        <ProFormTreeSelect
          initialValue={['0-0', '0-1']}
          label="Tree Select"
          fieldProps={{
            fieldNames: {
              label: 'title',
            },
            treeData,
            treeCheckable: true,
            showCheckedStrategy: TreeSelect.SHOW_PARENT,
            placeholder: 'Please select',
          }}
          name="treeSelect"
        />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="Area"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
        <ProFormSwitch name="open" label="Switch" />
        <ProFormDigit name="count" label="Count" />
        <ProFormSlider name="range" label="Range" range />
        <ProFormSlider name="slider" label="Range" />
        <ProFormText name="name" label="Name" />
        <ProFormDatePicker name="date" label="Date" />
        <ProFormDateRangePicker name="dateRanger" label="Date Range" />
        <ProFormDateTimePicker name="datetime" label="Date Time" />
        <ProFormDateTimeRangePicker name="datetimeRanger" label="Date Time Range" />
        <ProFormTimePicker name="time" label="Time" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="Time Range" />
        <ProFormFieldSet name="name" label="Name">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};
