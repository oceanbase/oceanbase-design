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
  NEXT_MONTH,
  NEXT_QUARTER,
  NEXT_WEEK,
  NEXT_YEAR,
  THIS_MONTH,
  THIS_QUARTER,
  THIS_WEEK,
  THIS_YEAR,
  TODAY,
  TOMORROW,
  YESTERDAY,
} from './constant';
import QuickPicker from './QuickPicker';
import InternalRanger from './Ranger';

export * from './QuickPicker';
export * from './Ranger';

type InternalRangerType = typeof InternalRanger;

export interface RangerInstance extends InternalRangerType {
  QuickPicker: typeof QuickPicker;
  NEAR_1_MINUTES: typeof NEAR_1_MINUTES;
  NEAR_5_MINUTES: typeof NEAR_5_MINUTES;
  NEAR_10_MINUTES: typeof NEAR_10_MINUTES;
  NEAR_20_MINUTES: typeof NEAR_20_MINUTES;
  NEAR_30_MINUTES: typeof NEAR_30_MINUTES;
  NEAR_1_HOURS: typeof NEAR_1_HOURS;
  NEAR_2_HOURS: typeof NEAR_2_HOURS;
  NEAR_3_HOURS: typeof NEAR_3_HOURS;
  NEAR_6_HOURS: typeof NEAR_6_HOURS;
  TODAY: typeof TODAY;
  YESTERDAY: typeof YESTERDAY;
  TOMORROW: typeof TOMORROW;
  THIS_WEEK: typeof THIS_WEEK;
  LAST_WEEK: typeof LAST_WEEK;
  NEXT_WEEK: typeof NEXT_WEEK;
  THIS_MONTH: typeof THIS_MONTH;
  LAST_MONTH: typeof LAST_MONTH;
  NEXT_MONTH: typeof NEXT_MONTH;
  THIS_QUARTER: typeof THIS_QUARTER;
  LAST_QUARTER: typeof LAST_QUARTER;
  NEXT_QUARTER: typeof NEXT_QUARTER;
  THIS_YEAR: typeof THIS_YEAR;
  LAST_YEAR: typeof LAST_YEAR;
  NEXT_YEAR: typeof NEXT_YEAR;
}

const Ranger = InternalRanger as RangerInstance;

// 内置 ranges
Ranger.NEAR_1_MINUTES = NEAR_1_MINUTES;
Ranger.NEAR_5_MINUTES = NEAR_5_MINUTES;
Ranger.NEAR_10_MINUTES = NEAR_10_MINUTES;
Ranger.NEAR_20_MINUTES = NEAR_20_MINUTES;
Ranger.NEAR_30_MINUTES = NEAR_30_MINUTES;
Ranger.NEAR_1_HOURS = NEAR_1_HOURS;
Ranger.NEAR_2_HOURS = NEAR_2_HOURS;
Ranger.NEAR_3_HOURS = NEAR_3_HOURS;
Ranger.NEAR_6_HOURS = NEAR_6_HOURS;
Ranger.TODAY = TODAY;
Ranger.YESTERDAY = YESTERDAY;
Ranger.TOMORROW = TOMORROW;
Ranger.THIS_WEEK = THIS_WEEK;
Ranger.LAST_WEEK = LAST_WEEK;
Ranger.NEXT_WEEK = NEXT_WEEK;
Ranger.THIS_MONTH = THIS_MONTH;
Ranger.LAST_MONTH = LAST_MONTH;
Ranger.NEXT_MONTH = NEXT_MONTH;
Ranger.THIS_QUARTER = THIS_QUARTER;
Ranger.LAST_QUARTER = LAST_QUARTER;
Ranger.NEXT_QUARTER = NEXT_QUARTER;
Ranger.THIS_YEAR = THIS_YEAR;
Ranger.LAST_YEAR = LAST_YEAR;
Ranger.NEXT_YEAR = NEXT_YEAR;
Ranger.QuickPicker = QuickPicker;

export default Ranger;
