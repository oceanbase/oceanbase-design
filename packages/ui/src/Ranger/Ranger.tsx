import { DatePicker, Space } from '@oceanbase/design';
import type { RangePickerProps } from '@oceanbase/design/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { isNil, noop, omit } from 'lodash';
import type { Moment } from 'moment';
import moment from 'moment';
import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import {
  CUSTOMIZE,
  DATE_TIME_FORMAT,
  NEAR_1_HOURS,
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
} from './constant';
import './index.less';
import zhCN from './locale/zh-CN';
import type { QuickType } from './QuickPicker';
import QuickPicker from './QuickPicker';
import type { RangeOption } from './typing';

export type RangeName = 'customize' | string;

export type RangeValue = [Moment, Moment] | [Dayjs, Dayjs];

export type RangeDateValue = {
  name: RangeName;
  range: RangeValue;
};

export interface RangerProps
  extends Omit<RangePickerProps, 'mode' | 'picker' | 'value' | 'defaultValue'> {
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

const prefix = getPrefix('ranger');

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

  let internalQuickType!: QuickType;
  if (quickType === 'dropdown' && rangeName !== CUSTOMIZE) {
    internalQuickType = 'dropdown';
  } else {
    internalQuickType = 'select';
  }
  // 普通模式或者当前时间选项为自定义时，应该显示 rangePicker
  const showRange = mode === 'default' || rangeName === CUSTOMIZE;
  // 没有 selects 时，回退到普通 RangePicker
  const showQuickPicker = selects.length !== 0;

  return (
    <Space
      size={0}
      className={classNames(
        {
          [`${prefix}-show-range`]: showRange,
        },
        prefix
      )}
      style={rest.style}
    >
      {showQuickPicker && (
        <QuickPicker
          customable
          type={internalQuickType}
          onChange={rangeChange}
          onNameChange={handleNameChange}
          selects={selects}
          name={rangeName}
          locale={locale}
          isMoment={isMoment}
          size={size}
        />
      )}
      {showRange && (
        // @ts-ignore
        <DatePicker.RangePicker
          disabledDate={pastOnly ? disabledFuture : disabledDate}
          format={DATE_TIME_FORMAT}
          defaultValue={defaultValue}
          value={innerValue || defaultInternalValue}
          onChange={datePickerChange}
          showTime={true}
          className={`${prefix}-range-picker`}
          size={size}
          // 透传 props 到 antd Ranger
          {...omit(rest, 'value', 'onChange')}
        />
      )}
    </Space>
  );
};

export default LocaleWrapper({
  componentName: 'Ranger',
  defaultLocale: zhCN,
})(Ranger);
