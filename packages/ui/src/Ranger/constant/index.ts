// @ts-nocheck
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import type { Moment } from 'moment';
import moment from 'moment';
import type { RangeOption } from '../typing';

dayjs.extend(quarterOfYear);

export const CUSTOMIZE = 'customize';

const DAY_UNIT = 'day';
const WEEK_UNIT = 'week';
const MONTH_UNIT = 'month';
const QUARTER_UNIT = 'quarter';
const YEAR_UNIT = 'year';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const NEAR_1_MINUTES: RangeOption = {
  name: '近 1 分钟',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(1, 'minute'),
    current.clone(),
  ],
};

export const NEAR_5_MINUTES: RangeOption = {
  name: '近 5 分钟',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(5, 'minute'),
    current.clone(),
  ],
};

export const NEAR_10_MINUTES: RangeOption = {
  name: '近 10 分钟',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(10, 'minute'),
    current.clone(),
  ],
};

export const NEAR_20_MINUTES: RangeOption = {
  name: '近 20 分钟',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(20, 'minute'),
    current.clone(),
  ],
};

export const NEAR_30_MINUTES: RangeOption = {
  name: '近 30 分钟',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(30, 'minute'),
    current.clone(),
  ],
};

export const NEAR_1_HOURS: RangeOption = {
  name: '近 1 小时',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(1, 'hour'),
    current.clone(),
  ],
};

export const NEAR_2_HOURS: RangeOption = {
  name: '近 2 小时',
  range: () => [moment().subtract(2, 'hour'), moment()],
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(2, 'hour'),
    current.clone(),
  ],
};

export const NEAR_3_HOURS: RangeOption = {
  name: '近 3 小时',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(3, 'hour'),
    current.clone(),
  ],
};

export const NEAR_6_HOURS: RangeOption = {
  name: '近 6 小时',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(6, 'hour'),
    current.clone(),
  ],
};

export const TODAY: RangeOption = {
  name: '今天',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(DAY_UNIT),
    current.clone().endOf(DAY_UNIT),
  ],
};

export const YESTERDAY: RangeOption = {
  name: '昨天',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(DAY_UNIT).add(-1, DAY_UNIT),
    current.clone().endOf(DAY_UNIT).add(-1, DAY_UNIT),
  ],
};

export const TOMORROW: RangeOption = {
  name: '明天',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(DAY_UNIT).add(1, DAY_UNIT),
    current.clone().endOf(DAY_UNIT).add(1, DAY_UNIT),
  ],
};

export const THIS_WEEK: RangeOption = {
  name: '本周',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(WEEK_UNIT),
    current.clone().endOf(WEEK_UNIT),
  ],
};

export const LAST_WEEK: RangeOption = {
  name: '上周',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(WEEK_UNIT).add(-1, WEEK_UNIT),
    current.clone().endOf(WEEK_UNIT).add(-1, WEEK_UNIT),
  ],
};

export const NEXT_WEEK: RangeOption = {
  name: '下周',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(WEEK_UNIT).add(1, WEEK_UNIT),
    current.clone().endOf(WEEK_UNIT).add(1, WEEK_UNIT),
  ],
};

export const THIS_MONTH: RangeOption = {
  name: '本月',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(MONTH_UNIT),
    current.clone().endOf(MONTH_UNIT),
  ],
};

export const LAST_MONTH: RangeOption = {
  name: '上月',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(MONTH_UNIT).add(-1, MONTH_UNIT),
    current.clone().endOf(MONTH_UNIT).add(-1, MONTH_UNIT),
  ],
};

export const NEXT_MONTH: RangeOption = {
  name: '下月',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(MONTH_UNIT).add(1, MONTH_UNIT),
    current.clone().endOf(MONTH_UNIT).add(1, MONTH_UNIT),
  ],
};

export const THIS_QUARTER: RangeOption = {
  name: '本季度',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(QUARTER_UNIT),
    current.clone().endOf(QUARTER_UNIT),
  ],
};

export const LAST_QUARTER: RangeOption = {
  name: '上季度',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(QUARTER_UNIT).add(-1, QUARTER_UNIT),
    current.clone().endOf(QUARTER_UNIT).add(-1, QUARTER_UNIT),
  ],
};

export const NEXT_QUARTER: RangeOption = {
  name: '下季度',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(QUARTER_UNIT).add(1, QUARTER_UNIT),
    current.clone().endOf(QUARTER_UNIT).add(1, QUARTER_UNIT),
  ],
};

export const THIS_YEAR: RangeOption = {
  name: '今年',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT),
  ],
};

export const LAST_YEAR: RangeOption = {
  name: '去年',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT).add(-1, YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT).add(-1, YEAR_UNIT),
  ],
};

export const NEXT_YEAR: RangeOption = {
  name: '明年',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT).add(1, YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT).add(1, YEAR_UNIT),
  ],
};
