import { applyDigit, buildSegments, clearSegment } from '../hooks/segments';

const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm:ss';

const dateSegments = buildSegments('2026-01-15', DATE_FORMAT);
const timeSegments = buildSegments('08:30:45', TIME_FORMAT);

describe('segments', () => {
  describe('buildSegments' /** 计算可编辑段的字符区间 */, () => {
    it('Should split a date text into year/month/day segments' /** 日期文本应拆成 年/月/日 三段 */, () => {
      expect(dateSegments).toStrictEqual([
        { type: 'year', start: 0, end: 4, maxLen: 4 },
        { type: 'month', start: 5, end: 7, maxLen: 2 },
        { type: 'day', start: 8, end: 10, maxLen: 2 },
      ]);
      expect(timeSegments).toStrictEqual([
        { type: 'hour', start: 0, end: 2, maxLen: 2 },
        { type: 'minute', start: 3, end: 5, maxLen: 2 },
        { type: 'second', start: 6, end: 8, maxLen: 2 },
      ]);
    });

    it('Should follow the format order and its separators' /** 段顺序与分隔符由 format 决定 */, () => {
      expect(buildSegments('10/12/2024', 'MM/DD/YYYY').map(seg => seg.type)).toStrictEqual([
        'month',
        'day',
        'year',
      ]);
      expect(buildSegments('10/12/2024', 'MM/DD/YYYY')[0]).toStrictEqual({
        type: 'month',
        start: 0,
        end: 2,
        maxLen: 2,
      });
      // 分隔符与 format 不一致时,文本不被当作这个 format 的产物
      expect(buildSegments('10-12-2024', 'MM/DD/YYYY')).toStrictEqual([]);
    });

    it('Should keep the segment width from the text' /** 段宽度取自文本,不固定为两位 */, () => {
      expect(buildSegments('2026-1-15', DATE_FORMAT)[1]).toStrictEqual({
        type: 'month',
        start: 5,
        end: 6,
        maxLen: 1,
      });
    });

    it('Should return no segment when the text does not match the format' /** 文本与 format 不匹配时不返回任何段 */, () => {
      expect(buildSegments('', DATE_FORMAT)).toStrictEqual([]);
      expect(buildSegments('2026-01', DATE_FORMAT)).toStrictEqual([]);
      expect(buildSegments('2026-01-15', 'HH:mm:ss')).toStrictEqual([]);
      expect(buildSegments('2026-01-15', '')).toStrictEqual([]);
    });
  });

  describe('applyDigit' /** 按段覆盖输入 */, () => {
    it('Should commit a single digit that cannot be followed by another' /** 首位达阈值时补零定值并跳下一段 */, () => {
      // 月首位 9 → 09
      expect(applyDigit('2026-01-15', dateSegments, 1, '9', 0)).toStrictEqual({
        text: '2026-09-15',
        nextSegmentIndex: 2,
        committed: true,
      });
      // 分首位 6 → 06
      expect(applyDigit('08:30:45', timeSegments, 1, '6', 0)).toStrictEqual({
        text: '08:06:45',
        nextSegmentIndex: 2,
        committed: true,
      });
      // 秒首位 9 → 09
      expect(applyDigit('08:30:45', timeSegments, 2, '9', 0)).toStrictEqual({
        text: '08:30:09',
        nextSegmentIndex: 2,
        committed: true,
      });
    });

    it('Should wait for the second digit when the first digit is still valid' /** 首位仍可能成立时等待第二位 */, () => {
      expect(applyDigit('2026-01-15', dateSegments, 1, '1', 0)).toStrictEqual({
        text: '2026-11-15',
        nextSegmentIndex: 1,
        committed: false,
      });
      expect(applyDigit('08:30:45', timeSegments, 0, '1', 0)).toStrictEqual({
        text: '18:30:45',
        nextSegmentIndex: 0,
        committed: false,
      });
      // 年份需要输满 4 位
      expect(applyDigit('2026-01-15', dateSegments, 0, '9', 0)).toStrictEqual({
        text: '9026-01-15',
        nextSegmentIndex: 0,
        committed: false,
      });
      expect(applyDigit('2026-01-15', dateSegments, 0, '5', 3)).toStrictEqual({
        text: '2025-01-15',
        nextSegmentIndex: 1,
        committed: true,
      });
    });

    it('Should clamp an over-limit date segment instead of carrying into the next one' /** 日期段超限时夹取到上限,不推入相邻字段 */, () => {
      // 月 15 → 12
      expect(applyDigit('2026-11-15', dateSegments, 1, '5', 1)).toStrictEqual({
        text: '2026-12-15',
        nextSegmentIndex: 2,
        committed: true,
      });
      // 日 35 → 31
      expect(applyDigit('2026-01-35', dateSegments, 2, '5', 1)).toStrictEqual({
        text: '2026-01-31',
        nextSegmentIndex: 2,
        committed: true,
      });
    });

    it('Should carry the digit of an over-limit time segment into the next one' /** 时/分超限时把数字推入下一段 */, () => {
      // 时的首位 2 仍然可能成立(如 20-23),先原样显示,等第二位再判断
      expect(applyDigit('08:30:45', timeSegments, 0, '2', 0)).toStrictEqual({
        text: '28:30:45',
        nextSegmentIndex: 0,
        committed: false,
      });
      // 时 24 → 02,溢出的 4 交给调用方推入分
      expect(
        applyDigit('28:30:45', buildSegments('28:30:45', TIME_FORMAT), 0, '4', 1)
      ).toStrictEqual({
        text: '02:30:45',
        nextSegmentIndex: 1,
        committed: true,
        overflowDigit: '4',
      });
    });

    it('Should accept a valid in-limit value' /** 未超限时原样写入并提交 */, () => {
      expect(applyDigit('18:30:45', timeSegments, 0, '9', 1)).toStrictEqual({
        text: '19:30:45',
        nextSegmentIndex: 1,
        committed: true,
      });
    });

    it('Should return null for an unknown segment' /** 段不存在时返回 null */, () => {
      expect(applyDigit('2026-01-15', dateSegments, 9, '1', 0)).toBeNull();
      expect(applyDigit('2026-01-15', [], 0, '1', 0)).toBeNull();
    });
  });

  describe('clearSegment' /** 清空段 */, () => {
    it('Should fill the segment with zeros' /** 清空即按段宽置零 */, () => {
      expect(clearSegment('2026-01-15', dateSegments[1])).toBe('2026-00-15');
      expect(clearSegment('08:30:45', timeSegments[2])).toBe('08:30:00');
    });
  });
});
