import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';

export interface RangeOption {
  /**
   * @description 选项名称
   */
  name: string;
  /**
   * @description 时间范围
   */
  range?: (current: Moment | Dayjs) => [Moment | Dayjs, Moment | Dayjs];
}
