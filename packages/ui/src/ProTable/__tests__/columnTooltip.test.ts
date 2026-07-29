import { columnsHaveTooltip, mergeColumnTooltip, stripColumnTooltip } from '../columnTooltip';

describe('ProTable columnTooltip utils', () => {
  it('columnsHaveTooltip should detect tooltip in nested columns', () => {
    expect(columnsHaveTooltip([{ title: 'Name', dataIndex: 'name' }])).toBe(false);
    expect(columnsHaveTooltip([{ title: 'Name', dataIndex: 'name', tooltip: 'help' }])).toBe(true);
    expect(
      columnsHaveTooltip([
        {
          title: 'Group',
          children: [{ title: 'Age', dataIndex: 'age', tip: 'tip' }],
        },
      ])
    ).toBe(true);
  });

  it('stripColumnTooltip should remove tooltip and tip', () => {
    expect(
      stripColumnTooltip([
        { title: 'Name', dataIndex: 'name', tooltip: 'help' },
        { title: 'Age', dataIndex: 'age', tip: 'tip' },
      ])
    ).toEqual([
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
    ]);
  });

  it('mergeColumnTooltip should restore tooltip by dataIndex', () => {
    expect(
      mergeColumnTooltip(
        [
          { title: 'Name', dataIndex: 'name', index: 0 },
          { title: 'Age', dataIndex: 'age', index: 1 },
        ],
        [
          { title: 'Name', dataIndex: 'name', tooltip: 'help' },
          { title: 'Age', dataIndex: 'age', tip: 'tip' },
        ]
      )
    ).toEqual([
      { title: 'Name', dataIndex: 'name', index: 0, tooltip: 'help' },
      { title: 'Age', dataIndex: 'age', index: 1, tooltip: 'tip' },
    ]);
  });
});
