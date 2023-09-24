import classNames from 'classnames';
import { getPrefix } from '../_util';
import React, { ReactNode, useMemo, useState, useEffect } from 'react';
import TagSelectContext from './TagSelectContext';
import Item from './Item';
import useStyle from './style';

export type TagSelectValueType = string | number | readonly string[];

export interface TagSelectOptionType {
  label: React.ReactNode;
  value: TagSelectValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

export interface TagSelectGroupProps {
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  multiple?: boolean;
  defaultValue?: TagSelectValueType | Array<TagSelectValueType>;
  value?: TagSelectValueType | Array<TagSelectValueType>;
  size?: string;
  options?: Array<TagSelectOptionType | string | number>;
  onChange?: (value: Array<TagSelectValueType> | TagSelectValueType) => void;
}

function toArray(value) {
  let res = value;
  if (value === undefined) {
    res = [];
  } else if (!Array.isArray(value)) {
    res = [value];
  }
  return res;
}

const Group: React.FC<TagSelectGroupProps> = ({
  title,
  multiple,
  defaultValue,
  size = 'middle',
  options = [],
  children,
  className,
  ...restProps
}) => {
  const prefix = getPrefix('tag-select');
  const { wrapSSR, hashId } = useStyle(prefix);
  const [value, setValue] = useState<Array<TagSelectValueType>>(
    toArray(defaultValue || restProps.value)
  );
  const [registeredValues, setRegisteredValues] = React.useState<Array<TagSelectValueType>>([]);

  const registerValue = (val: TagSelectValueType) => {
    setRegisteredValues(prev => [...prev, val]);
  };

  useEffect(() => {
    if ('value' in restProps) {
      setValue(toArray(restProps.value));
    }
  }, [restProps.value]);

  const handleValueChange = (v: TagSelectValueType) => {
    const registeredValue = value.filter(v1 => registeredValues.includes(v1));
    const newValue = [...registeredValue];
    const index = newValue.indexOf(v);
    const checkedValue = index === -1 ? v : undefined;
    if (multiple) {
      if (index === -1) {
        newValue.push(v);
      } else {
        newValue.splice(index, 1);
      }
    }
    if (!('value' in restProps)) {
      setValue(multiple ? newValue : [checkedValue]);
    }
    restProps.onChange?.(multiple ? newValue : checkedValue);
  };

  const contextValue = {
    multiple,
    size,
    value,
    disabled: restProps.disabled,
    onChange: restProps.onChange,
    registerValue,
    handleValueChange,
  };

  const memoOptions = useMemo(() => {
    return options.map<TagSelectOptionType>(option => {
      if (typeof option === 'string' || typeof option === 'number') {
        return { label: option, value: option };
      }
      return option;
    });
  }, [options]);

  const childrenNode = options.length
    ? memoOptions.map<React.ReactNode>(option => (
        <Item
          key={option.value.toString()}
          disabled={'disabled' in option ? option.disabled : restProps.disabled}
          value={option.value}
          onChange={option.onChange}
          style={option.style}
          checked={value?.includes(option.value)}
        >
          {option.label}
        </Item>
      ))
    : children;

  const groupCls = classNames(`${prefix}-container`, hashId, className);

  return wrapSSR(
    <TagSelectContext.Provider value={contextValue}>
      <div className={groupCls}>
        <div className={`${prefix}-title`}>{title}</div>
        {childrenNode}
      </div>
    </TagSelectContext.Provider>
  );
};

export default Group;
