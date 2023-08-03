import {createContext} from 'react';
import type {TagSelectValueType} from './Group';

export type TagSelectContextProps = {
    multiple?: boolean;
    size?: string;
    value?: Array<TagSelectValueType>;
    onChange?: (value: Array<TagSelectValueType> | TagSelectValueType) => void;
    registerValue?: (val: TagSelectValueType) => void;
    handleValueChange?: (val: TagSelectValueType) => void;
};

const TagSelectContext = createContext<TagSelectContextProps>({});

export default TagSelectContext;