/**
 * 分段输入引擎:把格式化后的日期时间文本拆成可编辑的数字段(年/月/日/时/分/秒),
 * 并提供「按段覆盖输入」的取值规则(首位定值、超限夹取、时分进位)。
 * 输入是单个日期或时间文本,如 2026-02-30、08:30:45。
 */

export type SegmentType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

export interface Segment {
  /** 段类型 */
  type: SegmentType;
  /** 在整串中的起始下标(含) */
  start: number;
  /** 结束下标(不含) */
  end: number;
  /** 该段长度,同时也是该段的可输入位数 */
  maxLen: number;
}

interface SegmentRule {
  /** 该段能表示的最大值 */
  max: number;
  /** 首位达到该值就不可能有第二位,直接补零定值并跳到下一段;年份需要输满所以给到 10 */
  commitThreshold: number;
  /** 整体超限时是否把溢出的数字推入下一段(仅时/分,如时输入 25 → 时 02 且 5 进入分) */
  carryOverflow: boolean;
}

/** 各段的取值规则;新增段类型时必须在这里补齐 */
const SEGMENT_RULES: Record<SegmentType, SegmentRule> = {
  year: { max: 9999, commitThreshold: 10, carryOverflow: false },
  month: { max: 12, commitThreshold: 2, carryOverflow: false },
  day: { max: 31, commitThreshold: 4, carryOverflow: false },
  hour: { max: 23, commitThreshold: 3, carryOverflow: true },
  minute: { max: 59, commitThreshold: 6, carryOverflow: true },
  second: { max: 59, commitThreshold: 6, carryOverflow: false },
};

/** format token → 段类型 */
const TOKEN_TYPE: Record<string, SegmentType> = {
  YYYY: 'year',
  YY: 'year',
  MM: 'month',
  DD: 'day',
  HH: 'hour',
  hh: 'hour',
  mm: 'minute',
  ss: 'second',
};

/** 按出现顺序解析 format 里的段类型;正则就地创建,避免模块级 regex 的 lastIndex 互相干扰 */
function parseSegmentTypes(format: string): SegmentType[] {
  const types: SegmentType[] = [];
  const tokenRE = /YYYY|YY|MM|DD|HH|hh|mm|ss/g;
  let matched: RegExpExecArray | null;
  while ((matched = tokenRE.exec(format))) {
    types.push(TOKEN_TYPE[matched[0]]);
  }
  return types;
}

/** 把 format 里的段 token 换成 \d+,得到「文本是否由这个 format 产生」的匹配模式 */
const tokenPattern = (format: string) =>
  new RegExp(
    `^${format
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/YYYY|YY|MM|DD|HH|hh|mm|ss/g, '\\d+')}$`
  );

/**
 * 计算文本中每个可编辑段的字符区间。
 * 文本必须确实是这个 format 的产物(分隔符一致、数字片段数量一致),
 * 否则返回空数组让调用方关闭分段编辑,而不是把数字错配到别的段上。
 */
export function buildSegments(text: string, format: string): Segment[] {
  const types = parseSegmentTypes(format);
  const runs: { start: number; end: number }[] = [];
  const digitRE = /\d+/g;
  let matched: RegExpExecArray | null;
  while ((matched = digitRE.exec(text))) {
    runs.push({ start: matched.index, end: matched.index + matched[0].length });
  }
  if (types.length === 0 || runs.length !== types.length || !tokenPattern(format).test(text)) {
    return [];
  }
  return types.map((type, index) => {
    const run = runs[index];
    return { type, start: run.start, end: run.end, maxLen: run.end - run.start };
  });
}

export interface EditResult {
  /** 新文本 */
  text: string;
  /** 输入完成后要聚焦/选中的下一段(可能仍是当前段) */
  nextSegmentIndex: number;
  /** 该段是否已输满完成 */
  committed: boolean;
  /** 时/分输入导致超限时(如时输入 25),溢出到下一段的数字,由调用方作为下一段的新输入继续处理 */
  overflowDigit?: string;
}

const replaceSegment = (text: string, seg: Segment, value: string) =>
  text.slice(0, seg.start) + value + text.slice(seg.end);

/** 夹取到该段在自身宽度内能表示的最大值(如 2 位的月 → 12、日 → 31) */
const clampToSegmentMax = (seg: Segment) =>
  String(Math.min(SEGMENT_RULES[seg.type].max, 10 ** seg.maxLen - 1)).padStart(seg.maxLen, '0');

/**
 * 处理在指定段内的一次数字输入(覆盖式写入)。
 * @param text 当前整串
 * @param segments 段列表
 * @param segIndex 当前段下标
 * @param digit 输入的单个数字字符
 * @param caretOffset 在当前段内的字符偏移,即正在输入第几位
 */
export function applyDigit(
  text: string,
  segments: Segment[],
  segIndex: number,
  digit: string,
  caretOffset: number
): EditResult | null {
  const seg = segments[segIndex];
  if (!seg) return null;

  const rule = SEGMENT_RULES[seg.type];
  const chars = text.slice(seg.start, seg.end).split('');
  const pos = Math.min(caretOffset, seg.maxLen - 1);
  chars[pos] = digit;
  const nextSegmentIndex = Math.min(segIndex + 1, segments.length - 1);

  if (pos === 0) {
    // 首位:达到阈值说明该段不可能再有第二位(如月 2-9 → 0X),补零定值后跳段
    if (Number(digit) >= rule.commitThreshold) {
      return {
        text: replaceSegment(text, seg, digit.padStart(seg.maxLen, '0')),
        nextSegmentIndex,
        committed: true,
      };
    }
    const committed = seg.maxLen === 1;
    return {
      text: replaceSegment(text, seg, chars.join('')),
      nextSegmentIndex: committed ? nextSegmentIndex : segIndex,
      committed,
    };
  }

  // 末位:此时该段已输完,整体超限才需要夹取或进位。
  // 首位未达阈值时先原样显示,等用户把这一段输完再判断。
  if (Number(chars.join('')) > rule.max) {
    if (rule.carryOverflow) {
      // 时间段进位:当前段以已键入的首位补零定值(如时输入 25 → 02),
      // 该数字不丢弃,溢出推入下一段作为其新输入
      return {
        text: replaceSegment(text, seg, String(chars[0]).padStart(seg.maxLen, '0')),
        nextSegmentIndex,
        committed: true,
        overflowDigit: digit,
      };
    }
    // 日期段与秒超限(如月 15 / 日 35):夹取到上限后定值,
    // 不把溢出的数字推入相邻字段,避免写坏用户当前没在编辑的字段
    return {
      text: replaceSegment(text, seg, clampToSegmentMax(seg)),
      nextSegmentIndex,
      committed: true,
    };
  }

  const committed = pos + 1 >= seg.maxLen;
  return {
    text: replaceSegment(text, seg, chars.join('')),
    nextSegmentIndex: committed ? nextSegmentIndex : segIndex,
    committed,
  };
}

/** 清空一段(置零) */
export function clearSegment(text: string, seg: Segment): string {
  return replaceSegment(text, seg, '0'.repeat(seg.maxLen));
}
