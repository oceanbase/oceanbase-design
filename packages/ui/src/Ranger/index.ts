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
import type { RangeOption } from './typing';

type InternalRangerType = typeof InternalRanger;

interface RangerType extends InternalRangerType {
  NEAR_1_MINUTES: RangeOption;
  NEAR_5_MINUTES: RangeOption;
  NEAR_10_MINUTES: RangeOption;
  NEAR_20_MINUTES: RangeOption;
  NEAR_30_MINUTES: RangeOption;
  NEAR_1_HOURS: RangeOption;
  NEAR_2_HOURS: RangeOption;
  NEAR_3_HOURS: RangeOption;
  NEAR_6_HOURS: RangeOption;
  TODAY: RangeOption;
  YESTERDAY: RangeOption;
  TOMORROW: RangeOption;
  THIS_WEEK: RangeOption;
  LAST_WEEK: RangeOption;
  NEXT_WEEK: RangeOption;
  THIS_MONTH: RangeOption;
  LAST_MONTH: RangeOption;
  NEXT_MONTH: RangeOption;
  THIS_QUARTER: RangeOption;
  LAST_QUARTER: RangeOption;
  NEXT_QUARTER: RangeOption;
  THIS_YEAR: RangeOption;
  LAST_YEAR: RangeOption;
  NEXT_YEAR: RangeOption;
  QuickPicker: typeof QuickPicker;
}

const Ranger: RangerType = InternalRanger as RangerType;

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
