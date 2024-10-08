import React, { createContext } from 'react';
import type { TagSelectValueType } from './Group';

export type TagSelectContextProps = {
  multiple?: boolean;
  size?: string;
  disabled?: boolean;
  value?: TagSelectValueType[];
  onChange?: (value: TagSelectValueType[] | TagSelectValueType) => void;
  registerValue?: (val: TagSelectValueType) => void;
  handleValueChange?: (val: TagSelectValueType) => void;
};

const TagSelectContext = createContext<TagSelectContextProps>({});

export default TagSelectContext;
