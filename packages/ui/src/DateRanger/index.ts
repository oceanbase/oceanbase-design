import {
  LAST_1_DAY,
  LAST_3_DAYS,
  LAST_MONTH,
  LAST_WEEK,
  LAST_YEAR,
  NEAR_10_MINUTES,
  NEAR_12_HOURS,
  NEAR_1_HOURS,
  NEAR_1_MINUTES,
  NEAR_20_MINUTES,
  NEAR_2_HOURS,
  NEAR_30_MINUTES,
  NEAR_3_HOURS,
  NEAR_5_MINUTES,
  NEAR_6_HOURS,
  NEXT_YEAR,
  THIS_MONTH,
  THIS_WEEK,
  THIS_YEAR,
  TODAY,
  YESTERDAY,
} from './constant';
import InternalDateRanger from './Ranger';

export * from './Ranger';

type InternalDateRangerType = typeof InternalDateRanger;

export interface DateRangerInstance extends InternalDateRangerType {
  NEAR_1_MINUTES: typeof NEAR_1_MINUTES;
  NEAR_5_MINUTES: typeof NEAR_5_MINUTES;
  NEAR_10_MINUTES: typeof NEAR_10_MINUTES;
  NEAR_20_MINUTES: typeof NEAR_20_MINUTES;
  NEAR_30_MINUTES: typeof NEAR_30_MINUTES;
  NEAR_1_HOURS: typeof NEAR_1_HOURS;
  NEAR_2_HOURS: typeof NEAR_2_HOURS;
  NEAR_3_HOURS: typeof NEAR_3_HOURS;
  NEAR_6_HOURS: typeof NEAR_6_HOURS;
  NEAR_12_HOURS: typeof NEAR_12_HOURS;
  TODAY: typeof TODAY;
  LAST_1_DAY: typeof LAST_1_DAY;
  LAST_3_DAYS: typeof LAST_3_DAYS;
  LAST_WEEK: typeof LAST_WEEK;
  YESTERDAY: typeof YESTERDAY;
  THIS_WEEK: typeof THIS_WEEK;
  THIS_MONTH: typeof THIS_MONTH;
  LAST_MONTH: typeof LAST_MONTH;
  THIS_YEAR: typeof THIS_YEAR;
  LAST_YEAR: typeof LAST_YEAR;
  NEXT_YEAR: typeof NEXT_YEAR;
}

const DateRanger = InternalDateRanger as DateRangerInstance;

// 内置 ranges
DateRanger.NEAR_1_MINUTES = NEAR_1_MINUTES;
DateRanger.NEAR_5_MINUTES = NEAR_5_MINUTES;
DateRanger.NEAR_10_MINUTES = NEAR_10_MINUTES;
DateRanger.NEAR_20_MINUTES = NEAR_20_MINUTES;
DateRanger.NEAR_30_MINUTES = NEAR_30_MINUTES;
DateRanger.NEAR_1_HOURS = NEAR_1_HOURS;
DateRanger.NEAR_2_HOURS = NEAR_2_HOURS;
DateRanger.NEAR_3_HOURS = NEAR_3_HOURS;
DateRanger.NEAR_6_HOURS = NEAR_6_HOURS;
DateRanger.NEAR_12_HOURS = NEAR_12_HOURS;
DateRanger.TODAY = TODAY;
DateRanger.LAST_1_DAY = LAST_1_DAY;
DateRanger.LAST_3_DAYS = LAST_3_DAYS;
DateRanger.YESTERDAY = YESTERDAY;
DateRanger.THIS_WEEK = THIS_WEEK;
DateRanger.LAST_WEEK = LAST_WEEK;
DateRanger.THIS_MONTH = THIS_MONTH;
DateRanger.LAST_MONTH = LAST_MONTH;
DateRanger.THIS_YEAR = THIS_YEAR;
DateRanger.LAST_YEAR = LAST_YEAR;
DateRanger.NEXT_YEAR = NEXT_YEAR;

export default DateRanger;
