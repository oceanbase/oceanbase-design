import { DatePicker, DatePickerProps, Dropdown, Radio, Space } from '@oceanbase/design';
import type { RangePickerProps } from '@oceanbase/design/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { isNil, noop, omit } from 'lodash';
import type { Moment } from 'moment';
import moment from 'moment';
import classNames from 'classnames';
import { useInterval } from 'ahooks';
import React, { useEffect, useMemo, useState } from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import {
  CUSTOMIZE,
  DATE_TIME_FORMAT,
  NEAR_1_HOURS,
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
  NEAR_TIME_LIST,
  YEAR_DATE_TIME_FORMAT,
} from './constant';
import './index.less';
import zhCN from './locale/zh-CN';
import type { RangeOption } from './typing';
import { LeftOutlined, PauseOutlined, CaretRightOutlined, RightOutlined } from '@oceanbase/icons';

export type RangeName = 'customize' | string;

export type RangeValue = [Moment, Moment] | [Dayjs, Dayjs];

export type RangeDateValue = {
  name: RangeName;
  range: RangeValue;
};

interface RangerProps extends Omit<RangePickerProps, 'mode' | 'picker' | 'value' | 'defaultValue'> {
  // 数据相关
  selects?: RangeOption[];
  defaultQuickValue?: string;
  // ui 相关
  mode?: 'default' | 'mini';
  quickType?: 'select' | 'dropdown';
  /** 是否只允许选择过去时间 */
  pastOnly?: boolean;
  //固定rangeName
  stickRangeName?: boolean;
  value?: RangeValue;
  defaultValue?: RangeValue;
  size?: 'small' | 'large' | 'middle';
}

const prefix = getPrefix('date-ranger');

const Ranger = (props: RangerProps) => {
  const {
    selects = [NEAR_1_MINUTES, NEAR_30_MINUTES, NEAR_1_HOURS],
    value,
    defaultValue,
    defaultQuickValue,
    mode = 'default',
    quickType = 'select',
    pastOnly = false,
    onChange = noop,
    disabledDate,
    locale,
    size,
    //固定rangeName
    stickRangeName = false,
    ...rest
  } = props;

  // 是否为 moment 时间对象
  const isMoment =
    moment.isMoment(defaultValue?.[0]) ||
    moment.isMoment(defaultValue?.[1]) ||
    moment.isMoment(value?.[0]) ||
    moment.isMoment(value?.[1]);

  const [innerValue, setInnerValue] = useState<RangeValue>(value ?? defaultValue);

  const [rangeName, setRangeName] = useState(
    value || defaultValue ? CUSTOMIZE : defaultQuickValue ?? selects?.[0]?.name
  );

  // 没有 selects 时，回退到普通 RangePicker, 当前时间选项为自定义时，应该显示 RangePicker
  const [isPlay, setIsPlay] = useState(rangeName !== CUSTOMIZE);

  const defaultInternalValue = useMemo(() => {
    return selects
      .find(item => item.name === rangeName)
      ?.range(isMoment ? moment() : dayjs()) as RangeValue;
  }, [defaultValue]);

  const compare = (m1: RangeValue, m2: RangeValue) => {
    if (Array.isArray(m1) && !Array.isArray(m2)) return false;
    if (Array.isArray(m2) && !Array.isArray(m1)) return false;
    return value[0] === innerValue[0] || value[1] === innerValue[1];
  };

  useEffect(() => {
    if (isNil(value) && isNil(innerValue)) return;
    // FIXME: 当前存在值的时候赋空值给组件，不好处理先 workaround 绕过，后面再想一个整体的方案
    if (isNil(value) && !isNil(innerValue)) return;
    const isEqual = compare(value, innerValue as RangeValue);
    // 前后时间有差异时，进行赋值
    if (!isEqual) {
      setInnerValue(value);
      if (!stickRangeName) {
        setRangeName(CUSTOMIZE);
      }
    }
  }, [value, stickRangeName]);

  useEffect(() => {
    if (defaultInternalValue) {
      rangeChange(defaultInternalValue);
    }
  }, []);

  const handleNameChange = (name: string) => {
    if (name === CUSTOMIZE) {
      setIsPlay(false);
    }
    setRangeName(name);
  };

  const rangeChange = (range: RangeValue) => {
    setInnerValue(range);
    onChange(range);
  };

  const datePickerChange = (range: RangeValue) => {
    rangeChange(range);
    setRangeName(CUSTOMIZE);
  };

  const disabledFuture = (current: Moment | Dayjs) => {
    const futureDay = moment.isMoment(current) ? moment().endOf('day') : dayjs().endOf('day');
    // 禁止选择未来日期
    return current && futureDay && current > futureDay;
  };

  const startTime = innerValue?.[0];
  const endTime = innerValue?.[1];
  const differenceMs = endTime?.diff(startTime as any);
  const tagStyle = {
    backgroundColor: 'rgb(226, 229, 237)',
    marginRight: 8,
    display: 'inline-block',
    width: 72,
    textAlign: 'center',
    padding: '6px 0',
    borderRadius: 4,
    lineHeight: 1,
  };

  useInterval(
    () => {
      const selected = NEAR_TIME_LIST.find(item => item.name === rangeName);
      if (selected?.range) {
        rangeChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
      }
      if (rangeName === CUSTOMIZE) {
        rangeChange([startTime, isMoment ? moment() : dayjs()] as RangeValue);
      }
    },
    isPlay ? 1000 : null
  );

  const rangeLabel =
    rangeName === CUSTOMIZE
      ? '自定义'
      : selects.find(_item => _item.name === rangeName)?.rangeLabel;

  const label =
    rangeName === CUSTOMIZE ? '自定义时间' : selects.find(_item => _item.name === rangeName)?.label;

  const isTerse = isPlay && rangeName !== CUSTOMIZE;

  const thisYear = new Date().getFullYear();
  const isThisYear = startTime?.year() === thisYear && endTime?.year() === thisYear;

  return (
    <Space size={4} className={classNames(prefix)} style={rest.style}>
      <div style={{ border: '1px solid #d9d9d9', borderRadius: 4 }} size={0}>
        <Dropdown
          trigger="click"
          menu={{
            items: [
              ...selects,
              {
                name: CUSTOMIZE,
                rangeLabel: '自定义',
                label: '自定义时间',
              },
            ].map(item => {
              return {
                key: item.name,
                label: (
                  <span
                    onClick={() => {
                      const rName = item.name;
                      handleNameChange(rName);

                      const selected = NEAR_TIME_LIST.find(_item => _item.name === rName);
                      // 存在快捷选项切换为极简模式
                      if (selected?.range) {
                        setIsPlay(true);
                        rangeChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
                      }
                    }}
                  >
                    <span style={tagStyle}>
                      {item.name === CUSTOMIZE ? '自定义' : item.rangeLabel}
                    </span>
                    {locale[item.label] || item.label}
                  </span>
                ),
              };
            }),
          }}
        >
          <Space size={0}>
            <span
              style={{
                ...tagStyle,
                margin: 0,
                marginLeft: 8,
              }}
            >
              {rangeLabel}
            </span>
            {isTerse && <div style={{ padding: '4px 11px 4px' }}>{label}</div>}
          </Space>
        </Dropdown>
        {!isTerse && (
          /* @ts-ignore */
          <DatePicker.RangePicker
            disabledDate={pastOnly ? disabledFuture : disabledDate}
            format={v => {
              // format 会影响布局，原先采用 v.year() === new Date().getFullYear() 进行判断，value 一共会传入三次(range0 range1 now),会传入最新的时间导致判断异常

              const suffixFormat = rangeName === CUSTOMIZE ? ':ss' : '';

              return isThisYear
                ? v.format(DATE_TIME_FORMAT + suffixFormat)
                : v.format(YEAR_DATE_TIME_FORMAT + suffixFormat);
            }}
            defaultValue={defaultValue}
            value={innerValue || defaultInternalValue}
            onChange={datePickerChange}
            showTime={true}
            className={`${prefix}-range-picker`}
            size={size}
            bordered={false}
            style={{ paddingLeft: 4 }}
            // 透传 props 到 antd Ranger
            {...omit(rest, 'value', 'onChange')}
          />
        )}
      </div>
      <Radio.Group
        value={isPlay ? 'play' : ''}
        className={`${prefix}-playback-control`}
        buttonStyle="solid"
      >
        <Radio.Button
          value="stepBack"
          style={{ paddingInline: 8 }}
          onClick={() => {
            if (isPlay) {
              setIsPlay(false);
            }

            if (startTime && endTime) {
              const newStartTime = (startTime as Dayjs).subtract(differenceMs);
              const newEndTime = startTime?.clone() as Dayjs;

              rangeChange([newStartTime, newEndTime]);
            }
          }}
        >
          <LeftOutlined />
        </Radio.Button>
        <Radio.Button
          value={'play'}
          style={{ paddingInline: 8 }}
          onClick={() => {
            // getNow();
            const newPlay = !isPlay;
            setIsPlay(newPlay);
          }}
        >
          {isPlay ? <PauseOutlined /> : <CaretRightOutlined />}
        </Radio.Button>
        <Radio.Button
          value="stepForward"
          style={{ paddingInline: 8 }}
          disabled={isPlay}
          onClick={() => {
            if (startTime && endTime) {
              const newStartTime = endTime.clone() as Dayjs;
              const newEndTime = (endTime as Dayjs).add(differenceMs);

              if (newEndTime.isBefore(new Date())) {
                rangeChange([newStartTime, newEndTime]);
              } else {
                setIsPlay(true);
              }
            }
          }}
        >
          <RightOutlined />
        </Radio.Button>
      </Radio.Group>
    </Space>
  );
};

export default LocaleWrapper({
  componentName: 'Ranger',
  defaultLocale: zhCN,
})(Ranger);
