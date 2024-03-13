import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import MockDate from 'mockdate';
import moment from 'moment';
import Ranger from '../index';

// https://github.com/facebook/jest/issues/2582
const FORMAT_TYPE = 'YYYY-MM-DD HH:mm:ss';
const CUSTOMIZE = 'customize';

describe('Ranger ', () => {
  beforeEach(() => {
    const FORMAT_TYPE = 'YYYY-MM-DD HH:mm:ss';
    MockDate.set(moment('2017-09-18T03:30:07.795').format(FORMAT_TYPE));

    jest.mock('antd', () => {
      const antd = jest.requireActual('antd');
      const DatePicker = () => <div></div>;
      DatePicker.RangePicker = ({ value }) => (
        <div data-testid="range-picker">
          <div data-testid="range-picker-item1">{value[0].format(FORMAT_TYPE)}</div>
          <div data-testid="range-picker-item2">{value[1].format(FORMAT_TYPE)}</div>
        </div>
      );

      const Select = ({ onSelect, value, children }) => {
        // 考虑 cloneElement 不能有 undefined 的情况，但是实际执行是可以的
        const filtered = children.filter(c => !!c);
        const mockReact = jest.requireActual('react');
        return (
          <div data-testid="select">
            <div data-testid="select-value">{value}</div>
            {mockReact.Children.map(filtered, child => mockReact.cloneElement(child, { onSelect }))}
          </div>
        );
      };
      Select.Option = props => (
        <div
          key={props.value}
          data-testid="select.option"
          onClick={() => props.onSelect(props.value)}
        >
          {props.value}
        </div>
      );
      return { ...antd, DatePicker, Select };
    });
  });
  afterEach(() => {
    cleanup();
  });

  describe('Ranger 组件', () => {
    it('defaultQuickValue 正常', () => {
      const defaultQuickValue = Ranger.YESTERDAY.name;
      const { getByTestId } = render(
        <Ranger selects={[Ranger.TODAY, Ranger.YESTERDAY]} defaultQuickValue={defaultQuickValue} />
      );
      // expect(getByTestId('select-value').textContent).toBe(Ranger.YESTERDAY.name);
    });

    //   it('defaultValue 正常', () => {
    //     const defaultQuickValue = Ranger.YESTERDAY.name;
    //     const defaultValue = Ranger.YESTERDAY.range();
    //     const { getByTestId } = render(
    //       <Ranger
    //         selects={[Ranger.TODAY, Ranger.YESTERDAY]}
    //         defaultQuickValue={defaultQuickValue}
    //         defaultValue={defaultValue}
    //       />
    //     );
    //     // todo 考虑国际化
    //     // defaultValue 设置后，快速选择失效
    //     expect(getByTestId('select-value').textContent).toBe(CUSTOMIZE);
    //   });

    //   it('value 正常', () => {
    //     const defaultQuickValue = Ranger.YESTERDAY.name;
    //     const value = Ranger.TODAY.range();
    //     const defaultValue = Ranger.YESTERDAY.range();
    //     const { getByTestId } = render(
    //       <Ranger
    //         defaultQuickValue={defaultQuickValue}
    //         selects={[Ranger.TODAY, Ranger.YESTERDAY]}
    //         defaultValue={defaultValue}
    //         value={value}
    //       />
    //     );
    //     expect(getByTestId('select-value').textContent).toBe(CUSTOMIZE);
    //     expect(getByTestId('range-picker-item1').textContent).toBe(value[0].format(FORMAT_TYPE));
    //     expect(getByTestId('range-picker-item2').textContent).toBe(value[1].format(FORMAT_TYPE));
    //   });

    //   // it('selects 选中后， onChange 结果正常', () => {
    //   //   const fakeChange = jest.fn();
    //   //   const { getAllByTestId } = render(
    //   //     <Ranger selects={[Ranger.TODAY, Ranger.YESTERDAY]} onChange={fakeChange} />,
    //   //   );
    //   //   fireEvent.click(getAllByTestId('select.option')[1]);
    //   //   // 一次点击操作，触发一次 onChange
    //   //   expect(fakeChange).toBeCalledTimes(1);
    //   //   expect(fakeChange.mock.calls[0][0][0].format(FORMAT_TYPE)).toBe(
    //   //     Ranger.YESTERDAY.range()[0].format(FORMAT_TYPE),
    //   //   );
    //   //   expect(fakeChange.mock.calls[0][0][1].format(FORMAT_TYPE)).toBe(
    //   //     Ranger.YESTERDAY.range()[1].format(FORMAT_TYPE),
    //   //   );
    //   // });
    // });

    // describe('QuickPicker 组件', () => {
    //   it('defaultName 正常', () => {
    //     const defaultName = Ranger.YESTERDAY.name;
    //     const { getByTestId } = render(
    //       <Ranger.QuickPicker selects={[Ranger.TODAY, Ranger.YESTERDAY]} defaultName={defaultName} />
    //     );
    //     expect(getByTestId('select-value').textContent).toBe(defaultName);
    //   });
    //   it('name 正常', () => {
    //     const defaultName = Ranger.YESTERDAY.name;
    //     const name = Ranger.TODAY.name;
    //     const { getByTestId } = render(
    //       <Ranger.QuickPicker
    //         selects={[Ranger.TODAY, Ranger.YESTERDAY]}
    //         defaultName={defaultName}
    //         name={name}
    //       />
    //     );
    //     expect(getByTestId('select-value').textContent).toBe(name);
    //   });
    //   it('onChange 正常', () => {
    //     const fakeChange = jest.fn();
    //     const { getAllByTestId } = render(
    //       <Ranger.QuickPicker selects={[Ranger.TODAY, Ranger.YESTERDAY]} onChange={fakeChange} />
    //     );
    //     fireEvent.click(getAllByTestId('select.option')[1]);
    //     expect(fakeChange).toBeCalledTimes(1);
    //     expect(fakeChange.mock.calls[0][0][0].format(FORMAT_TYPE)).toBe(
    //       Ranger.YESTERDAY.range()[0].format(FORMAT_TYPE)
    //     );
    //     expect(fakeChange.mock.calls[0][0][1].format(FORMAT_TYPE)).toBe(
    //       Ranger.YESTERDAY.range()[1].format(FORMAT_TYPE)
    //     );
    //   });
  });
});
