import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import React, { useEffect } from 'react';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import useCSSVarCls from 'antd/es/config-provider/hooks/useCSSVarCls';
import useStyle from 'antd/es/date-picker/style/index';
import { PickerPanel } from 'rc-picker';
import classNames from 'classnames';
import { Button, Col, Divider, Form, Input, Row, Space } from '@oceanbase/design';
import { noop } from 'lodash';

type RangeValue = [Moment, Moment] | [Dayjs, Dayjs];

export interface PickerPanelProps {
  value?: RangeValue;
  defaultValue?: RangeValue;
  onCancel: () => void;
  onOk: (v: RangeValue) => void;
  isMoment: boolean;
  locale: any;
}

const prefixCls = 'ant-picker';

function isValidTimeFormat(timeString) {
  // 正则表达式，匹配格式如 "00:00:00"
  const timeFormat = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return timeFormat.test(timeString);
}

const InternalPickerPanel = (props: PickerPanelProps) => {
  const { isMoment, locale, onOk = noop, onCancel = noop } = props;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const [calendarValue, setCalendarValue] = React.useState([]);
  const [internalHoverValues, setInternalHoverValues] = React.useState(null);

  const hoverValues = React.useMemo(() => {
    return internalHoverValues || calendarValue;
  }, [internalHoverValues, calendarValue]);

  const [activeIndex, setActiveIndex] = React.useState(0);

  // ======================== Change ========================
  const fillCalendarValue = (date, index: number) =>
    // Trigger change only when date changed
    fillIndex(hoverValues, index, date);

  function fillIndex<T extends any[]>(ori: T, index: number, value: T[number]): T {
    const clone = [...ori] as T;
    clone[index] = value;
    return clone;
  }

  const onPanelHover = date => {
    setInternalHoverValues(date ? fillCalendarValue(date, activeIndex) : null);
  };

  const formatValues = [...hoverValues]
    .sort((a, b) => {
      return a?.valueOf() - b?.valueOf();
    })
    .map(item => {
      return item.format('YYYY-MM-DD');
    });

  const [form] = Form.useForm();
  useEffect(() => {
    const [s, e] = formatValues;
    form.setFieldsValue({
      startDate: s,
      endDate: e,
    });
  }, [...formatValues]);

  return (
    <div>
      {wrapCSSVar(
        <div
          className={classNames('ant-picker-dropdown', hashId, cssVarCls, rootCls)}
          style={{
            position: 'initial',
            pointerEvents: 'auto',
          }}
        >
          <PickerPanel
            prefixCls={prefixCls}
            // @ts-ignore
            generateConfig={isMoment ? momentGenerateConfig : dayjsGenerateConfig}
            onFocus={(...res) => {
              // onSelectorFocus
              console.log(res, 'onFocus');
            }}
            onBlur={(...res) => {
              console.log(res, 'onBlur');
            }}
            onHover={(...res) => {
              onPanelHover(res[0]);
            }}
            onNow={(...res) => {
              console.log(res, 'onNow');
            }}
            onOk={(...res) => {
              console.log(res, 'onOk');
            }}
            onPanelChange={(...res) => {
              console.log(res, 'onPanelChange');
            }}
            onPickerValueChange={(...res) => {
              console.log(res, 'onPickerValueChange');
            }}
            onPresetHover={(...res) => {
              console.log(res, 'onPresetHover');
            }}
            onPresetSubmit={(...res) => {
              console.log(res, 'onPresetSubmit');
            }}
            onSelect={(...res) => {
              setCalendarValue(fillCalendarValue(res[0], activeIndex));
              setActiveIndex(index => {
                return index + 1 === 2 ? 0 : index + 1;
              });
            }}
            hoverRangeValue={hoverValues}
            activeOffset={0}
            allowEmpty={[false, false]}
            mode="date"
            internalMode="date"
            picker="date"
            locale={locale}
            presets={[]}
            showNow={false}
            range={true}
            needConfirm={false}
          />
        </div>
      )}
      <div>
        <Form
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          style={{ width: 280, padding: '0 12px' }}
          form={form}
        >
          <Row gutter={12}>
            <Col span={14}>
              <Form.Item
                name="startDate"
                label="开始日期"
                style={{ marginBottom: 8 }}
                rules={[
                  {
                    required: true,
                    message: '请输入开始日期',
                  },
                ]}
              >
                {/* 输入日期时，先检测时间是否合理，合理就回显 */}
                <Input size="middle" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name="startTime"
                label="开始时间"
                style={{ marginBottom: 8 }}
                rules={[
                  {
                    validator(rule, value, callback) {
                      if (isValidTimeFormat(value)) {
                        return callback();
                      }
                      callback('请输入 HH:mm:ss 格式的时间');
                    },
                  },
                ]}
              >
                <Input size="middle" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={14}>
              <Form.Item
                name="endDate"
                label="结束日期"
                style={{ marginBottom: 8 }}
                rules={[
                  {
                    required: true,
                    message: '请输入结束日期',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name="endTime"
                label="结束时间"
                style={{ marginBottom: 8 }}
                rules={[
                  {
                    validator(rule, value, callback) {
                      if (isValidTimeFormat(value)) {
                        return callback();
                      }
                      callback('请输入 HH:mm:ss 格式的时间');
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Divider style={{ margin: '12px 0' }}></Divider>
      <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
        <Button
          size="small"
          onClick={() => {
            onCancel();
          }}
        >
          取消
        </Button>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            form.validateFields().then(values => {
              const { startDate, startTime, endDate, endTime } = values;
              onOk([`${startDate} ${startTime}`, `${endDate} ${endTime}`]);
            });
          }}
        >
          确定
        </Button>
      </Space>
    </div>
  );
};

export default InternalPickerPanel;
