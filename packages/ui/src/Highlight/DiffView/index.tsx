import classNames from 'classnames';
import { diffLines } from 'diff';
import hljs from 'highlight.js/lib/core';
import warning from 'rc-util/lib/warning';
import React, { useEffect, useMemo } from 'react';
import type { HighlightProps } from '..';
import { languageMap } from '..';
import { getPrefix } from '../..//_util';
import { useKeyDownCopyEvent } from '../useKeyDownCopyEvent';
import DiffCells from './DiffCells';
// @ts-ignore
import '../index.less';

const MAX_MERGE_TIMES = 10000;

const EMPTY_TEXT = `<span class="hljs-comment">// 没有数据</span>`;

export interface DiffViewProps extends Omit<HighlightProps, 'children' | 'innerHTML'> {
  /**
   * @description 自定义前缀
   * @ignore
   */
  prefixCls?: string;
  /**
   * @description 样式
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * @description className 类名
   * @ignore
   */
  className?: string;
  /**
   * @title 原始代码
   * @renderType json
   * @description 原始代码
   */
  source: string;
  /**
   * @title 目标代码
   * @renderType json
   * @description 目标代码
   */
  target: string;
  /**
   * @title 是否分割展示
   * @description 是否分割展示
   */
  split?: boolean;
  /**
   * @title 起始行号
   * @description 起始行号，默认为 1，也可以分别对左右两侧起始行号进行配置
   */
  startRowIndex?: number | number[];
}

interface RenderRow {
  value: string;
  type: 'remove' | 'keep' | 'add';
  index: number;
}

function getHighlightRows(language: string, code: string): string[] {
  const { value } = language ? hljs.highlight(language, code) : hljs.highlightAuto(code);
  return value.split(/\r?\n/);
}

const DiffView: React.FC<DiffViewProps> = ({
  style,
  className,
  prefixCls: customizePrefixCls,
  source,
  target,
  language,
  split = true,
  theme,
  height,
  startRowIndex: baseStartRowIndex = 1,
}: DiffViewProps) => {
  const prefixCls = getPrefix('highlight');
  const diffPrefixCls = `${prefixCls}-diff`;

  const [report, setReport] = React.useState<{
    source: string[];
    target: string[];
    diff: { count?: number; added?: boolean; removed?: boolean }[];
  }>(null);

  const normalizedIndexes = Array.isArray(baseStartRowIndex)
    ? baseStartRowIndex
    : [baseStartRowIndex, baseStartRowIndex];

  const [baseStartRowIndexSrc = 1, baseStartRowIndexTgt = 1] = normalizedIndexes;

  const rowOffsetSrc = baseStartRowIndexSrc > 1 ? baseStartRowIndexSrc - 1 : 0;
  const rowOffsetTgt = baseStartRowIndexTgt > 1 ? baseStartRowIndexTgt - 1 : 0;

  // =========================== Language ===========================
  useEffect(() => {
    if (language) {
      hljs.registerLanguage(language, languageMap[language]);
    } else {
      Object.keys(languageMap).forEach(lan => {
        hljs.registerLanguage(lan, languageMap[lan]);
      });
    }
  }, [language]);

  // ============================= Lock =============================
  // Lock the selection to make user easy to copy
  const [selectable, setSelectable] = React.useState<'source' | 'target'>(null);

  function setSelectableRegion(region: 'source' | 'target') {
    if (region !== selectable) {
      window.getSelection?.().removeAllRanges?.();
      window.getSelection?.().empty?.();
    }

    setSelectable(region);
  }

  const onSourceMouseDown = () => {
    setSelectableRegion('source');
  };

  const onTargetMouseDown = () => {
    setSelectableRegion('target');
  };

  // ============================= Diff =============================
  // Collection diff content
  useEffect(() => {
    if (!source && !target) {
      setReport(null);
      return;
    }

    const srcRows = getHighlightRows(language, source || '');
    const tgtRows = getHighlightRows(language, target || '');
    const diff = diffLines(source || '', target || '');

    const newReport = {
      source: srcRows,
      target: tgtRows,
      diff,
    };

    setReport(newReport);
  }, [source, target, language]);

  // Get diff rows
  const diffData = useMemo(() => {
    if (!report) {
      return null;
    }

    let startRowIndex = 0;
    let endRowIndex = 0;
    const sourceRows: RenderRow[] = [];
    const targetRows: RenderRow[] = [];

    report.diff.forEach(({ count, added, removed }) => {
      // Source
      if (added) {
        sourceRows.push(...new Array(count).fill(null));
      } else {
        sourceRows.push(
          ...report.source.slice(startRowIndex, startRowIndex + count).map((value, index) => ({
            value,
            index: startRowIndex + index + 1,
            type: removed ? ('remove' as const) : ('keep' as const),
          }))
        );
        startRowIndex += count;
      }

      // Target
      if (removed) {
        targetRows.push(...new Array(count).fill(null));
      } else {
        targetRows.push(
          ...report.target.slice(endRowIndex, endRowIndex + count).map((value, index) => ({
            value,
            index: endRowIndex + index + 1,
            type: added ? ('add' as const) : ('keep' as const),
          }))
        );
        endRowIndex += count;
      }
    });

    return { sourceRows, targetRows };
  }, [report, split]);

  // Merge -- & ++ to one row
  const mergedData = useMemo(() => {
    if (!diffData) {
      return null;
    }

    function findMergeRowIndex(
      startIndex: number,
      sourceRows: RenderRow[],
      targetRows: RenderRow[]
    ): {
      index: number;
      removeCount: number;
      addCount: number;
    } {
      for (let index = startIndex; index < sourceRows.length - 1; index += 1) {
        if (
          // Row: ---- | null
          // Row: null | ++++
          sourceRows[index]?.type === 'remove' &&
          !targetRows[index] &&
          !sourceRows[index + 1] &&
          targetRows[index + 1]?.type === 'add'
        ) {
          // Find source remove start index
          let removeStartIndex = index;
          for (let i = index - 1; i >= 0; i -= 1) {
            if (sourceRows[i]?.type !== 'remove') {
              removeStartIndex = i + 1;
              break;
            }
          }

          // Find target add end index
          let addEndIndex = index;
          for (let i = index + 1; i <= targetRows.length; i += 1) {
            if (targetRows[i]?.type !== 'add') {
              addEndIndex = i - 1;
              break;
            }
          }

          return {
            index: index + 1,
            removeCount: index - removeStartIndex + 1,
            addCount: addEndIndex - index,
          };
        }
      }
      return null;
    }

    let { sourceRows, targetRows } = diffData;

    let mergeStartIndex = 0;
    let times = 0;
    for (; times < MAX_MERGE_TIMES; times += 1) {
      const mergeInfo = findMergeRowIndex(mergeStartIndex, sourceRows, targetRows);

      if (mergeInfo === null) {
        break;
      }

      const { index, addCount, removeCount } = mergeInfo;
      const maxMergeRowCount = Math.min(addCount, removeCount);

      sourceRows = [...sourceRows.slice(0, index), ...sourceRows.slice(index + maxMergeRowCount)];
      targetRows = [...targetRows.slice(0, index - maxMergeRowCount), ...targetRows.slice(index)];
      mergeStartIndex = index - maxMergeRowCount;
    }

    warning(
      times < MAX_MERGE_TIMES,
      'Diff check too many times. Please help to fire issue of DiffView. Thanks.'
    );

    /**
     * Change target rows order when has empty content:
     *  -- null --              [  Data  ]
     *  -- null --      =>      -- null --
     *  [  Data  ]              -- null --
     */
    const targetRowsLen = targetRows.length;

    for (let i = 0; i < targetRowsLen; i += 1) {
      if (!targetRows[i]) {
        for (let j = i + 1; j < targetRowsLen; j += 1) {
          const followRow = targetRows[j];
          if (followRow) {
            if (followRow.type === 'add') {
              targetRows[i] = followRow;
              targetRows[j] = null;
            }
            break;
          }
        }
      }
    }

    return {
      rows: sourceRows.map((src, index) => ({
        source: src,
        target: targetRows[index],
      })),
      sourceEmpty: sourceRows.every(row => !row),
      targetEmpty: targetRows.every(row => !row),
    };
  }, [diffData]);

  // ============================ Render ============================
  let viewRows: React.ReactNode;

  if (!report) {
    viewRows = (
      <tr>
        <DiffCells
          width="100%"
          diffPrefixCls={diffPrefixCls}
          data={{
            index: 1,
            value: EMPTY_TEXT,
            type: 'keep',
          }}
        />
      </tr>
    );
  } else if (split) {
    // Split view
    viewRows = mergedData.rows.map(({ source: src, target: tgt }, index) => (
      <tr key={index}>
        <DiffCells
          width="50%"
          diffPrefixCls={diffPrefixCls}
          data={src}
          emptyText={index === 0 && mergedData.sourceEmpty && EMPTY_TEXT}
          onMouseDown={onSourceMouseDown}
          lock={selectable !== 'source'}
          rowOffset={rowOffsetSrc}
        />
        <DiffCells
          width="50%"
          diffPrefixCls={diffPrefixCls}
          data={tgt}
          emptyText={index === 0 && mergedData.targetEmpty && EMPTY_TEXT}
          onMouseDown={onTargetMouseDown}
          lock={selectable !== 'target'}
          rowOffset={rowOffsetTgt}
        />
      </tr>
    ));
  } else {
    // Merge
    viewRows = diffData.sourceRows.map((src, index) => {
      return (
        <tr key={index}>
          <DiffCells
            width="100%"
            diffPrefixCls={diffPrefixCls}
            data={src ?? diffData.targetRows[index]}
            rowOffset={rowOffsetTgt}
          />
        </tr>
      );
    });
  }

  const codeRef = React.useRef<HTMLDivElement>();
  useKeyDownCopyEvent(codeRef);

  return (
    <div
      style={{
        height,
        ...style,
      }}
      ref={codeRef}
      tabIndex={-1}
      className={classNames(
        prefixCls,
        diffPrefixCls,
        `${prefixCls}-${theme === 'dark' ? 'dark' : 'light'}`,
        {
          [`${diffPrefixCls}-split`]: split,
        },
        className
      )}
    >
      <table>
        <tbody>{viewRows}</tbody>
      </table>
    </div>
  );
};

export default DiffView;
