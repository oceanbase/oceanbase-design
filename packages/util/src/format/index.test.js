import {
  toPercent,
  formatNumber,
  separateNumber,
  formatTime,
  byte2KB,
  byte2MB,
  byte2GB,
  byte2TB,
  byte2PB,
  GB2byte,
  toBoolean,
} from './index';

describe('format', () => {
  it('toPercent', () => {
    expect(toPercent(0.4953)).toBe('49.53%');
    expect(toPercent(0.4953, 1)).toBe('49.5%');
    expect(toPercent(0.4953, 0)).toBe('50%');
  });

  it('formatNumber', () => {
    expect(formatNumber(19.7284)).toBe(19.73);
    expect(formatNumber(19.7284, 1)).toBe(19.7);
    expect(formatNumber(19.7284, 0)).toBe(20);
  });

  it('separateNumber', () => {
    expect(separateNumber(1234)).toBe('1,234');
    expect(separateNumber(1234.523)).toBe('1,234.523');
    expect(separateNumber(1242334.7284)).toBe('1,242,334.7284');
  });

  it('formatTime', () => {
    const time1 = 1560138019000000; // 微秒
    const time2 = 1560138019000; // 毫秒
    const time3 = 1560138019; // 秒
    const tim4 = '2019-06-10 11:40:19.0';
    expect(formatTime(time1)).toBe('2019-06-10 11:40:19');
    expect(formatTime(time2)).toBe('2019-06-10 11:40:19');
    expect(formatTime(time3)).toBe('2019-06-10 11:40:19');
    expect(formatTime(tim4)).toBe('2019-06-10 11:40:19');
  });

  it('byte2KB', () => {
    const value = 1095216660.48;
    expect(byte2KB(value)).toBe(1069547.52);
    expect(byte2KB(value, 10)).toBe(1095216.66);
  });

  it('byte2MB', () => {
    const value = 1095216660.48;
    expect(byte2MB(value)).toBe(1044.48);
    expect(byte2MB(value, 10)).toBe(1095.22);
  });

  it('byte2GB', () => {
    const value = 1095216660.48;
    expect(byte2GB(value)).toBe(1.02);
    expect(byte2GB(value, 10)).toBe(1.1);
  });

  it('byte2TB', () => {
    const value = 4118657630208;
    expect(byte2TB(value)).toBe(3.75);
    expect(byte2TB(value, 10)).toBe(4.12);
  });

  it('byte2PB', () => {
    const value = 4118657630208000;
    expect(byte2PB(value)).toBe(3.66);
    expect(byte2PB(value, 10)).toBe(4.12);
  });

  it('GB2byte', () => {
    const value = 1.02;
    expect(GB2byte(value)).toBe(1095216660.48);
    expect(GB2byte(value, 10)).toBe(1020000000);
  });

  it('toBoolean', () => {
    // 特殊字符串
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('false')).toBe(false);
    // 字符串
    expect(toBoolean('haha')).toBe(true);
    expect(toBoolean('111')).toBe(true);
    expect(toBoolean('1')).toBe(true);
    expect(toBoolean('')).toBe(false);
    // 数字
    expect(toBoolean(111)).toBe(true);
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(0)).toBe(false);
    // 对象
    expect(toBoolean({})).toBe(true);
    // 数组
    expect(toBoolean([])).toBe(true);
    // 空值
    expect(toBoolean(null)).toBe(false);
    expect(toBoolean(undefined)).toBe(false);
    // NaN
    expect(toBoolean(NaN)).toBe(false);
  });
});
