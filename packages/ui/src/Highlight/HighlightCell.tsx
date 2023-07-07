import classNames from 'classnames';
import * as React from 'react';

export interface HighlightCellProps {
  prefixCls: string;
  theme: string;
  data: { index: number; value: string };
  emptyText?: string;
  width: string;
  /** User can not selection code when lock is enabled */
  lock?: boolean;
  rowOffset?: number;
  onMouseDown?: React.MouseEventHandler;
  lineNumber?: boolean;
  // antd hashid
  hashId?: string;
}

export default function HighlightCell({
  prefixCls,
  theme,
  data,
  emptyText,
  width,
  lock,
  lineNumber = false,
  onMouseDown,
  hashId,
}: HighlightCellProps) {
  const rowIndex: number = data?.index;
  return (
    <>
      {lineNumber ? (
        <td className={classNames(`${prefixCls}-${theme}-index`, `${prefixCls}-index`, hashId)}>
          {rowIndex}
        </td>
      ) : null}
      <td
        onMouseDown={onMouseDown}
        style={{ width, userSelect: lock ? 'none' : undefined }}
        className={classNames(`${prefixCls}-content`, hashId)}
        dangerouslySetInnerHTML={{ __html: data?.value ?? (emptyText || '') }}
      />
    </>
  );
}
