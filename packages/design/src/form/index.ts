import { Form } from 'antd';
import Item from './FormItem';

export * from 'antd/es/form';
export type { FormItemProps } from './FormItem';

Form.Item = Item;

export default Form;
