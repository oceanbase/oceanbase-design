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
const YEAR_UNIT = 'year';

export const YEAR_DATE_TIME_SECOND_FORMAT = 'MM/DD/YYYY HH:mm:ss';
export const YEAR_DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm';
export const DATE_TIME_SECOND_FORMAT = 'MM/DD HH:mm:ss';
export const DATE_TIME_FORMAT = 'MM/DD HH:mm';
export const DATE_TIME_MONTH_FORMAT = 'MM/DD/YYYY';

export const YEAR_DATE_TIME_SECOND_FORMAT_CN = 'YYYY-MM-DD HH:mm:ss';
export const YEAR_DATE_TIME_FORMAT_CN = 'YYYY-MM-DD HH:mm';
export const DATE_TIME_MONTH_FORMAT_CN = 'YYYY-MM-DD';

export const DATE_TIME_SECOND_FORMAT_CN = 'MM-DD HH:mm:ss';
export const DATE_TIME_FORMAT_CN = 'MM-DD HH:mm';

export const NEAR_1_MINUTES: RangeOption = {
  label: '近 1 分钟',
  enLabel: 'Last 1 Minute',
  rangeLabel: '1m',
  name: 'NEAR_1_MINUTES',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(1, 'minute'),
    current.clone(),
  ],
};

export const NEAR_5_MINUTES: RangeOption = {
  label: '近 5 分钟',
  enLabel: 'Last 5 Minutes',
  rangeLabel: '5m',
  name: 'NEAR_5_MINUTES',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(5, 'minute'),
    current.clone(),
  ],
};

export const NEAR_10_MINUTES: RangeOption = {
  label: '近 10 分钟',
  enLabel: 'Last 10 Minutes',
  rangeLabel: '10m',
  name: 'NEAR_10_MINUTES',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(10, 'minute'),
    current.clone(),
  ],
};

export const NEAR_20_MINUTES: RangeOption = {
  label: '近 20 分钟',
  enLabel: 'Last 20 Minutes',
  rangeLabel: '20m',
  name: 'NEAR_20_MINUTES',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(20, 'minute'),
    current.clone(),
  ],
};

export const NEAR_30_MINUTES: RangeOption = {
  label: '近 30 分钟',
  enLabel: 'Last 30 Minutes',
  rangeLabel: '30m',
  name: 'NEAR_30_MINUTES',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(30, 'minute'),
    current.clone(),
  ],
};

export const NEAR_1_HOURS: RangeOption = {
  label: '近 1 小时',
  enLabel: 'Last 1 Hour',
  rangeLabel: '1h',
  name: 'NEAR_1_HOURS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(1, 'hour'),
    current.clone(),
  ],
};

export const NEAR_2_HOURS: RangeOption = {
  label: '近 2 小时',
  enLabel: 'Last 2 Hours',
  rangeLabel: '2h',
  name: 'NEAR_2_HOURS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(2, 'hour'),
    current.clone(),
  ],
};

export const NEAR_3_HOURS: RangeOption = {
  label: '近 3 小时',
  enLabel: 'Last 3 Hours',
  rangeLabel: '3h',
  name: 'NEAR_3_HOURS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(3, 'hour'),
    current.clone(),
  ],
};

export const NEAR_6_HOURS: RangeOption = {
  label: '近 6 小时',
  enLabel: 'Last 6 Hours',
  rangeLabel: '6h',
  name: 'NEAR_6_HOURS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(6, 'hour'),
    current.clone(),
  ],
};

export const NEAR_12_HOURS: RangeOption = {
  label: '近 12 小时',
  enLabel: 'Last 12 Hours',
  rangeLabel: '12h',
  name: 'NEAR_12_HOURS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(12, 'hour'),
    current.clone(),
  ],
};

export const TODAY: RangeOption = {
  label: '今天',
  enLabel: 'Today',
  rangeLabel: '1d',
  name: 'TODAY',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(DAY_UNIT),
    current.clone().endOf(DAY_UNIT),
  ],
};

export const YESTERDAY: RangeOption = {
  label: '昨天',
  enLabel: 'Yesterday',
  rangeLabel: '1d',
  name: 'YESTERDAY',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(DAY_UNIT).add(-1, DAY_UNIT),
    current.clone().endOf(DAY_UNIT).add(-1, DAY_UNIT),
  ],
};

export const LAST_1_DAY: RangeOption = {
  label: '近 1 天',
  enLabel: 'Last 1 Day',
  rangeLabel: '1d',
  name: 'LAST_1_DAY',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(1, 'days'),
    current.clone(),
  ],
};

export const LAST_3_DAYS: RangeOption = {
  label: '近 3 天',
  enLabel: 'Last 3 Days',
  rangeLabel: '3d',
  name: 'LAST_3_DAYS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(3, 'days'),
    current.clone(),
  ],
};

export const LAST_7_DAYS: RangeOption = {
  label: '近 7 天',
  enLabel: 'Last 7 Days',
  rangeLabel: '7d',
  name: 'LAST_7_DAYS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(7, 'days'),
    current.clone(),
  ],
};

export const LAST_30_DAYS: RangeOption = {
  label: '近 30 天',
  enLabel: 'Last 30 Days',
  rangeLabel: '30d',
  name: 'LAST_30_DAYS',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().subtract(30, 'days'),
    current.clone(),
  ],
};

export const THIS_WEEK: RangeOption = {
  label: '近一周',
  enLabel: 'Nearly a week',
  rangeLabel: '1w',
  name: 'THIS_WEEK',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(WEEK_UNIT),
    current.clone().endOf(WEEK_UNIT),
  ],
};

export const LAST_WEEK: RangeOption = {
  label: '上周',
  enLabel: 'Last week',
  rangeLabel: '1w',
  name: 'LAST_WEEK',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(WEEK_UNIT).add(-1, WEEK_UNIT),
    current.clone().endOf(WEEK_UNIT).add(-1, WEEK_UNIT),
  ],
};

export const THIS_MONTH: RangeOption = {
  label: '本月',
  enLabel: 'This month',
  rangeLabel: '1mo',
  name: 'THIS_MONTH',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(MONTH_UNIT),
    current.clone().endOf(MONTH_UNIT),
  ],
};

export const LAST_MONTH: RangeOption = {
  label: '上月',
  enLabel: 'Last month',
  rangeLabel: '1mo',
  name: 'LAST_MONTH',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(MONTH_UNIT).add(-1, MONTH_UNIT),
    current.clone().endOf(MONTH_UNIT).add(-1, MONTH_UNIT),
  ],
};

export const THIS_YEAR: RangeOption = {
  label: '今年',
  enLabel: 'This year',
  rangeLabel: '1y',
  name: 'THIS_YEAR',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT),
  ],
};

export const LAST_YEAR: RangeOption = {
  label: '去年',
  enLabel: 'Last year',
  rangeLabel: '1y',
  name: 'LAST_YEAR',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT).add(-1, YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT).add(-1, YEAR_UNIT),
  ],
};

export const NEXT_YEAR: RangeOption = {
  label: '明年',
  enLabel: 'Next year',
  rangeLabel: '1y',
  name: 'NEXT_YEAR',
  range: (current: Moment | Dayjs = moment()) => [
    current.clone().startOf(YEAR_UNIT).add(1, YEAR_UNIT),
    current.clone().endOf(YEAR_UNIT).add(1, YEAR_UNIT),
  ],
};

export const NEAR_TIME_LIST = [
  NEAR_1_MINUTES,
  NEAR_5_MINUTES,
  NEAR_10_MINUTES,
  NEAR_20_MINUTES,
  NEAR_30_MINUTES,
  NEAR_1_HOURS,
  NEAR_2_HOURS,
  NEAR_3_HOURS,
  NEAR_6_HOURS,
  NEAR_12_HOURS,
  LAST_1_DAY,
  LAST_3_DAYS,
  TODAY,
  YESTERDAY,
  THIS_WEEK,
  LAST_WEEK,
  THIS_MONTH,
  LAST_MONTH,
  THIS_YEAR,
  LAST_YEAR,
  NEXT_YEAR,
];
