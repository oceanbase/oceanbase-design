/**
 * 分段输入引擎:将日期时间字符串拆分为可编辑的段(年/月/日/时/分/秒),
 * 支持按段选中、输入数字的智能限制与自动跳位。
 */

export type SegmentType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'literal';

export interface Segment {
  /** 段类型 */
  type: SegmentType;
  /** 在整串中的起始下标(含) */
  start: number;
  /** 结束下标(不含) */
  end: number;
  /** 段固定长度(数字段) */
  maxLen: number;
  /** 所属日期: start=开始时间, end=结束时间 */
  which: 'start' | 'end';
}

/** 数字段的最大值(用于输入限制) */
const SEGMENT_MAX: Record<string, number> = {
  year: 9999,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 59,
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

const TOKEN_RE = /YYYY|YY|MM|DD|HH|hh|mm|ss/g;

/** 单个日期时间段对应的 token 序列(保留顺序) */
interface DateSlots {
  which: 'start' | 'end';
  tokens: SegmentType[];
}

/**
 * 解析范围显示的模板,生成段的占位结构。
 * 返回的是「模板」,真正的字符偏移要在拿到具体显示文本后用 buildSegments 计算。
 *
 * @param baseFormat 开始时间的格式(不带时区)
 * @param fullFormat 结束时间的格式(可能带时区)
 * @param separator 中间分隔符(如 ' - ' / ' ~ ')
 */
export function buildSegmentPlan(
  baseFormat: string,
  fullFormat: string,
  separator: string
): DateSlots[] {
  const parse = (fmt: string): SegmentType[] => {
    const out: SegmentType[] = [];
    let m: RegExpExecArray | null;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(fmt))) {
      out.push(TOKEN_TYPE[m[0]]);
    }
    return out;
  };
  return [
    { which: 'start', tokens: parse(baseFormat) },
    { which: 'end', tokens: parse(fullFormat) },
  ];
}

/**
 * 根据真实显示文本 + 计划,计算每个可编辑段的字符区间。
 * 通过正则把整串拆成 [数字|非数字] 交替片段,再按类型归位。
 */
export function buildSegments(
  text: string,
  baseFormat: string,
  fullFormat: string,
  separator: string
): Segment[] {
  const plan = buildSegmentPlan(baseFormat, fullFormat, separator);
  const segments: Segment[] = [];

  // 用正则扫描出所有「数字跑片段」的位置
  const digitRE = /\d+/g;
  const runs: { start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = digitRE.exec(text))) {
    runs.push({ start: m.index, end: m.index + m[0].length });
  }

  // 期望的数字段总数
  const expected = plan[0].tokens.length + plan[1].tokens.length;
  if (runs.length < expected || expected === 0) {
    return [];
  }

  // 前 plan[0].tokens.length 个 run 属于 start,其余属于 end
  let i = 0;
  plan.forEach(({ which, tokens }) => {
    tokens.forEach(type => {
      const run = runs[i++];
      if (!run) return;
      segments.push({
        type,
        start: run.start,
        end: run.end,
        maxLen: run.end - run.start,
        which,
      });
    });
  });

  return segments;
}

/** 段第一位数字达到该值即「不可能再有第二位」→ 直接定值并跳下一段 */
function firstDigitCommitThreshold(type: SegmentType): number {
  switch (type) {
    case 'month':
      return 2; // 首位 2-9 → 0X
    case 'day':
      return 4; // 首位 4-9 → 0X
    case 'hour':
      return 3; // 首位 3-9 → 0X (时最大23, 首位只能是0/1/2)
    case 'minute':
    case 'second':
      return 6; // 首位 6-9 → 0X (最大59)
    default:
      return 10; // year 不提前提交
  }
}

export interface EditResult {
  /** 新文本 */
  text: string;
  /** 输入完成后要聚焦/选中的下一段(可能仍是当前段) */
  nextSegmentIndex: number;
  /** 该段是否已输满完成 */
  committed: boolean;
  /** 当输入导致当前段超限时(如时输入 25),溢出到下一段的数字,由调用方作为下一段的新输入继续处理 */
  overflowDigit?: string;
}

/**
 * 处理在指定段内的一次数字输入。
 * @param text 当前整串
 * @param segments 段列表
 * @param segIndex 当前段下标
 * @param digit 输入的单个数字字符
 * @param caretOffset 在当前段内的字符偏移(已输入第几位)
 */
export function applyDigit(
  text: string,
  segments: Segment[],
  segIndex: number,
  digit: string,
  caretOffset: number
): EditResult | null {
  const seg = segments[segIndex];
  if (!seg || seg.type === 'literal') return null;

  const oldVal = text.slice(seg.start, seg.end);
  const chars = oldVal.split('');
  // 把当前偏移位置替换成新数字(覆盖式)
  const pos = Math.min(caretOffset, seg.maxLen - 1);
  chars[pos] = digit;

  // 组合成临时值
  let committed = false;

  if (seg.type === 'year') {
    // 年份补满 maxLen 即完成,不提前跳
    committed = pos + 1 >= seg.maxLen;
  } else {
    const max = SEGMENT_MAX[seg.type];
    const threshold = firstDigitCommitThreshold(seg.type);
    const firstDigit = Number(chars[0]);

    if (pos === 0) {
      const d = Number(digit);
      if (d >= threshold) {
        // 第一位就不可能再有第二位 → 补零定值
        const padded = String(d).padStart(seg.maxLen, '0');
        for (let k = 0; k < seg.maxLen; k++) chars[k] = padded[k];
        committed = true;
      } else if (seg.maxLen === 1) {
        committed = true;
      } else {
        // 第一位有效,等待第二位
        committed = false;
      }
    } else {
      // 第二位:校验整体 ≤ max
      const candidate = Number(chars.join(''));
      if (candidate > max) {
        // 非法(如时输入 25):当前段以已键入的首位补零定值(02),
        // 该数字不丢弃,溢出推入下一段作为其新输入
        const padded = String(chars[0] ?? digit).padStart(seg.maxLen, '0');
        const newText = text.slice(0, seg.start) + padded + text.slice(seg.end);
        return {
          text: newText,
          nextSegmentIndex: Math.min(segIndex + 1, segments.length - 1),
          committed: true,
          overflowDigit: digit,
        };
      }
      committed = pos + 1 >= seg.maxLen;
    }
  }

  const newText = text.slice(0, seg.start) + chars.join('') + text.slice(seg.end);
  const nextSegmentIndex = committed ? Math.min(segIndex + 1, segments.length - 1) : segIndex;

  return { text: newText, nextSegmentIndex, committed };
}

/**
 * 删除一段(置零),返回新文本。
 */
export function clearSegment(text: string, seg: Segment): string {
  const zeros = '0'.repeat(seg.maxLen);
  return text.slice(0, seg.start) + zeros + text.slice(seg.end);
}
