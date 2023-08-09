/**
 * 字符串分割，按照指定的长度对字符串进行分割
 * @param{string} str 字符串
 * @param{number} 指定的分隔长度
 * @return{array}
 */
export function splitByLength(str: string | undefined | null, scale: number) {
  if (str && str.length < scale) {
    return [str];
  }
  const result = [];
  let index = 0;
  while (index < str.length) {
    result.push(str.slice(index, (index += scale)));
  }
  return result;
}