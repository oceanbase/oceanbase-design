import zhTW from 'antd/es/locale/zh_TW';
import type { Locale } from '.';

export default {
  ...zhTW,
  Table: {
    ...zhTW.Table,
    batchOperationBar: {
      selected: '已選',
      object: '個對象',
      cancel: '取消',
      collapse: '收起',
      open: '展開',
    },
  },
  Input: {
    ...zhTW.Input,
    Password: {
      lengthRuleMessage: '長度為 8~32 個字符',
      charRuleMessage: '只能包含字母、數字和特殊字符（~!@#%^&*_-+=|(){}[]:;,.?/`$"<>\\）',
      strengthRuleMessage: '大小寫字母、數字和特殊字符都至少包含 2 個',
      placeholder: '請輸入密碼',
      generatePlaceholder: '請輸入或隨機生成',
      randomlyGenerate: '隨機生成',
      pleaseKeepYourPasswordIn: '請牢記密碼，也可',
      copySuccessfully: '複製成功',
      copyPassword: '複製密碼',
      andKeepItProperly: '並妥善保存',
    },
  },
} as Locale;
