import zhCN from 'antd/es/locale/zh_CN';
import type { Locale } from '.';

export default {
  ...zhCN,
  Table: {
    ...zhCN.Table,
    batchOperationBar: {
      selected: '已选',
      object: '个对象',
      cancel: '取消',
      collapse: '收起',
      open: '展开',
    },
  },
  Input: {
    ...zhCN.Input,
    Password: {
      lengthRuleMessage: '长度为 8~32 个字符',
      charRuleMessage: '只能包含字母、数字和特殊字符（~!@#%^&*_-+=|(){}[]:;,.?/`$"<>\\）',
      strengthRuleMessage: '大小写字母、数字和特殊字符都至少包含 2 个',
      placeholder: '请输入密码',
      generatePlaceholder: '请输入或随机生成',
      randomlyGenerate: '随机生成',
      pleaseKeepYourPasswordIn: '请牢记密码，也可',
      copySuccessfully: '复制成功',
      copyPassword: '复制密码',
      andKeepItProperly: '并妥善保存',
    },
  },
} as Locale;
