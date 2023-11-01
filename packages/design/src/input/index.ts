// import { Input } from 'antd';
import InputPassword from './InputPassword';
import Group from 'antd/es/input/Group';
import type { InputProps, InputRef } from 'antd/es/input/Input';
import InternalInput from 'antd/es/input/Input';
import Search from 'antd/es/input/Search';
import TextArea from 'antd/es/input/TextArea';

export type { PasswordProps } from './InputPassword';
export type { GroupProps } from 'antd/es/input/Group';
export type { InputProps, InputRef } from 'antd/es/input/Input';
export type { SearchProps } from 'antd/es/input/Search';
export type { TextAreaProps } from 'antd/es/input/TextArea';

type CompoundedComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<InputRef>
> & {
  Group: typeof Group;
  Search: typeof Search;
  TextArea: typeof TextArea;
  Password: typeof InputPassword;
};

const Input = InternalInput as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}

Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = InputPassword;
export default Input;
