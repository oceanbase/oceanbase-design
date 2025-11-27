import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
} from '@oceanbase/design';
import { noop } from 'lodash';
import moment from 'moment';
import dayjs from 'dayjs';
import { DATE_TIME_MONTH_FORMAT, DATE_TIME_MONTH_FORMAT_CN } from './constant';
import type { RangeValue } from './Ranger';
type ValidateTrigger = 'submit' | 'valueChange';

type MaybeArray<T> = T | T[];
type ErrorType = 'endDate' | 'startDate' | 'endTime' | 'startTime' | 'all';

const ALL_ERROR_TYPE_LIST = ['endDate', 'startDate', 'endTime', 'startTime'];

export type Rule = {
  message: string;
  validator: (value: [string, string] | []) => MaybeArray<ErrorType> | null | undefined;
};

export interface PickerPanelProps {
  value?: RangeValue;
  defaultValue?: RangeValue;
  tip?: string;
  required?: boolean;
  rules?: Rule[];
  validateTrigger?: ValidateTrigger;
  onCancel: () => void;
  onOk: (v: RangeValue) => void;
  isMoment: boolean;
  disabledDate: any;
  hideSecond?: boolean;
  locale: any;
}

/**
 * 点击交互/时间选择交互
 *  - 首次点击时，开始时间和结束时间都置为所点击的时间
 *  - 第二次点击时，根据点击的时间，判断是开始时间还是结束时间进行赋值
 *  - 新一轮交互开始...
 */
const CLICK_STATE = {
  START: 'START',
  END: 'END',
};

const useClickFSA = () => {
  const [state, setState] = useState(CLICK_STATE.END);

  const next = () => {
    setState(ps => {
      return ps === CLICK_STATE.START ? CLICK_STATE.END : CLICK_STATE.START;
    });
  };

  return [state, next] as const;
};

const prefixCls = 'ant-picker';
const TIME_FORMAT = 'HH:mm:ss';

const InternalPickerPanel = (props: PickerPanelProps) => {
  const {
    defaultValue,
    isMoment,
    locale,
    tip,
    rules,
    required = true,
    onOk = noop,
    onCancel = noop,
    disabledDate,
    hideSecond,
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefix = getPrefixCls('ranger-picker-panel');
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
  const [clickFSA, clickFSANext] = useClickFSA();

  const [defaultS, defaultE] = defaultValue;
  const [calendarValue, setCalendarValue] = React.useState(defaultValue);
  const [internalHoverValues, setInternalHoverValues] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isEn = locale?.antLocale === 'en';

  //
  const DATE_FORMAT = isEn ? DATE_TIME_MONTH_FORMAT : DATE_TIME_MONTH_FORMAT_CN;

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
    setInternalHoverValues(
      date && clickFSA === CLICK_STATE.START ? fillCalendarValue(date, activeIndex) : null
    );
  };

  // 对日期进行排序
  const formatValues = [...calendarValue]
    .sort((a, b) => {
      return a?.valueOf() - b?.valueOf();
    })
    .map(item => {
      return item?.format(DATE_FORMAT);
    });

  const [form] = Form.useForm();
  const [_sDate, _eDate] = formatValues;
  const setFormatDateToForm = () => {
    form.setFieldsValue({
      startDate: getDateInstance(_sDate),
      endDate: getDateInstance(_eDate),
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

  const formatDate = (v: Moment | Dayjs) => {
    const date = getDateInstance(v, DATE_FORMAT, true);
    return date.isValid() ? date.format(DATE_FORMAT) : null;
  };
  const validateInputDate = e => {
    const v = e.target.value;
    return formatDate(v);
  };

  return (
    <div className={classNames(prefix)}>
      <Space direction="vertical" size={12} style={{ margin: '12px 0' }}>
        <Form
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
          style={{ width: 280 }}
          form={form}
        >
          <Row gutter={12} style={{ marginBottom: 4 }}>
            <Col span={12} style={{ paddingLeft: 12 }}>
              <Form.Item
                name="startDate"
                label={locale.startDate}
                validateStatus={errorTypeMap['startDate']}
                style={{ marginBottom: 8 }}
                rules={[{ required: true }]}
              >
                <DatePicker
                  format={{
                    format: 'YYYY-MM-DD',
                    type: 'mask',
                  }}
                  style={{ width: 128 }}
                  open={false}
                  suffixIcon={null}
                  allowClear={false}
                  onBlur={e => {
                    const v = validateInputDate(e);
                    if (v) {
                      form.setFieldValue('startDate', getDateInstance(v));
                      setCalendarValue(([, eDate]) => {
                        return [getDateInstance(v), eDate] as [Dayjs, Dayjs];
                      });
                    } else {
                      setFormatDateToForm();
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingRight: 8 }}>
              <Form.Item
                name="startTime"
                label={locale.startTime}
                style={{ marginBottom: 8 }}
                validateStatus={errorTypeMap['startTime']}
                initialValue={defaultS || defaultTime}
                rules={[{ required: true }]}
              >
                <TimePicker
                  allowClear={false}
                  suffixIcon={null}
                  needConfirm={false}
                  getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
                  style={{ width: '100%' }}
                  format={{
                    format: hideSecond ? 'HH:mm' : 'HH:mm:ss',
                    type: 'mask',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12} style={{ paddingLeft: 12 }}>
              <Form.Item
                name="endDate"
                label={locale.endDate}
                style={{ marginBottom: 0 }}
                validateStatus={errorTypeMap['endDate']}
                rules={[{ required: true }]}
              >
                <DatePicker
                  format={{
                    format: 'YYYY-MM-DD',
                    type: 'mask',
                  }}
                  style={{ width: 128 }}
                  open={false}
                  suffixIcon={null}
                  allowClear={false}
                  onBlur={e => {
                    const v = validateInputDate(e);
                    if (v) {
                      form.setFieldValue('endDate', getDateInstance(v));
                      setCalendarValue(([sDate]) => {
                        return [sDate, getDateInstance(v)] as [Dayjs, Dayjs];
                      });
                    } else {
                      setFormatDateToForm();
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingRight: 8 }}>
              <Form.Item
                name="endTime"
                label={locale.endTime}
                style={{ marginBottom: 0 }}
                validateStatus={errorTypeMap['endTime']}
                initialValue={defaultE || defaultTime}
                rules={[{ required: true }]}
              >
                <TimePicker
                  allowClear={false}
                  suffixIcon={null}
                  needConfirm={false}
                  getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
                  style={{ width: '100%' }}
                  format={{
                    format: hideSecond ? 'HH:mm' : 'HH:mm:ss',
                    type: 'mask',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
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
              clickFSANext();
              if (clickFSA === CLICK_STATE.END) {
                setCalendarValue([res[0], res[0]]);
              } else {
                setCalendarValue(fillCalendarValue(res[0], activeIndex));
              }
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
      <Divider style={{ margin: '8px 0' }}></Divider>
      {tip && !errorMessage && (
        <Alert message={tip} type="info" style={{ marginBottom: 8 }} showIcon></Alert>
      )}
      {errorMessage && (
        <Alert message={errorMessage} type="error" style={{ marginBottom: 8 }} showIcon></Alert>
      )}
      <Space
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          padding: '0 12px 4px 0',
        }}
      >
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
              // 日期同一天时对时间进行排序，保证开始时间在结束时间之前
              const [sTime, eTime] = startDate.isSame(endDate)
                ? [startTime, endTime].sort((a, b) => {
                    return a?.valueOf() - b?.valueOf();
                  })
                : [startTime, endTime];

              const start = `${formatDate(startDate)} ${sTime.format(TIME_FORMAT)}`;
              const end = `${formatDate(endDate)} ${eTime.format(TIME_FORMAT)}`;

              let errorList = [];
              let message = '';
              rules?.some(item => {
                if (typeof item?.validator === 'function') {
                  const errorType = item.validator([start, end]);
                  if (errorType) {
                    errorList = Array.isArray(errorType) ? errorType : [errorType];
                    message = item.message;
                    return true;
                  }
                }
                return false;
              });

              if (errorList.length > 0) {
                setErrorTypeList(errorList.includes('all') ? ALL_ERROR_TYPE_LIST : errorList);
                setErrorMessage(message);
              } else {
                setErrorMessage('');
                setErrorTypeList([]);
                onOk([start, end]);
              }
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
