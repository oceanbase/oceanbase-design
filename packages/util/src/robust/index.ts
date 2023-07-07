import { isNullValue } from '../util';

/**
 * 为了避免解析错误格式的 json 字符串时页面奔溃，需要使用错误处理
 */
export function jsonParse(jsonStr: string, defaultValue: any): any {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return defaultValue;
  }
}

/**
 * 空保护函数
 *
 * @template T
 * @param {(T | undefined | null)} value
 * @param {T} protectValue
 * @returns
 */
export const protect = <T>(value: T | undefined | null, protectValue: T): T =>
  isNullValue(value) ? protectValue : (value as T);

/**
 * string 类型的空保护函数
 *
 * @param {string} value
 * @param {string} [protectValue='-']
 */
export const stringProtect = (value: string | null | undefined, protectValue: string = '-') =>
  protect(value, protectValue);
