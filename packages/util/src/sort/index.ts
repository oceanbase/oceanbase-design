import moment from 'moment';
import { toNumber } from 'lodash';

/**
 * 根据数字大小进行排序，常用于表格列排序
 */
export function sortByNumber(a: any, b: any, property: string): number {
  return toNumber(a[property] || 0) - toNumber(b[property] || 0);
}

/**
 * 根据字符串的 ASCII 码进行排序，常用于表格列排序
 */
export function sortByString(a: any, b: any, property: string): number {
  if (a[property] > b[property]) {
    return 1;
  }
  if (a[property] < b[property]) {
    return -1;
  }
  return 0;
}

/**
 * 根据时间先后进行排序，常用于表格列排序
 */
export function sortByMoment(a: any, b: any, property: string): number {
  return moment(a[property] || 0).valueOf() - moment(b[property] || 0).valueOf();
}

/**
 * 根据枚举数组中的元素顺序进行排序，支持对象值和简单值，常用于对顺序有要求的场景，需和 `sort` 数组函数配合使用。注意: `property` 为空时，表明使用元素值(而不是元素的属性值)本身去比较，常用于普通数组排序。
 */
export function sortByEnum(
  a: any,
  b: any,
  property: string,
  enumArr: (string | number)[] = []
): number {
  if (property) {
    return enumArr.indexOf(a[property]) - enumArr.indexOf(b[property]);
  } else {
    return enumArr.indexOf(a) - enumArr.indexOf(b);
  }
}
