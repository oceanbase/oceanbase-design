import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import useCSSVarCls from 'antd/es/config-provider/hooks/useCSSVarCls';
import useStyle from 'antd/es/date-picker/style/index';
import { PickerPanel } from 'rc-picker';
import classNames from 'classnames';
import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
} from '@oceanbase/design';
import type { FormItemProps } from '@oceanbase/design';
import { noop } from 'lodash';
import moment from 'moment';
import dayjs from 'dayjs';
import { useUpdate } from 'ahooks';
import { toArray } from '@oceanbase/util';
import { getPrefix } from '../_util';

type RangeValue = [Moment, Moment] | [Dayjs, Dayjs];
type ValidateTrigger = 'submit' | 'valueChange';

type MaybeArray<T> = T | T[];
type ErrorType = 'endDate' | 'startDate' | 'endTime' | 'startTime';

export type Rule = {
  message: string;
  validate: (value: string) => MaybeArray<ErrorType>;
};

export interface PickerPanelProps {
  value?: RangeValue;
  defaultValue?: RangeValue;
  tip?: string;
  require?: boolean;
  rules?: Rule[];
  validateTrigger?: ValidateTrigger;
  onCancel: () => void;
  onOk: (v: RangeValue) => void;
  isMoment: boolean;
  disabledDate: any;
  locale: any;
}

const prefix = getPrefix('ranger-picker-panel');

const prefixCls = 'ant-picker';
const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm:ss';

const InternalPickerPanel = (props: PickerPanelProps) => {
  const {
    defaultValue = [],
    isMoment,
    locale,
    tip,
    rules,
    require = true,
    onOk = noop,
    onCancel = noop,
    disabledDate,
  } = props;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const [defaultS, defaultE] = defaultValue;
  const [calendarValue, setCalendarValue] = React.useState(defaultValue);
  const [internalHoverValues, setInternalHoverValues] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const getDateInstance = useCallback(
    (
      v?: string | Dayjs | Moment,
      format?: typeof DATE_FORMAT | typeof TIME_FORMAT,
      strict?: boolean
    ) => {
      return isMoment ? moment(v as Moment, format, strict) : dayjs(v as Dayjs, format, strict);
    },
    [isMoment]
  );

  const hoverValues = React.useMemo(() => {
    return internalHoverValues || calendarValue;
  }, [internalHoverValues, calendarValue]);

  // ======================== Change ========================
  const fillCalendarValue = (date, index: number) =>
    // Trigger change only when date changed
    fillIndex(calendarValue, index, date);

  function fillIndex<T extends any[]>(ori: T, index: number, value: T[number]): T {
    const clone = [...ori] as T;
    clone[index] = value;
    return clone;
  }

  const onPanelHover = date => {
    setInternalHoverValues(date ? fillCalendarValue(date, activeIndex) : null);
  };

  // 对日期进行排序
  const formatValues = [...calendarValue]
    .sort((a, b) => {
      return a?.valueOf() - b?.valueOf();
    })
    .map(item => {
      return item.format(DATE_FORMAT);
    });

  const [form] = Form.useForm();
  const [_sDate, _eDate] = formatValues;
  const setFormatDateToForm = () => {
    form.setFieldsValue({
      startDate: _sDate,
      endDate: _eDate,
    });
  };

  useEffect(() => {
    setFormatDateToForm();
  }, [_sDate, _eDate]);

  const defaultTime = useMemo(() => {
    return getDateInstance();
  }, []);

  const [errorMessage, setErrorMessage] = useState('');
  const [errorTypeList, setErrorTypeList] = useState([]);
  const errorTypeMap = errorTypeList.reduce((pre, errorKey) => {
    pre[errorKey] = 'error';
    return pre;
  }, {});

  const validateInputDate = e => {
    const v = e.target.value;
    const date = getDateInstance(v, DATE_FORMAT, true);
    return date.isValid() ? date.format(DATE_FORMAT) : null;
  };
  const validateInputTime = e => {
    const v: string = e.target.value;
    const [h, m, s] = v?.split(':') ?? [];
    if (!(h && m && s)) return null;
    if (!(h.length === 2 && m.length === 2 && s.length === 2)) return null;
    const date = getDateInstance(v, TIME_FORMAT, true);
    return date.isValid() ? date.format(TIME_FORMAT) : null;
  };

  const selectDateInputRange = (inputDomRef: HTMLInputElement) => {
    if (!inputDomRef) return;
    // year
    if (inputDomRef.selectionStart >= 0 && inputDomRef.selectionStart <= 4) {
      inputDomRef.setSelectionRange(0, 4);
    }
    // month
    if (inputDomRef.selectionStart > 4 && inputDomRef.selectionStart <= 7) {
      inputDomRef.setSelectionRange(5, 7);
    }
    // day
    if (inputDomRef.selectionStart > 7 && inputDomRef.selectionStart <= 10) {
      inputDomRef.setSelectionRange(8, 10);
    }
  };

  const selectTimeInputRange = (inputDomRef: HTMLInputElement) => {
    if (!inputDomRef) return;
    // hour
    if (inputDomRef.selectionStart >= 0 && inputDomRef.selectionStart <= 2) {
      inputDomRef.setSelectionRange(0, 2);
    }
    // minute
    if (inputDomRef.selectionStart > 2 && inputDomRef.selectionStart <= 5) {
      inputDomRef.setSelectionRange(3, 5);
    }
    // second
    if (inputDomRef.selectionStart > 5 && inputDomRef.selectionStart <= 8) {
      inputDomRef.setSelectionRange(6, 8);
    }
  };

  const handleDateInputKeyDown = (
    inputDomRef: HTMLInputElement,
    e: React.KeyboardEvent<HTMLElement>
  ) => {
    if (!inputDomRef) return;
    if (e.key === 'Enter') {
      inputDomRef.blur();
      return;
    }
    if (e.key === 'ArrowLeft') {
      const curIndex = inputDomRef.selectionStart;
      inputDomRef.setSelectionRange(curIndex - 1, curIndex - 1);
    }
    if (e.key === 'ArrowRight') {
      const curIndex = inputDomRef.selectionEnd;
      inputDomRef.setSelectionRange(curIndex + 1, curIndex + 1);
    }
    // NOTE: onKeyDown事件执行时，由于TimePicker需要执行受控逻辑，这会引起React rerender，
    // 导致onKeyDown事件中拿到的Event还未更新，将下述校验逻辑放入requestIdleCallback确保其跟在React fiber调用栈后执行，这可取到最新的Event对象。
    requestIdleCallback(() => {
      // 校验
      if (validateInputDate(e)) {
        selectDateInputRange(inputDomRef);
      }
    });
  };

  const handleTimeInputKeyDown = (
    inputDomRef: HTMLInputElement,
    e: React.KeyboardEvent<HTMLElement>
  ) => {
    if (!inputDomRef) return;
    if (e.key === 'Enter') {
      inputDomRef.blur();
      return;
    }
    if (e.key === 'ArrowLeft') {
      const curIndex = inputDomRef.selectionStart;
      inputDomRef.setSelectionRange(curIndex - 1, curIndex - 1);
    }
    if (e.key === 'ArrowRight') {
      const curIndex = inputDomRef.selectionEnd;
      inputDomRef.setSelectionRange(curIndex + 1, curIndex + 1);
    }
    // NOTE: onKeyDown事件执行时，由于TimePicker需要执行受控逻辑，这会引起React rerender，
    // 导致onKeyDown事件中拿到的Event还未更新，将下述校验逻辑放入requestIdleCallback确保其跟在React fiber调用栈后执行，这可取到最新的Event对象。
    requestIdleCallback(() => {
      // 校验
      if (validateInputTime(e)) {
        selectTimeInputRange(inputDomRef);
      }
    });
  };

  return (
    <div className={classNames(prefix)}>
      <Space direction="vertical" size={12} style={{ margin: '12px 0' }}>
        {tip && <Alert message={tip} type="info" showIcon></Alert>}
        <Form
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          style={{ width: 280 }}
          form={form}
        >
          <Row gutter={12}>
            <Col span={15}>
              <Form.Item
                name="startDate"
                label={locale.startDate}
                validateStatus={errorTypeMap['startDate']}
                style={{ marginBottom: 8 }}
              >
                <Input
                  size="middle"
                  onBlur={e => {
                    const v = validateInputDate(e);
                    if (v) {
                      form.setFieldValue('startDate', v);
                      setCalendarValue(([, eDate]) => {
                        return [getDateInstance(v), eDate] as [Dayjs, Dayjs];
                      });
                    } else {
                      setFormatDateToForm();
                    }
                  }}
                  onClick={() => {
                    selectDateInputRange(form.getFieldInstance('startDate').nativeElement);
                  }}
                  onKeyDown={e => {
                    handleDateInputKeyDown(form.getFieldInstance('startDate').nativeElement, e);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={9} style={{ paddingRight: 0 }}>
              <Form.Item
                name="startTime"
                label={locale.startTime}
                style={{ marginBottom: 8 }}
                validateStatus={errorTypeMap['startTime']}
                initialValue={defaultS || defaultTime}
              >
                <TimePicker
                  suffixIcon={null}
                  needConfirm={false}
                  getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
                  style={{ width: '100%' }}
                  onClick={() => {
                    selectTimeInputRange(
                      form.getFieldInstance('startTime').nativeElement.querySelector('input')
                    );
                  }}
                  onKeyDown={e => {
                    handleTimeInputKeyDown(
                      form.getFieldInstance('startTime').nativeElement.querySelector('input'),
                      e
                    );
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={15}>
              <Form.Item
                name="endDate"
                label={locale.endDate}
                style={{ marginBottom: 0 }}
                validateStatus={errorTypeMap['endDate']}
              >
                <Input
                  onBlur={e => {
                    const v = validateInputDate(e);
                    if (v) {
                      form.setFieldValue('endDate', v);
                      setCalendarValue(([sDate]) => {
                        return [sDate, getDateInstance(v)] as [Dayjs, Dayjs];
                      });
                    } else {
                      setFormatDateToForm();
                    }
                  }}
                  onClick={() => {
                    selectDateInputRange(form.getFieldInstance('endDate').nativeElement);
                  }}
                  onKeyDown={e => {
                    handleDateInputKeyDown(form.getFieldInstance('endDate').nativeElement, e);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={9} style={{ paddingRight: 0 }}>
              <Form.Item
                name="endTime"
                label={locale.endTime}
                style={{ marginBottom: 0 }}
                validateStatus={errorTypeMap['endTime']}
                initialValue={defaultE || defaultTime}
              >
                <TimePicker
                  suffixIcon={null}
                  needConfirm={false}
                  getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
                  style={{ width: '100%' }}
                  onClick={() => {
                    selectTimeInputRange(
                      form.getFieldInstance('endTime').nativeElement.querySelector('input')
                    );
                  }}
                  onKeyDown={e => {
                    handleTimeInputKeyDown(
                      form.getFieldInstance('endTime').nativeElement.querySelector('input'),
                      e
                    );
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {errorMessage && <Alert message={errorMessage} type="error" showIcon></Alert>}
      </Space>
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
            // @ts-ignore
            value={calendarValue}
            disabledDate={disabledDate}
            onHover={(...res) => {
              onPanelHover(res[0]);
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
            showNow={false}
            range={true}
            needConfirm={false}
          />
        </div>
      )}
      <Divider style={{ margin: '12px 0' }}></Divider>
      <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
        <Button
          size="small"
          onClick={() => {
            onCancel();
          }}
        >
          {locale.cancel}
        </Button>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            form.validateFields().then(values => {
              const { startDate, startTime, endDate, endTime } = values;
              const start = `${startDate} ${startTime.format(TIME_FORMAT)}`;
              const end = `${endDate} ${endTime.format(TIME_FORMAT)}`;

              onOk([start, end]);

              // let errorList = [];
              // let message = '';
              // rules?.some(item => {
              //   if (typeof item?.validator === 'function') {
              //     const errorType = item.validator(start, end);
              //     if (errorType) {
              //       errorList = toArray(errorType);
              //       message = item.message;
              //       return true;
              //     }
              //   }
              //   return false;
              // });

              // if (errorList.length > 0) {
              //   setErrorTypeList(errorList);
              //   setErrorMessage(message);
              // } else {
              //   setErrorMessage('');
              //   setErrorTypeList([]);
              //   onOk([start, end]);
              // }
            });
          }}
        >
          {locale.confirm}
        </Button>
      </Space>
    </div>
  );
};

export default InternalPickerPanel;
