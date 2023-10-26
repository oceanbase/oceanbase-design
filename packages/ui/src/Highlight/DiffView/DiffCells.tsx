import classNames from 'classnames';
import * as React from 'react';

export interface DiffCellsProps {
  diffPrefixCls: string;
  data: { index: number; type: 'add' | 'remove' | 'keep'; value: string };
  emptyText?: string;
  width: string;
  /** User can not selection code when lock is enabled */
  lock?: boolean;
  rowOffset?: number;
  onMouseDown?: React.MouseEventHandler;
  // antd hashid
  hashId?: string;
}

export default function DiffCells({
  diffPrefixCls,
  data,
  emptyText,
  width,
  lock,
  rowOffset = 0,
  onMouseDown,
  hashId,
}: DiffCellsProps) {
  const cellEmptyClassName = `${diffPrefixCls}-cell-empty`;
  const cellAddClassName = `${diffPrefixCls}-cell-add`;
  const cellRemoveClassName = `${diffPrefixCls}-cell-remove`;

  const add = data?.type === 'add';
  const remove = data?.type === 'remove';

  const mergedClassName = {
    [cellEmptyClassName]: !data,
    [cellAddClassName]: add,
    [cellRemoveClassName]: remove,
  };

  let rowIndex: number = data?.index;
  if (rowIndex !== undefined) {
    rowIndex += rowOffset;
  }

  return (
    <>
      <td className={classNames(`${diffPrefixCls}-index`, mergedClassName, hashId)}>{rowIndex}</td>
      <td className={classNames(`${diffPrefixCls}-mark`, mergedClassName, hashId)}>
        {add && '+'}
        {remove && '-'}
      </td>
      <td
        onMouseDown={onMouseDown}
        style={{ width, userSelect: lock ? 'none' : undefined }}
        className={classNames(`${diffPrefixCls}-code`, mergedClassName, hashId)}
        dangerouslySetInnerHTML={{ __html: data?.value ?? (emptyText || '') }}
      />
    </>
  );
}
