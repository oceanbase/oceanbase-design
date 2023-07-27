import React from 'react';

/**
 * 将数组的所有元素，映射为 React 组件后，通过分隔符连接成完整的组件
 * 数组原生的 join 方法只能连接数字、字符串等简单值，而 joinComponent 则可以连接对象、组件等复杂值
 **/
export function joinComponent<T>(
  array: T[] = [],
  render: (item: T) => React.ReactNode,
  seperator = '、'
) {
  return array.map((item, index) => {
    const content = render(item);
    if (index === array.length - 1) {
      return content;
    }
    return (
      <span key={index}>
        {content}
        {seperator}
      </span>
    );
  });
}
