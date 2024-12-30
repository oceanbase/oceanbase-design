import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';

export interface RangeOption {
  /**
   * @description 选项展示名称
   */
  label: string;
  /**
   * @description 选项英文展示名称，用来兼容内部国际化，外部传入的选项直接对 label 做国际化即可
   */
  enLabel?: string;
  /**
   * @description 选项 key
   */
  rangeLabel: string;
  /**
   * @description 时间范围
   */
  name: string;
  /**
   * @description 唯一标识
   */
  range?: (current: Moment | Dayjs) => [Moment | Dayjs, Moment | Dayjs];
}
