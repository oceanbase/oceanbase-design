import { isNil, isNaN, toNumber } from 'lodash';
import filesize from 'filesize';
import moment from 'moment';
import { DATE_FORMAT } from '../constant';
import { isNullValue } from '../util';

type Base = 2 | 10;

/**
 * 将字节数格式化为易读的形式
 */
export function humanSize(bytes: number | string, base: Base = 2): string {
  const newBytes = toNumber(bytes);
  return filesize(newBytes, { base });
}

/**
 * 将微秒转换为毫秒
 */
export function us2ms(value: number): string | number {
  return isNullValue(value) ? '' : formatNumber(toNumber(value) / 1000);
}

/**
 * 将字节数转换为 KB，并保留两位小数
 */
export function byte2KB(value: number | string, base: Base = 2): number {
  const times = base === 2 ? 1024 : 1000;
  return Math.round((toNumber(value) / times) * 100) / 100;
}

/**
 * 将字节数转换为 MB，并保留两位小数
 */
export function byte2MB(value: number | string, base: Base = 2): number {
  const times = base === 2 ? 1024 : 1000;
  return Math.round((toNumber(value) / times / times) * 100) / 100;
}

/**
 * 将字节数转换为 GB，并保留两位小数
 */
export function byte2GB(value: number | string, base: Base = 2): number {
  const times = base === 2 ? 1024 : 1000;
  return Math.round((toNumber(value) / times / times / times) * 100) / 100;
}

/**
 * 将字节数转换为 TB，并保留两位小数
 */
export function byte2TB(value: number | string, base: Base = 2): number {
  const times = base === 2 ? 1024 : 1000;
  return Math.round((toNumber(value) / times / times / times / times) * 100) / 100;
}

/**
 * 将字节数转换为 TB，并保留两位小数
 */
export function byte2PB(value: number | string, base: 2 | 10 = 2): number {
  const times = base === 2 ? 1024 : 1000;
  return Math.round((toNumber(value) / times / times / times / times / times) * 100) / 100;
}

// 将 GB 转变为字节数
export function GB2byte(value: number | string, base: Base = 2): number {
  if (base === 2) {
    // 二进制
    return toNumber(value) * 1024 * 1024 * 1024;
  } else {
    // 十进制
    return toNumber(value) * 1000 * 1000 * 1000;
  }
}

/**
 * 将任意值转换为布尔值
 */
export function toBoolean(value: any): boolean {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  }
  return !!value;
}

/**
 * 将浮点数转换为百分比，默认保留两位小数，可通过 decimal 参数指定保留的小数位数
 */
export function toPercent(value: number | string, decimal: number = 2): string {
  return isNil(value)
    ? ''
    : `${Math.round(toNumber(value) * Math.pow(10, decimal + 2)) / Math.pow(10, decimal)}%`;
}

/**
 * 格式化数字展示，小数部分四舍五入，可通过 decimal 参数指定保留的小数位数
 */
export function formatNumber(value: number | string, decimal: number = 2): number {
  return isNil(value)
    ? value
    : Math.round(toNumber(value) * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

/**
 * 格式化时间展示
 */
export function formatTime(
  value: number | string | undefined,
  format: string = DATE_FORMAT
): string {
  if (!value) {
    return '-'; // 时间为空时默认返回 - 字符
  }
  const newValue = toNumber(value);
  // 格式: 2018-10-30 14:52:16.0
  if (isNaN(newValue)) {
    return moment(value).format(format);
  }
  const length = value && value.toString() && value.toString().length;
  if (length === 16) {
    // 后端返回格式为微秒，16 位
    return moment(Math.round(newValue / 1000)).format(format);
  }
  if (length === 10) {
    // 后端返回格式为秒，10 位
    return moment(Math.round(newValue * 1000)).format(format);
  }
  // 后端返回格式为毫秒，13 位
  return newValue ? moment(newValue).format(format) : '';
}

/**
 * 格式化数字展示，以千位符(即逗号 ,) 分割，`1234 => 1,234` , `1234.523 => 1,234.523`
 */
export const separateNumber = (value: string | number | undefined): string | undefined => {
  const strValue = value?.toString();
  if (strValue?.includes('.')) {
    return strValue?.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
  //  $& 表示与正则表达式相匹配的内容
  return strValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
