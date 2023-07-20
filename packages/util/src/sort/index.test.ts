import { sortByString, sortByEnum } from './index';

describe('sort', () => {
  it('sortByString', () => {
    const arr1 = [{ name: 'a4' }, { name: 'a2' }, { name: 'a3' }, { name: 'a1' }];
    const arr2 = [{ name: 'John' }, { name: 'Mike' }, { name: 'Army' }, { name: 'Bob' }];
    const sortedArr1 = arr1.sort((a, b) => sortByString(a, b, 'name'));
    const sortedArr2 = arr2.sort((a, b) => sortByString(a, b, 'name'));
    expect(sortedArr1).toEqual([{ name: 'a1' }, { name: 'a2' }, { name: 'a3' }, { name: 'a4' }]);
    expect(sortedArr2).toEqual([
      { name: 'Army' },
      { name: 'Bob' },
      { name: 'John' },
      { name: 'Mike' },
    ]);
  });

  it('sortByEnum should be effective for object array', () => {
    const arr1 = [{ role: '3' }, { role: '1' }, { role: '4' }, { role: '2' }];
    const arr2 = [{ role: '3' }, { role: '1' }, { role: '4' }];
    const sortArr = ['1', '2', '3', '4'];
    const sortedArr1 = arr1.sort((a, b) => sortByEnum(a, b, 'role', sortArr));
    const sortedArr2 = arr2.sort((a, b) => sortByEnum(a, b, 'role', sortArr));
    expect(sortedArr1).toEqual([{ role: '1' }, { role: '2' }, { role: '3' }, { role: '4' }]);
    expect(sortedArr2).toEqual([{ role: '1' }, { role: '3' }, { role: '4' }]);
  });

  it('sortByEnum should be effective for simple array', () => {
    const arr1 = [3, 2, 4, 1];
    const arr2 = ['d', 'b', 'a', 'c'];
    const sortArr1 = [1, 2, 3, 4];
    const sortArr2 = ['a', 'b', 'c', 'd'];
    const sortedArr1 = arr1.sort((a, b) => sortByEnum(a, b, '', sortArr1));
    const sortedArr2 = arr2.sort((a, b) => sortByEnum(a, b, '', sortArr2));
    expect(sortedArr1).toEqual([1, 2, 3, 4]);
    expect(sortedArr2).toEqual(['a', 'b', 'c', 'd']);
  });
});
