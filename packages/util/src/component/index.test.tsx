import React from 'react';
import { joinComponent } from './index';

describe('component', () => {
  it('joinComponent', () => {
    const taskIdList = [100, 101, 102, 103];
    const component1 = joinComponent(taskIdList, item => <a>{item}</a>);
    const component2 = joinComponent(taskIdList, item => <a>{item}</a>, ', ');
    // component1
    expect(component1.length).toEqual(4);
    // TODO: test
    // expect(component1[0].props.children.length).toEqual(2);
    // expect(component1[0].props.children[0].type).toEqual('a');
    // expect(component1[0].props.children[1]).toEqual('、');
    // component2
    expect(component2.length).toEqual(4);
    // TODO: test
    // expect(component2[0].props.children.length).toEqual(2);
    // expect(component2[0].props.children[0].type).toEqual('a');
    // expect(component2[0].props.children[1]).toEqual(', ');
  });
});
