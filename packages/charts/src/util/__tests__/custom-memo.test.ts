import { isEqualWithFunction } from '../custom-memo';

describe('custom-memo', () => {
  it('isEqualWithFunction', () => {
    expect(
      isEqualWithFunction(
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
        },
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
        }
      )
    ).toEqual(true);
    expect(
      isEqualWithFunction(
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          // arrow function
          fn: (x, y) => x + y,
        },
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          fn: (x, y) => x + y,
        }
      )
    ).toEqual(true);
    expect(
      isEqualWithFunction(
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          // normal function
          fn: function (x, y) {
            return x + y;
          },
        },
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          fn: function (x, y) {
            return x + y;
          },
        }
      )
    ).toEqual(true);
    expect(
      isEqualWithFunction(
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          // normal function abbreviation
          fn(x, y) {
            return x + y;
          },
        },
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          fn(x, y) {
            return x + y;
          },
        }
      )
    ).toEqual(true);
    expect(
      isEqualWithFunction(
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          fn: function (x, y) {
            return x + y;
          },
        },
        {
          a: 1,
          b: 2,
          data: [{ x: 1, y: 2 }],
          fn(x, y) {
            return x + y;
          },
        }
      )
    ).toEqual(false);
  });
});
