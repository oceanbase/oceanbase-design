import {
  LAST_MONTH,
  LAST_QUARTER,
  LAST_WEEK,
  LAST_YEAR,
  NEAR_10_MINUTES,
  NEAR_1_HOURS,
  NEAR_1_MINUTES,
  NEAR_20_MINUTES,
  NEAR_2_HOURS,
  NEAR_30_MINUTES,
  NEAR_3_HOURS,
  NEAR_5_MINUTES,
  NEAR_6_HOURS,
  NEXT_QUARTER,
  NEXT_YEAR,
  THIS_MONTH,
  THIS_QUARTER,
  THIS_WEEK,
  THIS_YEAR,
  TODAY,
  YESTERDAY,
} from './constant';
import InternalDateRanger from './Ranger';

export * from './Ranger';

const DateRanger = InternalDateRanger;

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
DateRanger.TODAY = TODAY;
DateRanger.YESTERDAY = YESTERDAY;
DateRanger.THIS_WEEK = THIS_WEEK;
DateRanger.LAST_WEEK = LAST_WEEK;
DateRanger.THIS_MONTH = THIS_MONTH;
DateRanger.LAST_MONTH = LAST_MONTH;
DateRanger.THIS_QUARTER = THIS_QUARTER;
DateRanger.LAST_QUARTER = LAST_QUARTER;
DateRanger.NEXT_QUARTER = NEXT_QUARTER;
DateRanger.THIS_YEAR = THIS_YEAR;
DateRanger.LAST_YEAR = LAST_YEAR;
DateRanger.NEXT_YEAR = NEXT_YEAR;

export default DateRanger;
