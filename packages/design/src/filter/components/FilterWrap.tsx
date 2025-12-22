import { Flex } from '@oceanbase/design';
import type { FC, ReactNode } from 'react';
import React, { Children, isValidElement } from 'react';
import { FilterProvider } from '../FilterContext';
import type { BaseFilterProps } from '../type';
import FilterButton from './FilterButton';

interface FilterWrapProps extends Omit<BaseFilterProps, 'label'> {
  children: ReactNode;
  label?: ReactNode;
  /** 是否折叠模式（使用弹框包裹所有子元素），默认 false */
  collapsed?: boolean;
  /** 额外内容 */
  extra?: ReactNode;
  /** 容器间距 */
  gap?: number;
}

/**
 * FilterWrap 组件
 *
 * 用于包裹多个 Filter 组件，支持两种模式：
 *
 * 1. 普通模式（collapsed=false，默认）：横向排列多个 Filter 组件
 * ```tsx
 * <FilterWrap>
 *   <FilterSelect ... />
 *   <FilterCheckbox ... />
 * </FilterWrap>
 * ```
 *
 * 2. 折叠模式（collapsed=true）：将多个 Filter 组件合并到一个弹框中
 * ```tsx
 * <FilterWrap label="Filters" collapsed>
 *   <FilterSwitch label="Aggregate In Query" value={aggregate} onChange={setAggregate} />
 *   <FilterSwitch label="Dark Mode" value={darkMode} onChange={setDarkMode} />
 * </FilterWrap>
 * ```
 */
const FilterWrap: FC<FilterWrapProps> = ({
  children,
  label = 'Filters',
  icon,
  bordered = true,
  collapsed = false,
  extra,
  gap = 0,
  ...restProps
}) => {
  // 如果不使用折叠模式，按原来的方式渲染
  if (!collapsed) {
    return <Flex>{children}</Flex>;
  }

  // 使用折叠模式
  const handleClear = () => {
    // 遍历所有子组件，调用它们的 onChange 并设置为 false
    Children.forEach(children, child => {
      if (isValidElement(child) && child.props.onChange) {
        child.props.onChange(false);
      }
    });
  };

  const content = (
    <FilterProvider isWrapped={true}>
      <div
        style={{
          padding: '16px',
          maxHeight: 350,
          overflowY: 'auto',
          minWidth: 200,
          maxWidth: 300,
          fontSize: 'var(--ob-font-body1)',
        }}
      >
        <Flex vertical gap={gap}>
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return <React.Fragment key={index}>{child}</React.Fragment>;
            }
            return child;
          })}
        </Flex>
      </div>
    </FilterProvider>
  );

  return (
    <FilterButton
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      extra={extra}
      showArrow={false}
      showLabelDivider={!!restProps.footer}
      {...restProps}
    >
      <span>{label}</span>
    </FilterButton>
  );
};

export default FilterWrap;
