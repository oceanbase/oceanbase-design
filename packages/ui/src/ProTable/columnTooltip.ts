type ColumnLike = Record<string, any>;

function getColumnTooltip(column: ColumnLike) {
  return column.tooltip ?? column.tip;
}

function isValidColumnTooltip(tooltip: unknown): boolean {
  if (tooltip == null || tooltip === '') {
    return false;
  }
  if (typeof tooltip === 'object' && tooltip !== null && !Array.isArray(tooltip)) {
    const { title, icon } = tooltip as { title?: unknown; icon?: unknown };
    if (icon) {
      return true;
    }
    return title != null && title !== '';
  }
  return true;
}

export function columnsHaveTooltip(columns?: ColumnLike[]): boolean {
  if (!columns?.length) {
    return false;
  }
  return columns.some(column => {
    if (isValidColumnTooltip(getColumnTooltip(column))) {
      return true;
    }
    return column.children?.length ? columnsHaveTooltip(column.children) : false;
  });
}

/** 阻止 pro-components 用 LabelIconTip 渲染列头 tooltip，改由 OB Table 统一处理 */
export function stripColumnTooltip(columns?: ColumnLike[]): ColumnLike[] | undefined {
  if (!columns?.length) {
    return columns;
  }
  return columns.map(({ tooltip: _tooltip, tip: _tip, children, ...rest }) => ({
    ...rest,
    children: children ? stripColumnTooltip(children) : children,
  }));
}

function findSourceColumn(
  column: ColumnLike,
  sourceColumns: ColumnLike[] | undefined,
  index: number
): ColumnLike | undefined {
  if (!sourceColumns?.length) {
    return undefined;
  }
  if (column.key != null) {
    const byKey = sourceColumns.find(item => item.key === column.key);
    if (byKey) {
      return byKey;
    }
  }
  if (column.dataIndex != null) {
    const byDataIndex = sourceColumns.find(
      item =>
        item.dataIndex === column.dataIndex ||
        item.dataIndex?.toString() === column.dataIndex?.toString()
    );
    if (byDataIndex) {
      return byDataIndex;
    }
  }
  return sourceColumns[index];
}

/** 将用户 columns 上的 tooltip 合并回 pro-components 处理后的 columns */
export function mergeColumnTooltip(
  processedColumns?: ColumnLike[],
  sourceColumns?: ColumnLike[]
): ColumnLike[] | undefined {
  if (!processedColumns?.length) {
    return processedColumns;
  }
  return processedColumns.map((column, index) => {
    const source = findSourceColumn(column, sourceColumns, index);
    const tooltip = source ? getColumnTooltip(source) : undefined;
    return {
      ...column,
      ...(tooltip !== undefined ? { tooltip } : {}),
      children: column.children?.length
        ? mergeColumnTooltip(column.children, source?.children)
        : column.children,
    };
  });
}
