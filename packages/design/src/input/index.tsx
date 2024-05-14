import { Input as AntInput } from 'antd';
import InternalInput from './Input';
import type { InputProps, InputRef } from './Input';
import Search from './Search';
import Password from './Password';
import TextArea from './TextArea';

export * from 'antd/es/input';
export type { InputProps, InputLocale } from './Input';

type CompoundedComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<InputRef>
> & {
  Group: typeof AntInput.Group;
  Search: typeof Search;
  TextArea: typeof TextArea;
  Password: typeof Password;
  OTP: typeof AntInput.OTP;
};

const Input = InternalInput as CompoundedComponent;

Input.Group = AntInput.Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
Input.OTP = AntInput.OTP;

export default Input;
